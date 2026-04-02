import { prisma } from "@/lib/prisma";

interface EventItem {
  title: string;
  date: string;
  description: string;
  image: string;
  attendees: number;
}

interface PastEventsSectionProps {
  events?: EventItem[];
}

const defaultEvents: EventItem[] = [
  {
    title: "Christmas Fellowship Dinner",
    date: "December 2025",
    description: "Celebrating the birth of Christ together with food, fellowship, and the Gospel message.",
    image: "/images/christmass-dinner.avif",
    attendees: 280,
  },
  {
    title: "Youth Worship Night",
    date: "November 2025",
    description: "An evening of praise, worship, and spiritual renewal for young people.",
    image: "/images/worship-night.avif",
    attendees: 150,
  },
  {
    title: "Sunday Sermon Series",
    date: "October 2025",
    description: "Weekly gatherings for teaching, discipleship, and equipping believers for ministry.",
    image: "/images/sermon-session.avif",
    attendees: 320,
  },
  {
    title: "Kids Ministry Event",
    date: "September 2025",
    description: "Special program for children to learn about Jesus through fun activities and stories.",
    image: "/images/kids-event.avif",
    attendees: 85,
  },
];

export async function PastEventsSection({ events }: PastEventsSectionProps) {
  let displayEvents = events;

  if (!displayEvents) {
    // If no props passed, fetch from DB
    const now = new Date();
    const pastDbEvents = await prisma.event.findMany({
      where: {
        OR: [
          { endDate: { lt: now } },
          { AND: [{ endDate: null }, { startDate: { lt: now } }] },
        ],
      },
      include: {
        _count: {
          select: { registrations: true },
        },
      },
      orderBy: {
        startDate: "desc",
      },
      take: 4,
    });

    if (pastDbEvents.length > 0) {
      displayEvents = pastDbEvents.map((e: any) => {
        const d = new Date(e.startDate);
        return {
          title: e.title,
          date: d.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
          description: e.description || "",
          image: "/images/sermon-session.avif", // Since Event model does not have an image field, we use a placeholder or generic mechanism
          attendees: e._count.registrations,
        };
      });
    } else {
      displayEvents = defaultEvents;
    }
  }
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2">Recent Ministry Activities</h2>
        <p className="text-text-secondary">Moments of evangelism, training, and making disciples together.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {(displayEvents || []).map((event, i) => (
          <div
            key={i}
            className="relative bg-surface border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all"
          >
            {/* Image */}
            <div className="h-56 relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br from-primary to-secondary"></div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                  Completed
                </span>
                <span className="text-text-secondary text-sm">{event.date}</span>
              </div>

              <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>

              <p className="text-text-secondary mb-4">
                {event.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                {event.attendees} people reached
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
