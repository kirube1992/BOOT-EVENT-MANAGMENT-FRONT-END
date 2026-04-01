export function HeroVisual() {
  return (
    <div className="relative flex justify-center items-center overflow-hidden">
      {/* Main Circle */}
      <div className="w-[350px] h-[350px] rounded-full bg-surface flex items-center justify-center relative shadow-2xl">
        {/* Inner Glow */}
        <div className="absolute w-[280px] h-[280px] rounded-full bg-primary/20 blur-2xl"></div>

        {/* Fake Dashboard Card */}
        <div className="relative z-10 bg-background border border-border rounded-2xl p-6 w-[260px] shadow-xl">
          <h3 className="text-sm mb-2 text-text-secondary">Upcoming Event</h3>
          <p className="font-semibold mb-4">Tech Meetup 2026</p>

          <div className="space-y-2">
            <div className="h-2 bg-accent rounded w-3/4"></div>
            <div className="h-2 bg-[#FFA726] rounded w-1/2"></div>
            <div className="h-2 bg-secondary rounded w-2/3"></div>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-0 right-10 w-20 h-20 bg-secondary rounded-full opacity-80 blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-accent rounded-full opacity-80 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-[#FFA726] rounded-full opacity-40 blur-xl"></div>
      <div className="absolute top-20 left-0 w-12 h-12 bg-primary rounded-lg rotate-12"></div>
      <div className="absolute top-40 right-5 w-8 h-8 bg-primary rounded-sm rotate-12"></div>

      {/* ✨ Dust Particles */}
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute w-[4px] h-[4px] bg-white rounded-full opacity-20 blur-[1px] animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}