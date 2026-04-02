import { FeatureCard } from "./FeatureCard";

const features = [
  {
    title: "Evangelism & Outreach",
    description: "Win people to faith in Jesus Christ through campus ministry and community outreach.",
  },
  {
    title: "Discipleship Training",
    description: "Build believers in their faith through training, mentoring, and spiritual growth.",
  },
  {
    title: "Leadership Development",
    description: "Send equipped leaders to reach and build others, multiplying the movement.",
  },
];

export function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}
