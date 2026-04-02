import Link from "next/link";
import { gradients } from "@/lib/theme";

interface Event {
  id: string;
  title: string;
  description: string | null;
  startDate: string;
  endDate: string | null;
  location: string | null;
  registrationsCount: number;
}

interface EventCardProps {
  event: Event;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const date = new Date(event.startDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const cardGradients = [
    "from-primary to-secondary",
    "from-accent to-primary",
    "from-secondary to-accent",
  ];
  const gradient = cardGradients[index % cardGradients.length];

  return (
    <div className="relative bg-surface border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all">
      {/* Top Gradient Bar */}
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>

      <div className="p-6">
        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-1.5 mb-4">
          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-text-primary">{formattedDate}</span>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {event.description || "Join us for an amazing experience."}
        </p>

        {/* Location */}
        {event.location && (
          <div className="flex items-center gap-2 text-text-secondary text-sm mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
        )}

        {/* Stats & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span className="text-text-secondary">{event.registrationsCount} registered</span>
          </div>

          <Link
            href={`/registration?event=${event.id}`}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white"
            style={{ background: gradients.eventCard }}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
