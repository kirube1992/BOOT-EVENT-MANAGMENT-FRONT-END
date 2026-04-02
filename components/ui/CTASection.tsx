import Link from "next/link";
import { gradients } from "@/lib/theme";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
}

export function CTASection({
  title = "Ready to get involved?",
  subtitle = "Join our ministry and help fulfill the Great Commission in Ethiopia.",
  buttonText = "Join the Movement",
  href = "/registration",
}: CTASectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div
        className="rounded-2xl p-10 text-center"
        style={{ background: gradients.eventCard }}
      >
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-6 text-white/80 max-w-xl mx-auto">{subtitle}</p>

          <Link
            href={href}
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
