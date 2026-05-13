import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/logo.jpg" 
                alt="AdOnReel Logo" 
                width={140} 
                height={50} 
                className="object-contain h-12 w-auto rounded-lg"
              />
            </Link>
            <p className="text-muted max-w-sm mb-6">
              The creator-first influencer advertising marketplace. Turn every reel into revenue with premium influencer campaigns.
            </p>
            <div className="text-sm text-muted space-y-2">
              <p className="font-semibold text-foreground">INFLUDOT TECHNOLOGIES PRIVATE LIMITED</p>
              <p>C/O Talapureddi Sunitha<br/>Panachdarala Dharapalem, Rambilli<br/>Anakapalle, Visakhapatnam<br/>Andhra Pradesh, India - 531061</p>
              <p><a href="tel:+919063810137" className="hover:text-primary transition-colors">+91 9063810137</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="/how-it-works" className="text-muted hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/features" className="text-muted hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/earnings" className="text-muted hover:text-white transition-colors">Earnings</Link></li>
              <li><Link href="/pricing" className="text-muted hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/terms" className="text-muted hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="text-muted hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/data-deletion" className="text-muted hover:text-white transition-colors">Data Deletion</Link></li>
              <li><Link href="/meta-permissions" className="text-muted hover:text-white transition-colors">Meta Permissions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted text-sm space-y-2">
            <p>&copy; {currentYear} AdOnReel Inc. All rights reserved.</p>
            <p className="text-xs">INFLUDOT TECHNOLOGIES PRIVATE LIMITED</p>
            <p className="text-xs">CIN: U74909AP2025PTC120808 | PAN: AAICI3762N | TAN: VPNI02010B</p>
            <p className="text-xs">Incorporated on Aug 21, 2025</p>
          </div>
          <div className="flex items-center gap-4 text-muted text-sm">
            <span>Built for Creators. Designed for Brands.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
