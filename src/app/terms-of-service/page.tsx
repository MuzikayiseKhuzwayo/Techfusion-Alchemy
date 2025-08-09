// app/terms-of-service/page.tsx
import { LegalPageLayout, LegalSection, PlainEnglishSummary } from "@/components/magic/legal-page";

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="August 1, 2024">

      <LegalSection title="1. Agreement to Terms">
        <p>By accessing our website, engaging our services, or signing a Statement of Work ("SOW"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access our services.</p>
        <PlainEnglishSummary>
          If you use our services, you're agreeing to these rules. Simple as that.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="2. Scope of Services">
        <p>TechFusion Alchemy ("we", "us") provides AI-powered business automation services, including but not limited to lead generation, sales automation, system integration, and consulting ("Services"). The specific details, deliverables, timelines, and fees for your project will be outlined in a separate Statement of Work (SOW) which, upon execution, becomes part of this agreement.</p>
        <PlainEnglishSummary>
          We build custom AI automation systems. The exact work we'll do for you, and what it costs, will be detailed in a project-specific document called a Statement of Work.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="3. Intellectual Property">
        <p>We retain ownership of all our pre-existing intellectual property, including our proprietary tools, software, methodologies, and codebase. Upon full and final payment for the Services outlined in an SOW, we grant you, the Client, a perpetual, worldwide, non-exclusive license to use the final, delivered system ("Deliverable") for your internal business operations. You may not resell, re-license, or redistribute the Deliverable without our express written permission.</p>
        <PlainEnglishSummary>
          We own our tools and secret sauce. Once you've paid in full for the system we build, you get to use it for your business forever. You just can't sell the system itself to someone else.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="4. Client Responsibilities">
        <p>To ensure project success, you agree to provide timely access to necessary personnel, business data, and third-party system credentials (e.g., CRM, API keys). You are responsible for the accuracy and legality of all data you provide. Delays caused by your failure to meet these responsibilities may result in adjustments to project timelines and costs.</p>
        <PlainEnglishSummary>
          We need your cooperation to get the job done. This means providing us with the access and information we need on time. If there are delays on your end, it might affect the project schedule and budget.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="5. Fees and Payment">
        <p>Payment terms will be specified in the SOW. Typically, this involves an upfront deposit and milestone-based payments. Invoices are due upon receipt. Late payments may incur interest charges and a suspension of work until the account is settled.</p>
        <PlainEnglishSummary>
          Pay your bills on time as agreed in the SOW. If you don't, we might have to pause work and charge a late fee.
        </PlainEnglishSummary>
      </LegalSection>
      
      <LegalSection title="6. Confidentiality">
        <p>Both parties agree to treat all non-public information received from the other party as confidential. This includes business strategies, client data, and proprietary technical information. This obligation of confidentiality extends beyond the term of our engagement.</p>
        <PlainEnglishSummary>
          We'll keep your business secrets safe, and you'll keep ours safe. This agreement lasts even after our project is finished.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        <p>IN NO EVENT SHALL TECHFUSION ALCHEMY BE LIABLE FOR ANY LOST PROFITS, LOST DATA, OR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE SERVICES. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM ARISING FROM THIS AGREEMENT SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO US IN THE SIX (6) MONTHS PRECEDING THE CLAIM.</p>
        <PlainEnglishSummary>
          While we build powerful systems, we can't be held responsible for indirect consequences to your business. Our financial liability is limited to the amount you've paid us in the last six months.
        </PlainEnglishSummary>
      </LegalSection>
      
      <LegalSection title="8. Governing Law">
        <p>These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.</p>
        <PlainEnglishSummary>
          Any legal disputes will be handled under the laws of England and Wales.
        </PlainEnglishSummary>
      </LegalSection>

    </LegalPageLayout>
  );
}