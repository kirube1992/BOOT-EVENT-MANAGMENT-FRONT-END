import { PublicPageLayout } from "@/components/ui/PublicPageLayout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import { PastEventsSection } from "@/components/ui/PastEventsSection";
import { CTASection } from "@/components/ui/CTASection";

export default function Home() {
  return (
    <PublicPageLayout>
      <HeroSection />
      <FeaturesSection />
      <PastEventsSection />
      <CTASection />
    </PublicPageLayout>
  );
}
