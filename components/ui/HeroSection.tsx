import Link from "next/link";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-accent uppercase text-sm tracking-widest mb-4">
          Great Commission Ministry Ethiopia
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Win. Build. Send. <br />
          Fulfill the Commission.
        </h1>

        <p className="text-text-secondary text-lg mb-8 max-w-lg">
          Join our ministry to reach people with the Gospel, build them in faith,
          and send them to reach others.
        </p>

        <div className="flex gap-4">
          <Link
            href="/registration"
            className="px-8 py-3 rounded-xl text-white font-medium shadow-lg"
            style={{
              background: "linear-gradient(135deg, #736e8fff, #ba6b7bff)",
            }}
          >
            Join the Movement
          </Link>

          <Link
            href="/public-events"
            className="px-8 py-3 rounded-xl border border-border text-text-primary hover:bg-surface"
          >
            View Events
          </Link>
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}
