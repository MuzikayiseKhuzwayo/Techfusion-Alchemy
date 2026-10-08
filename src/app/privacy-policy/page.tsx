// app/privacy-policy/page.tsx
import { LegalPageLayout, LegalSection, PlainEnglishSummary } from "@/components/magic/legal-page";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy & POPIA Compliance" lastUpdated="October 2026">

      <div className="mb-8 p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-between text-xs font-mono">
        <span className="text-zinc-300">
          This document is part of the <strong className="text-white">Techfusion Automata Legal Hub</strong>.
        </span>
        <a href="/legal#popia" className="text-white underline font-medium hover:text-zinc-300">
          Open Interactive Subtabs Hub →
        </a>
      </div>

      <LegalSection title="1. Introduction & Corporate Identity">
        <p>
          Techfusion Automata (Pty) Ltd (Registration No: 2026/399837/07), operating its specialized artificial intelligence and workflow engineering division <strong>TechFusion Alchemy</strong>, and a subsidiary of Techfusion Ventures (https://techfusion-ventures.xyz) ("we", "us", "our"), is committed to safeguarding the privacy and security of your personal and business data. This policy outlines our standards under the <strong>Protection of Personal Information Act (POPIA, Act 4 of 2013 of South Africa)</strong> and international data privacy regulations including the General Data Protection Regulation (GDPR).
        </p>
        <PlainEnglishSummary>
          We are Techfusion Automata (Pty) Ltd, trading through our Alchemy division. We treat your personal and company information with the highest degree of confidentiality and strictly comply with South African POPIA and international data protection laws.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="2. Zero AI Model Training Guarantee">
        <p>
          <strong>Strict Prohibition on Model Training:</strong> Under no circumstances do we utilize, disclose, or permit third-party LLM providers to use your proprietary business workflows, client lists, communications, or personal records to train, retrain, fine-tune, or improve public machine learning models. All data transfers across integrated APIs are strictly ephemeral, non-persistent, and zero-data-retention where supported.
        </p>
        <PlainEnglishSummary>
          We will NEVER train AI models on your company data or customer records. Data sent to models is processed in memory and never used for public learning.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="3. Information We Collect and Process">
        <p>We process the following categories of data strictly for the performance of our engineering services:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-sm text-gray-300">
          <li><strong>Contact & Consultation Data:</strong> Name, work email address, company name, and technical project specifications submitted via our booking and inquiry forms.</li>
          <li><strong>Client Infrastructure & API Credentials:</strong> Webhook URLs, database connection strings, and API keys provided under a signed Mutual Non-Disclosure Agreement (NDA). All credentials are required to be housed in encrypted secret vaults (e.g. Supabase Vault / AWS Secrets Manager) using least-privilege scoping.</li>
          <li><strong>Pipeline Telemetry:</strong> Anonymized execution timestamps, status codes, and error traces necessary for dead-letter queue resolution and automated incident alerting.</li>
        </ul>
        <PlainEnglishSummary>
          We only collect what we need to build and maintain your automations: your contact details, the API credentials you share under NDA, and technical error logs to fix issues quickly.
        </PlainEnglishSummary>
      </LegalSection>
      
      <LegalSection title="4. Data Security and Vault Storage">
        <p>
          We employ enterprise-grade cryptographic controls. Client tokens and environment variables are never stored in unencrypted text files or public repositories. All data in transit is encrypted using TLS 1.3, and database records are safeguarded by Row-Level Security (RLS) and Key Management Service (KMS) encryption.
        </p>
        <PlainEnglishSummary>
          Your passwords and API keys are stored in secure digital vaults with bank-grade encryption. Nothing is left lying around in plain text.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="5. POPIA Rights of Data Subjects">
        <p>
          In accordance with POPIA, you have the right to request access to any personal information we hold, request corrections or updates, or demand the permanent deletion and certification of destruction of all data upon project conclusion.
        </p>
        <PlainEnglishSummary>
          You have full control over your data. You can ask us to show it to you, fix it, or wipe it completely at any time.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="6. Information Officer Contact">
        <p>For any queries or formal requests regarding this Privacy Policy or POPIA compliance, contact our Information Officer:</p>
        <p className="mt-4 text-sm text-gray-300">
          <strong>Techfusion Automata (Pty) Ltd</strong><br />
          Attention: Muzikayise Khuzwayo (Information Officer)<br />
          Email: <a href="mailto:muzi@techfusion-alchemy.xyz" className="text-white underline hover:text-zinc-300">muzi@techfusion-alchemy.xyz</a><br />
          Parent Entity: <a href="https://techfusion-ventures.xyz" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-zinc-300">Techfusion Ventures</a><br />
          Jurisdiction: Cape Town & Johannesburg, Republic of South Africa
        </p>
      </LegalSection>

    </LegalPageLayout>
  );
}