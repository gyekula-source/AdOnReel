import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How AdOnReel collects, uses, and protects your data"
      badge="Legal Document"
      lastUpdated="January 1, 2026"
    >
      <div className="bg-gradient-to-r from-blue/10 to-blue/5 border border-blue/20 border-l-4 border-l-blue p-6 rounded-xl text-sm text-blue-400 mb-8 backdrop-blur-md">
        This Privacy Policy is designed to meet Meta's app review requirements for apps using Instagram Login and accessing Instagram Graph API permissions including <strong>instagram_business_basic</strong>, <strong>instagram_business_content_publish</strong>, and <strong>instagram_manage_insights</strong>.
      </div>

      <LegalSection number={1} title="Introduction & Who We Are" delay={0.1}>
        <p>AdOnReel ("we," "our," or "us") is an AI-powered influencer advertising marketplace that connects local businesses with content creators. We are operated by <strong>Infludot Technologies</strong>.</p>
        <p>This Privacy Policy explains how we collect, use, share, and protect information when you use our platform, mobile application, and website ("Services").</p>
        <p>By using AdOnReel, you agree to the practices described in this policy. If you do not agree, please do not use our Services.</p>
      </LegalSection>

      <LegalSection number={2} title="Information We Collect" delay={0.2}>
        <h3>2.1 Information You Provide Directly</h3>
        <ul>
          <li>Full name, email address, and phone number when you register</li>
          <li>Business name, address, category, and contact information (for brands)</li>
          <li>Creator profile information including niche, city, and bio</li>
          <li>Campaign briefs, creative assets, and ad content uploaded to the platform</li>
          <li>Payment and billing information (processed securely via third-party providers)</li>
        </ul>
        
        <h3>2.2 Information Collected via Instagram Login</h3>
        <p>When you connect your Instagram account to AdOnReel using Facebook/Instagram Login, we access only the permissions you explicitly authorize. These may include:</p>
        <ul>
          <li><strong>Basic Profile:</strong> Instagram user ID, username, profile picture, account type (business/creator/personal), and follower count</li>
          <li><strong>Business Insights:</strong> Post reach, impressions, engagement metrics (likes, comments, shares, saves), and audience demographic data</li>
          <li><strong>Content Metrics:</strong> Performance data for Reels and posts published as part of AdOnReel campaigns</li>
        </ul>
        
        <div className="mt-6 p-4 bg-gradient-to-br from-purple/10 to-blue/5 border border-purple/20 rounded-xl text-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple to-blue" />
          <strong>Important:</strong> AdOnReel does NOT access your personal Instagram messages, your friends list, your personal photos unrelated to campaigns, or any data from your personal followers. We only access business and performance data necessary to operate our influencer marketing platform.
        </div>
      </LegalSection>

      <LegalSection number={3} title="How We Use Your Information" delay={0.3}>
        <h3>Platform Operations</h3>
        <ul>
          <li>To create and manage your AdOnReel account</li>
          <li>To match brands with suitable influencers based on niche, location, and audience</li>
          <li>To process payments and manage creator earnings wallets</li>
        </ul>
        <h3>Performance Tracking & Analytics</h3>
        <ul>
          <li>To track campaign performance metrics (views, reach, engagement, CTR)</li>
          <li>To generate brand dashboards and creator performance reports</li>
          <li>To calculate performance-based creator payouts</li>
        </ul>
      </LegalSection>

      <LegalSection number={4} title="Contact Us" delay={0.4}>
        <div className="bg-black/20 border border-white/10 rounded-xl p-6 mt-4 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple/15 rounded-full blur-2xl" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="text-muted text-sm uppercase tracking-widest w-24">Company</span>
              <strong className="text-primary">Infludot Technologies — AdOnReel</strong>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="text-muted text-sm uppercase tracking-widest w-24">Privacy</span>
              <a href="mailto:privacy@adonreel.in" className="text-blue-400 hover:text-primary transition-colors">privacy@adonreel.in</a>
            </div>
          </div>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
