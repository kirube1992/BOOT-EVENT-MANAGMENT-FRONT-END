interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-surface p-6 rounded-xl border border-border">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  );
}
