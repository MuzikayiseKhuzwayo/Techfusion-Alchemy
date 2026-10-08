import { NextResponse } from 'next/server';
import { appendLeadToSheet } from '@/lib/lead-storage';

const SYSTEM_PROMPT = `You are the Lead Technical Assistant for Techfusion Automata (Pty) Ltd (CIPC Reg: 2026/399837/07), an elite boutique AI & backend workflow engineering practice founded and led by Muzikayise Khuzwayo, under Techfusion Ventures (https://techfusion-ventures.xyz).

CORE POSITIONING & PHILOSOPHY:
- We build bulletproof, deterministic, production-grade automated backends.
- We strictly reject fragile Zapier zaps, generic "AI agency" marketing hype, and unmonitored scripts.
- Every workflow we deploy includes idempotency checks, deterministic JSON schema validation, dead-letter queue (DLQ) failover, and Telegram/Slack telemetry.
- Lead Engineer: Muzikayise Khuzwayo (Electrical & Computer Engineering, University of Cape Town; Dean's Merit List; Dell Young Leaders Scholar).

CORE TECHNICAL CAPABILITIES & SYSTEMS:
1. Autonomous Sales Lead Pipelines & Inbound Triage:
   - Sub-45-second speed-to-lead ingestion.
   - Interactive value intake, immediate WhatsApp/Email outreach, CRM sync (GoHighLevel/HubSpot) with deduplication.
2. Vision OMS & Document AI Parsing:
   - Vision-driven multi-page PDF/invoice table extraction.
   - Line-item reconciliation, zero-hallucination checks, and ERP/database sync (as built for Henry Cumines / Ulysses Group).
3. Scaled Content & Autonomous Marketing Engines:
   - Multi-platform syndication across LinkedIn, X, Meta, and newsletters.
   - Telemetry-driven organic winner detection with micro-budget ad scaling.
4. Outcome-Driven Operations & Business Development:
   - Automated delivery evaluation against role-calibrated benchmarks. Output over hours surveillance.

PROVEN TRACK RECORD:
- Henry Cumines / Ulysses Group: Vision OMS purchase order & invoice extraction with strict reconciliation.
- PerformanceX / Digital Authority Partners: Automated client intake & executive manager analytics.
- Levatus i Norden AB: Real-estate CRM & document workflows.
- Research & Testing: Dubstrata & Simulacra autonomous agent testing, SSRN research papers.

OFFERINGS & PRICING:
1. The 5-Day Pilot Sprint:
   - Cost: $850 (approx. R15,500).
   - Delivery: 5 business days.
   - Guarantee: Solves a single mission-critical bottleneck with a 14-day edge-case warranty.
2. 30-Minute Free Architecture Session with Muzi:
   - Direct link: https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes
   - Direct Email: muzi@techfusion-alchemy.xyz
   - Action: We map out the client's operational bottleneck and provide a technical flowchart.

SECURITY & POPIA:
- 100% compliant with South Africa's POPIA and global GDPR standards.
- We NEVER train public AI models on client data.
- All credentials and API keys are stored in encrypted vaults (Supabase Vault / AWS Secrets Manager).

COMMUNICATION & CONVERSATION GOALS:
- Tone: Highly knowledgeable, engineering-first, consultative, crisp British English spelling, direct and helpful. Zero corporate fluff.
- Mission: Understand the prospect's workflow, diagnose their friction points, explain how our engineering solves it, and capture their contact info.
- Lead Capture:
  * Proactively ask for their operational bottleneck, company name, and email or phone number.
  * WHENEVER the user provides an email, phone number, or expresses clear interest in a solution/consultation, you MUST invoke the 'save_lead_info' tool immediately to register them in our architecture review queue.
  * After saving, warmly confirm that their project details have been recorded for Muzikayise to review, and provide the Calendly link if they want to choose a direct 30-minute consultation slot right away: https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes.`;

const TOOL_DECLARATION = {
  function_declarations: [
    {
      name: 'save_lead_info',
      description: 'Record or save lead contact details, project scope, and automation requirements directly into the Techfusion Automata architecture queue and Google Sheet.',
      parameters: {
        type: 'OBJECT',
        properties: {
          name: { type: 'STRING', description: 'Name of the contact or lead' },
          companyName: { type: 'STRING', description: 'Company or business name' },
          email: { type: 'STRING', description: 'Email address or contact phone number' },
          goal: { type: 'STRING', description: 'Primary automation goal or system requested' },
          challenge: { type: 'STRING', description: 'Core operational bottleneck or problem described' },
          losses: { type: 'STRING', description: 'Estimated financial loss or hours wasted per week/month' },
          budget: { type: 'STRING', description: 'Budget tier or willingness to invest (e.g. $850 Pilot Sprint)' }
        },
        required: ['email']
      }
    }
  ]
};

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

    let leadSaved = false;

    // Check for passive email extraction as safety fallback
    const emailMatch = message.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
    const passiveEmail = emailMatch ? emailMatch[0] : null;

    // Prepare contents array for Gemini with strict role alternation
    const contents: any[] = [];
    let lastRole = '';

    if (history && Array.isArray(history)) {
      for (const msg of history) {
        const currentRole = msg.role === 'user' ? 'user' : 'model';

        if (contents.length === 0 && currentRole === 'model') {
          contents.push({ role: 'user', parts: [{ text: "Hello" }] });
          lastRole = 'user';
        }

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

    if (lastRole === 'user') {
      contents.push({ role: 'model', parts: [{ text: "Understood. How can I assist you with automation?" }] });
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    let botText = "";

    if (GEMINI_API_KEY) {
      try {
        const requestBody = {
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          tools: [TOOL_DECLARATION],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 600,
          }
        };

        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody)
        });

        if (res.ok) {
          const data = await res.json();
          const candidate = data.candidates?.[0];
          const part = candidate?.content?.parts?.[0];

          if (part?.functionCall && part.functionCall.name === 'save_lead_info') {
            const args = part.functionCall.args || {};
            
            // Append lead to Google Sheet (Techfusion-Alchemy-Leads)
            const saveRes = await appendLeadToSheet({
              name: args.name,
              companyName: args.companyName,
              primaryGoal: args.goal || 'Chatbot Inbound Consultation',
              biggestChallenge: args.challenge || message,
              estimatedLosses: args.losses,
              estimatedBudget: args.budget,
              contactEmail: args.email || passiveEmail,
              source: 'Chatbot AI Assistant',
            });

            leadSaved = true;
            console.log('Lead captured via Gemini tool calling:', args, 'Saved to Sheet:', saveRes.success);

            // Complete the function response turn with Gemini
            contents.push(candidate.content);
            contents.push({
              role: 'user',
              parts: [{
                functionResponse: {
                  name: 'save_lead_info',
                  response: {
                    status: 'success',
                    message: 'Lead registered in Techfusion Automata architecture queue.'
                  }
                }
              }]
            });

            const followUpRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
                contents,
                generationConfig: { temperature: 0.7, maxOutputTokens: 600 }
              })
            });

            if (followUpRes.ok) {
              const followUpData = await followUpRes.json();
              botText = followUpData.candidates?.[0]?.content?.parts?.[0]?.text || "";
            }
          } else if (part?.text) {
            botText = part.text;
          }
        } else {
          const errText = await res.text();
          console.warn(`Gemini API error status ${res.status}: ${errText}`);
        }
      } catch (geminiErr) {
        console.error('Error during Gemini API call:', geminiErr);
      }
    }

    // Safety fallback: if an email was detected but the tool wasn't triggered, save anyway
    if (!leadSaved && passiveEmail) {
      console.log('Passive email detected in message. Appending to Google Sheet:', passiveEmail);
      await appendLeadToSheet({
        contactEmail: passiveEmail,
        primaryGoal: 'Chatbot Direct Inquiry',
        biggestChallenge: message,
        source: 'Chatbot Passive Capture',
      });
      leadSaved = true;
    }

    // Graceful fallback response if upstream LLM is unreachable
    if (!botText) {
      const lower = message.toLowerCase();
      if (leadSaved) {
        botText = `Thank you! I've logged your contact details and project details into our architecture review queue. Muzikayise Khuzwayo will review this and follow up directly. If you want an immediate priority review, you can book a free 30-minute session here: https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes`;
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('pilot') || lower.includes('fee')) {
        botText = "Our primary entry point is **The Pilot Sprint** at $850 (approx. R15,500). In 5 business days, we build and deploy a single production-grade automated workflow (e.g. Lead triage, PO invoice parsing, or CRM sync) with deterministic schema guarantees and a 14-day edge-case warranty. You can book a 30-minute architecture session with Muzi here: https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes";
      } else if (lower.includes('case') || lower.includes('henry') || lower.includes('levatus') || lower.includes('dap') || lower.includes('proof')) {
        botText = "We have engineered production pipelines for global partners including Henry Cumines / Ulysses Group (Vision OMS document parser), Digital Authority Partners (client intake & manager analytics), and Levatus i Norden AB (real-estate CRM sync). We focus on zero data loss and concrete ROI.";
      } else if (lower.includes('popia') || lower.includes('gdpr') || lower.includes('security') || lower.includes('privacy')) {
        botText = "We are strictly compliant with South Africa's POPIA and global GDPR standards. We never train AI models on client data, all credentials are stored in encrypted vaults (Supabase Vault / AWS Secrets), and we utilize ephemeral memory architectures for data ingestion.";
      } else if (lower.includes('contact') || lower.includes('book') || lower.includes('call') || lower.includes('meet') || lower.includes('session')) {
        botText = "You can schedule a free 30-minute Architecture Session directly with Muzikayise Khuzwayo on Calendly: https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes — we'll map out your operational bottleneck and provide a technical flowchart.";
      } else {
        botText = "Hello! I am the Techfusion Automata Assistant. We specialize in automated lead pipelines for Sales, self-optimizing Marketing flows, and outcome-driven Business Development systems. Share your company name and email along with your current bottleneck, and I'll draft an immediate technical blueprint for your team!";
      }
    }

    return NextResponse.json({ response: botText, leadCaptured: leadSaved });
  } catch (error) {
    console.error('Assistant API Error:', error);
    return NextResponse.json({
      response: "Techfusion Automata specializes in production AI pipelines, automated sales triage, and outcome-driven operations. Feel free to book a direct 30-minute architecture session with Muzikayise: https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes"
    });
  }
}
