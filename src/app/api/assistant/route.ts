import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();
    
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set in the environment variables.");
      return NextResponse.json({ response: "Server configuration error: Gemini API key is missing." }, { status: 500 });
    }

    const systemPrompt = "You are the Alchemy Assistant, an AI chatbot for TechFusion Alchemy. Your goal is to help users understand our AI business automation services, answer their questions, and encourage them to book a demo. Be concise, professional, and helpful. Use British English.";

    const contents = [];
    let lastRole = '';

    if (history && Array.isArray(history)) {
        for (const msg of history) {
            const currentRole = msg.role === 'user' ? 'user' : 'model';
            
            // If the first message is from the model (e.g. the hardcoded greeting),
            // prepend a hidden user prompt to ensure strict alternation starting with 'user'.
            if (contents.length === 0 && currentRole === 'model') {
                contents.push({ role: 'user', parts: [{ text: "Hi" }] });
                lastRole = 'user';
            }
            
            // Prevent consecutive messages of the same role
            if (currentRole === lastRole) {
                 contents.push({ role: currentRole === 'user' ? 'model' : 'user', parts: [{ text: "Acknowledged." }] });
            }

            if (msg.text) {
                contents.push({
                    role: currentRole,
                    parts: [{ text: msg.text }]
                });
                lastRole = currentRole;
            }
        }
    }

    // Handle the new incoming message
    if (lastRole === 'user') {
        contents.push({ role: 'model', parts: [{ text: "Acknowledged." }] });
    }
    
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const requestBody = {
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        },
        contents: contents,
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
        }
    };
    
    console.log("=== GEMINI API DEBUG LOG ===");
    console.log("Incoming Message:", message);
    console.log("Processed History contents:", JSON.stringify(contents, null, 2));

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Gemini API Error:", errorText);
        throw new Error(`Gemini API returned status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log("Gemini API Raw Response:", JSON.stringify(data, null, 2));
    
    const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response.";
    console.log("Extracted Bot Text:", botText);

    return NextResponse.json({ response: botText });
  } catch (error) {
    console.error('Assistant API Error:', error);
    return NextResponse.json(
      { response: "I'm experiencing a technical issue. Please try again later." },
      { status: 500 }
    );
  }
}
