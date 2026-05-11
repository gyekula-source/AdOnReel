import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="The rules governing your use of AdOnReel"
      badge="Legal Document"
      lastUpdated="January 1, 2026"
    >
      <LegalSection number={1} title="Acceptance of Terms" delay={0.1}>
        <p>By creating an account on AdOnReel or using any part of our Services, you agree to be bound by these Terms and Conditions ("Terms"), our Privacy Policy, and any additional guidelines or policies we post. If you are using AdOnReel on behalf of a business, you represent that you have authority to bind that business to these Terms.</p>
      </LegalSection>

      <LegalSection number={2} title="Instagram Integration" delay={0.2}>
        <p>AdOnReel allows you to connect your Instagram account to enable campaign features. By connecting your Instagram account:</p>
        <ul>
          <li>You authorize AdOnReel to access your Instagram data as described in our Privacy Policy.</li>
          <li>You confirm you are the authorized owner of the connected Instagram account.</li>
          <li>You agree that your use of Instagram features is also governed by Meta's Terms of Service.</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
