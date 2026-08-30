import Image from "next/image";
import Link from "next/link";
import siteContent from "@content/site.json";
import { MobileNav } from "./MobileNav";
import { A11yToolbar } from "@/components/a11y/A11yToolbar";

export function Header() {
  return (
    <header className="border-b border-black/10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-purple rounded">
          <Image
            src="/brand/logo-crie-original.jpg"
            alt={siteContent.org.name}
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
            priority
          />
          <span className="font-bold text-lg text-foreground hidden sm:inline">
            {siteContent.org.shortName}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <A11yToolbar />
          <MobileNav items={siteContent.nav} />
        </div>
      </div>
    </header>
  );
}
