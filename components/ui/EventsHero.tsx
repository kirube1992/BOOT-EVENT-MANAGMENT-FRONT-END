import Link from "next/link";
import { gradients } from "@/lib/theme";

interface EventHeroProps {
  upcomingCount: number;
}

export function EventsHero({ upcomingCount }: EventHeroProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-accent uppercase text-sm tracking-widest mb-4">
          Join Our Mission
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Upcoming Events
        </h1>

        <p className="text-text-secondary text-lg mb-8">
          {upcomingCount > 0 ? `Join us for ${upcomingCount} upcoming events. Evangelism, training, and discipleship opportunities.` : "Check back soon for upcoming ministry events and activities."}
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/registration"
            className="px-8 py-3 rounded-xl text-white font-medium shadow-lg"
            style={{ background: gradients.eventCard }}
          >
            Get Involved
          </Link>

          {/* <Link
            href="#events"
            className="px-8 py-3 rounded-xl border border-border hover:bg-surface"
          >
            Browse Events
          </Link> */}
        </div>
      </div>
    </section>
  );
}
