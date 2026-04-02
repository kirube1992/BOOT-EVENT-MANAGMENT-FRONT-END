import Link from "next/link";

interface Event {
  id: string;
  title: string;
  description: string | null;
  startDate: string;
  endDate: string | null;
  location: string | null;
  registrationsCount: number;
  tasksCount: number;
}

interface AdminEventCardProps {
  event: Event;
}

export function AdminEventCard({ event }: AdminEventCardProps) {
  const date = new Date(event.startDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const isUpcoming = new Date(event.startDate) > new Date();
  const status = isUpcoming ? "upcoming" : "past";

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
      <div className="p-6">
        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              status === "upcoming"
                ? "bg-accent/20 text-accent"
                : "bg-text-secondary/20 text-text-secondary"
            }`}
          >
            {status === "upcoming" ? "Upcoming" : "Past"}
          </span>
          <span className="text-text-secondary text-sm">{formattedDate}</span>
        </div>

        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {event.description || "No description provided."}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            {event.registrationsCount}
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            {event.tasksCount}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 py-4 border-t border-border flex gap-2">
        <Link
          href={`/admin/events/${event.id}`}
          className="flex-1 px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium text-center hover:bg-primary/30 transition-colors"
        >
          Manage
        </Link>
        <Link
          href={`/admin/events/${event.id}/edit`}
          className="px-4 py-2 bg-border text-text-primary rounded-lg text-sm font-medium hover:bg-border/80 transition-colors"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
