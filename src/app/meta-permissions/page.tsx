import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export default function MetaPermissionsPage() {
  return (
    <LegalLayout
      title="Instagram Permissions"
      subtitle="Exactly what AdOnReel accesses from your Instagram account"
      badge="Meta App Review"
      lastUpdated="January 1, 2026"
    >
      <LegalSection number={1} title="Permissions We Request" delay={0.1}>
        <div className="overflow-x-auto mt-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-4 text-sm font-semibold text-white/80">Permission</th>
                <th className="p-4 text-sm font-semibold text-white/80">Access Type</th>
                <th className="p-4 text-sm font-semibold text-white/80">Why We Need It</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4"><code>instagram_business_basic</code></td>
                <td className="p-4"><span className="text-xs bg-blue/20 text-blue-400 border border-blue/30 px-2 py-1 rounded">READ</span></td>
                <td className="p-4 text-sm text-muted">To read your profile info (name, handle, follower count) to verify your identity and match you with brands.</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4"><code>instagram_manage_insights</code></td>
                <td className="p-4"><span className="text-xs bg-blue/20 text-blue-400 border border-blue/30 px-2 py-1 rounded">READ</span></td>
                <td className="p-4 text-sm text-muted">To track reach, views, and engagement on the specific Reels containing AdOnReel campaign overlays so we can calculate your payouts.</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4"><code>pages_show_list</code></td>
                <td className="p-4"><span className="text-xs bg-blue/20 text-blue-400 border border-blue/30 px-2 py-1 rounded">READ</span></td>
                <td className="p-4 text-sm text-muted">To verify the connection between your Facebook Page and Instagram Professional Account during the onboarding process.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
