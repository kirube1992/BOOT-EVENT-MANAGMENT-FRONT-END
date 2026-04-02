import Link from "next/link";
import { gradients } from "@/lib/theme";

export function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/">
          <img
            src="/images/gcm_logo.png"
            alt="GCM Ethiopia"
            className="h-8 w-auto brightness-0 invert hover:opacity-80 transition-opacity"
          />
        </Link>

        <div className="space-x-4">
          <Link href="/login" className="text-text-secondary hover:text-white">
            Sign In
          </Link>

          <Link
            href="/registration"
            className="px-4 py-2 rounded-lg text-white shadow-lg hover:opacity-90"
            style={{ background: gradients.eventCard }}
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
