// app/terms-of-service/page.tsx
import { LegalPageLayout, LegalSection, PlainEnglishSummary } from "@/components/magic/legal-page";

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service & Master Services Agreement" lastUpdated="October 2026">

      <div className="mb-8 p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-between text-xs font-mono">
        <span className="text-zinc-300">
          This document is part of the <strong className="text-white">Techfusion Automata Legal Hub</strong>.
        </span>
        <a href="/legal#terms" className="text-white underline font-medium hover:text-zinc-300">
          Open Interactive Subtabs Hub →
        </a>
      </div>

      <LegalSection title="1. Agreement to Terms">
        <p>
          These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client") and <strong>Techfusion Automata (Pty) Ltd</strong> (Registration Number: 2026/399837/07), operating through its specialized artificial intelligence and workflow engineering division <strong>TechFusion Alchemy</strong>, and a subsidiary of Techfusion Ventures (https://techfusion-ventures.xyz) ("we", "us", "our"). By engaging our services, executing a Statement of Work (SOW), or submitting project specifications, you agree to be bound by these Terms.
        </p>
        <PlainEnglishSummary>
          When you engage Techfusion Automata (operating through its Alchemy division), these terms govern our engineering engagement. Clear rules, zero ambiguity.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="2. Scope of Services & Statements of Work">
        <p>
          We provide custom artificial intelligence, machine learning, and workflow automation pipeline engineering. Specific technical deliverables, milestone dates, acceptance criteria, and project fees are defined in an atomic <strong>Statement of Work (SOW)</strong> or Pilot Sprint agreement signed by both parties.
        </p>
        <PlainEnglishSummary>
          Every project has a clear 1-page SOW specifying exactly what we build, the architecture diagram, the timeline, and the price.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="3. Intellectual Property Rights">
        <p>
          Upon receipt of full and final payment for the deliverables specified in an executed SOW, Techfusion Automata grants the Client a perpetual, worldwide, irrevocable, royalty-free license to use, execute, modify, and host the custom workflow logic, script schemas, and integration code built specifically for the Client’s internal business operations. Pre-existing proprietary libraries, helper modules, and architectural templates remain the property of Techfusion Automata.
        </p>
        <PlainEnglishSummary>
          Once you pay for your custom automation workflows, they are yours to run and build upon forever.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="4. 14-Day Delivery Warranty">
        <p>
          Techfusion Automata warrants that all production workflows deployed under an SOW or Pilot Sprint will perform in substantial conformance with agreed technical specifications for a period of fourteen (14) calendar days following production cutover. Any bugs, unhandled exceptions, or schema deviations reported during this warranty period will be remediated at no additional charge.
        </p>
        <PlainEnglishSummary>
          We stand by our code. If an unexpected bug arises within 14 days after launch, we fix it for free.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="5. Client Responsibilities & Vault Security">
        <p>
          The Client agrees to provide timely access to necessary API endpoints, staging environments, and integration keys. The Client warrants that all provided credentials are provisioned via secure secret vaults and comply with least-privilege principles. Delays resulting from missing third-party access will proportionally extend project timelines.
        </p>
        <PlainEnglishSummary>
          To deploy fast, we need the right API keys and access on time, shared securely via digital vaults.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="6. Confidentiality & Mutual Protection">
        <p>
          Both parties agree that any proprietary business data, customer lists, financial metrics, and architectural designs shared during the engagement shall remain strictly confidential. Techfusion Automata warrants that it will never train public AI models using Client proprietary data.
        </p>
        <PlainEnglishSummary>
          Your secrets stay secret. We will never share your business data or train public AI models with it.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        <p>
          IN NO EVENT SHALL TECHFUSION AUTOMATA (PTY) LTD, ITS DIRECTORS, OR TECHFUSION VENTURES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR SPECIAL DAMAGES, OR FOR LOSS OF PROFITS OR DATA ARISING OUT OF THIRD-PARTY API OUTAGES (E.G., OPENAI, HUBSPOT, MAKE, N8N HOSTING). OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE TOTAL FEES PAID BY THE CLIENT UNDER THE APPLICABLE SOW.
        </p>
        <PlainEnglishSummary>
          We build with dead-letter queues and failovers, but we cannot be held liable if a global provider like OpenAI or HubSpot experiences a worldwide cloud outage. Our financial liability is capped at the fees paid for that project.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="8. Governing Law & Dispute Resolution">
        <p>
          These Terms and any dispute arising out of or related to our services shall be governed by and construed in accordance with the laws of the <strong>Republic of South Africa</strong>. The parties submit to the jurisdiction of the High Court of South Africa (Western Cape or Gauteng Division).
        </p>
        <PlainEnglishSummary>
          Any formal legal disputes are handled under the laws of South Africa.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="9. Contact Details">
        <p>Techfusion Automata (Pty) Ltd</p>
        <p className="mt-2 text-sm text-gray-300">
          Registration: 2026/399837/07<br />
          Parent: Techfusion Ventures (https://techfusion-ventures.xyz)<br />
          Director: Muzikayise Khuzwayo<br />
          Email: <a href="mailto:muzi@techfusion-alchemy.xyz" className="text-white underline hover:text-zinc-300">muzi@techfusion-alchemy.xyz</a>
        </p>
      </LegalSection>

    </LegalPageLayout>
  );
}