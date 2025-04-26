
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const CHATBOT_WEBHOOK_URL = 'https://n8n.techfusion-ventures.xyz/webhook-test/e3b2f9f2-9c17-4bbc-a21a-63a309109f63';
const SESSION_ID_KEY = 'chatbot_session_id';

// Helper function to generate a simple unique ID
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false); // Add loading state
  const sessionIdRef = useRef<string | null>(null); // To store session ID
  const scrollAreaRef = useRef<HTMLDivElement>(null); // Ref for scroll area viewport

  // Get or generate session ID on component mount
  useEffect(() => {
    let storedSessionId = localStorage.getItem(SESSION_ID_KEY);
    if (!storedSessionId) {
      storedSessionId = generateSessionId();
      localStorage.setItem(SESSION_ID_KEY, storedSessionId);
    }
    sessionIdRef.current = storedSessionId;
    console.log("Chatbot Session ID:", storedSessionId); // For debugging
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      // Use the scroll area's viewport for scrolling
      const viewport = scrollAreaRef.current.querySelector<HTMLDivElement>('[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTo({
          top: viewport.scrollHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [messages]);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isSending || !sessionIdRef.current) return; // Ensure session ID exists

    const userMessageText = inputValue;
    const newUserMessage: Message = {
      id: Date.now(),
      text: userMessageText,
      sender: 'user',
    };

    // Add user message immediately
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue(''); // Clear input after getting the value
    setIsSending(true); // Set loading state

    const payload = {
      message: userMessageText,
      sessionId: sessionIdRef.current, // Include the session ID
    };

    try {
      // Send user message and session ID to the webhook
      console.log("Sending to webhook:", payload); // For debugging
      const response = await fetch(CHATBOT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), // Send payload with session ID
      });

      let botResponseText = "Sorry, I couldn't get a response. Please try again."; // Default error message

      if (response.ok) {
         console.log('Message sent to webhook successfully.');
         try {
           const responseData = await response.json();
           console.log("Received from webhook:", responseData); // For debugging

           // Adjust parsing based on the new structure
           if (responseData && responseData.status === 'success' && responseData.data && responseData.data.response) {
             botResponseText = responseData.data.response;
           } else if (responseData && responseData.status !== 'success') {
              console.error('Webhook returned non-success status:', responseData);
              botResponseText = `Received an error status: ${responseData.status || 'Unknown error'}`;
           } else {
             console.error('Webhook response missing expected fields (status: "success", data.response):', responseData);
             botResponseText = "Received an unexpected response format.";
           }
         } catch (jsonError) {
           console.error('Error parsing webhook JSON response:', jsonError);
           botResponseText = "Error reading the response. Please try again.";
         }
      } else {
        const errorText = await response.text();
        console.error('Webhook error:', response.status, errorText);
        botResponseText = `Sorry, I couldn't process that (Error ${response.status}). Please try again.`;
      }

       // Add bot response message
       const botResponseMessage: Message = {
         id: Date.now() + 1, // Ensure unique ID
         text: botResponseText,
         sender: 'bot',
       };
       setMessages((prev) => [...prev, botResponseMessage]);

    } catch (error) {
      console.error('Error sending message to webhook:', error);
       const errorResponseMessage: Message = {
         id: Date.now() + 1,
         text: `Sorry, there was a connection error. Please try again later.`,
         sender: 'bot',
       };
       setMessages((prev) => [...prev, errorResponseMessage]);
    } finally {
      setIsSending(false); // Reset loading state
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="primary" // Consider using 'accent' for consistency
          size="icon"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg bg-accent text-accent-foreground hover:bg-accent/80 transition-colors duration-300"
          aria-label="Open Chat"
          disabled={isSending} // Disable button while sending
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col p-0">
        <SheetHeader className="p-4 border-b relative"> {/* Reduced padding */}
          <SheetTitle>Alchemy Assistant</SheetTitle>
          <SheetDescription>
            Ask me anything about our services or automation!
          </SheetDescription>
           <SheetClose className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>
        {/* Wrap ScrollArea content in a div to assign the ref */}
        <ScrollArea className="flex-1 overflow-y-auto" ref={scrollAreaRef}>
           <div className="p-4 space-y-4">
             {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-3 text-sm break-words ${ // Added break-words
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
             {isSending && messages[messages.length - 1]?.sender === 'user' && (
              <div className="flex justify-start">
                <div className="max-w-[75%] rounded-lg p-3 text-sm bg-muted text-muted-foreground">
                  <span className="italic">Bot is thinking...</span> {/* Updated indicator */}
                </div>
              </div>
            )}
           </div>
        </ScrollArea>
        <SheetFooter className="p-4 border-t">
          <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
              disabled={isSending} // Disable input while sending
              aria-label="Chat message input"
            />
            <Button type="submit" size="icon" variant="primary" className="bg-accent text-accent-foreground hover:bg-accent/80" disabled={isSending || !sessionIdRef.current || inputValue.trim() === ''}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
