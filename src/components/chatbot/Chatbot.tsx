
'use client';

import React, { useState } from 'react';
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

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false); // Add loading state

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isSending) return;

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

    try {
      // Send user message to the webhook
      const response = await fetch(CHATBOT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessageText }),
      });

      if (!response.ok) {
        console.error('Webhook error:', response.status, await response.text());
        // Optionally display an error message to the user in the chat
         const errorResponse: Message = {
           id: Date.now() + 1,
           text: `Sorry, I couldn't process that. Please try again.`,
           sender: 'bot',
         };
         setMessages((prev) => [...prev, errorResponse]);
      } else {
         console.log('Message sent to webhook successfully.');
         // TODO: Replace with actual Genkit flow call for AI response
         // Simulate bot thinking response for now
         const botResponse: Message = {
           id: Date.now() + 1, // Ensure unique ID
           text: `Thinking about "${userMessageText}"... (AI response pending)`,
           sender: 'bot',
         };
          // Using setTimeout to simulate delay, replace when AI is integrated
         setTimeout(() => {
            setMessages((prev) => [...prev, botResponse]);
         }, 500); // Short delay for the thinking message
      }
    } catch (error) {
      console.error('Error sending message to webhook:', error);
      // Optionally display an error message to the user in the chat
       const errorResponse: Message = {
         id: Date.now() + 1,
         text: `Sorry, there was an error connecting. Please try again later.`,
         sender: 'bot',
       };
       setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsSending(false); // Reset loading state
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="primary" // Keep variant as primary for styling consistency if defined, otherwise consider 'accent'
          size="icon"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg bg-accent text-accent-foreground hover:bg-accent/80 transition-colors duration-300"
          aria-label="Open Chat"
          disabled={isSending} // Disable button while sending
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle>Alchemy Assistant</SheetTitle>
          <SheetDescription>
            Ask me anything about our services or automation!
          </SheetDescription>
           <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>
        <ScrollArea className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-3 text-sm ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
             {isSending && messages[messages.length - 1]?.sender === 'user' && ( // Show typing indicator only if last message was user and sending
              <div className="flex justify-start">
                <div className="max-w-[75%] rounded-lg p-3 text-sm bg-muted text-muted-foreground">
                  <span className="italic">Sending...</span>
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
            />
            <Button type="submit" size="icon" variant="primary" className="bg-accent text-accent-foreground hover:bg-accent/80" disabled={isSending}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
