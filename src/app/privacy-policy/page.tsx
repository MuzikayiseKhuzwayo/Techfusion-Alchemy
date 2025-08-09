// app/privacy-policy/page.tsx
import { LegalPageLayout, LegalSection, PlainEnglishSummary } from "@/components/magic/legal-page";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="August 1, 2024">

      <LegalSection title="1. Introduction">
        <p>TechFusion Alchemy ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (techfusionalchemy.com) and use our Services. By using our site and services, you consent to the data practices described in this policy.</p>
        <PlainEnglishSummary>
          This document explains what information we collect and how we use it to provide our services and run our website. Your privacy is important to us.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We may collect information about you in a variety of ways:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, phone number, and business details, that you voluntarily give to us when you fill out a contact form or otherwise communicate with us.</li>
            <li><strong>Client Project Data:</strong> Information and data you provide us for the purpose of executing a project, which may include your customer data, business metrics, and access to third-party platforms. This data is treated with the highest level of confidentiality as per our Terms of Service.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, and the pages you have viewed.</li>
        </ul>
        <PlainEnglishSummary>
          We collect info you give us directly (like when you fill out our contact form), data needed to build your automation systems, and basic technical data about how you use our website.
        </PlainEnglishSummary>
      </LegalSection>
      
      <LegalSection title="3. How We Use Your Information">
        <p>Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
         <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Create and manage your account and projects.</li>
            <li>Deliver the Services you have requested.</li>
            <li>Email you regarding your account or order.</li>
            <li>Monitor and analyze usage and trends to improve our website and Services.</li>
            <li>Comply with legal and regulatory requirements.</li>
        </ul>
        <PlainEnglishSummary>
          We use your data to do the work you hired us for, communicate with you, make our own services better, and handle legal necessities. We do not sell your data.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="4. Data Sharing and Disclosure">
        <p>We do not sell, trade, or rent your Personal Data to others. We may share information with trusted third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processors, cloud hosting providers, and analytics services.</p>
        <PlainEnglishSummary>
          We don't sell your data. We only share it with trusted partners who help us run our business (like our web host or payment processor). We make sure they are contractually obligated to keep it safe.
        </PlainEnglishSummary>
      </LegalSection>
      
      <LegalSection title="5. Data Security">
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
        <PlainEnglishSummary>
          We take security very seriously and use industry-standard practices to protect your information. However, no system is 100% hack-proof.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="6. Your Data Rights">
        <p>Depending on your location, you may have the right to: access, correct, or delete your personal information; object to or restrict our processing of your data; and receive your data in a portable format. To exercise these rights, please contact us using the contact information below.</p>
        <PlainEnglishSummary>
          You have rights over your data, including the right to see it, fix it, or have it deleted. Just contact us to make a request.
        </PlainEnglishSummary>
      </LegalSection>

      <LegalSection title="7. Contact Us">
        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <p className="mt-4">
            TechFusion Alchemy<br />
            Email: <a href="mailto:privacy@techfusionalchemy.com">privacy@techfusionalchemy.com</a>
        </p>
      </LegalSection>

    </LegalPageLayout>
  );
}