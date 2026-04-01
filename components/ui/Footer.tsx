import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  columns?: FooterColumn[];
  brandName?: string;
  tagline?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Ministries",
    links: [
      { label: "Student Led Movement", href: "#" },
      { label: "Jesus Film", href: "#" },
      { label: "Digital Strategy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How to Know God", href: "#" },
      { label: "Train & Grow", href: "#" },
      { label: "Leadership Development", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Prayer Requests", href: "#" },
    ],
  },
];

export function Footer({
  columns = defaultColumns,
  brandName = "Great Commission Ministry Ethiopia",
  tagline = "Winning people to faith, building them in their faith, and sending them to win and build others.",
}: FooterProps) {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold text-primary mb-3">{brandName}</h3>
          <p className="text-text-secondary text-sm">{tagline}</p>
        </div>

        {columns.map((column, i) => (
          <div key={i}>
            <h4 className="font-semibold mb-2">{column.title}</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              {column.links.map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="hover:text-text-primary transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center text-text-secondary text-sm mt-10">
        © {new Date().getFullYear()} {brandName}. All rights reserved.
      </div>
    </footer>
  );
}
