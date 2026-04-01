import Link from "next/link";
import { gradients } from "@/lib/theme";

export function EventsCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div
        className="rounded-2xl p-10 text-center relative overflow-hidden"
        style={{ background: gradients.eventCard }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to get involved?</h2>
          <p className="mb-6 text-white/80 max-w-xl mx-auto">
            Join our ministry to win, build, and send disciples of Jesus Christ.
          </p>

          <Link
            href="/registration"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
