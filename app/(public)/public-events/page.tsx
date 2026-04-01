"use client";

import { useEffect, useState } from "react";
import { PublicPageLayout } from "@/components/ui/PublicPageLayout";
import { EventsHero } from "@/components/ui/EventsHero";
import { EventsList } from "@/components/ui/EventsList";
import { EventsCTA } from "@/components/ui/EventsCTA";

interface Event {
    id: string;
    title: string;
    description: string | null;
    startDate: string;
    endDate: string | null;
    location: string | null;
    registrationsCount: number;
}

export default function PublicEventsPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/public/events")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data.events || []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <PublicPageLayout>
            <EventsHero upcomingCount={events.length} />

            <section id="events" className="max-w-7xl mx-auto px-6 pb-20">
                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-surface border border-border rounded-2xl h-80 animate-pulse"
                            ></div>
                        ))}
                    </div>
                ) : (
                    <EventsList events={events} />
                )}
            </section>

            <EventsCTA />
        </PublicPageLayout>
    );
}
