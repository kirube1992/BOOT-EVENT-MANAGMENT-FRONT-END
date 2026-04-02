import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PublicPageLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function PublicPageLayout({ children, showFooter = true }: PublicPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      {children}
      {showFooter && <Footer />}
    </div>
  );
}
