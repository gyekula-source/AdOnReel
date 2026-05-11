import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export default function DataDeletionPage() {
  return (
    <LegalLayout
      title="Data Deletion Instructions"
      subtitle="How to securely delete your AdOnReel data and revoke Instagram access"
      badge="Meta Requirement"
      lastUpdated="January 1, 2026"
    >
      <LegalSection number={1} title="How to Delete Your Data" delay={0.1}>
        <p>You have three options to request deletion of your data:</p>

        <h3>Option A — Delete via AdOnReel App (Recommended)</h3>
        <ul className="list-decimal pl-5 space-y-2 mt-4">
          <li>Log in to your AdOnReel account on the app or website</li>
          <li>Go to <strong>Settings</strong> (top-right menu icon)</li>
          <li>Tap <strong>Account</strong> → <strong>Delete My Account</strong></li>
          <li>Select <strong>Delete all my data including Instagram data</strong></li>
          <li>Confirm by entering your password and tapping <strong>Confirm Deletion</strong></li>
        </ul>

        <h3>Option B — Revoke Instagram Access via Facebook</h3>
        <ul className="list-decimal pl-5 space-y-2 mt-4">
          <li>Go to your Facebook account Settings</li>
          <li>Click <strong>Apps and Websites</strong></li>
          <li>Find <strong>AdOnReel</strong> and click <strong>Remove</strong></li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
