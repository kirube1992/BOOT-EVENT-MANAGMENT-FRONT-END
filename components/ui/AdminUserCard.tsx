interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: "ADMIN" | "MEMBER" | "VOLUNTEER";
  registrationsCount: number;
  tasksCount: number;
  createdAt: string;
}

interface AdminUserCardProps {
  user: User;
}

import { colors } from "@/lib/theme";

export function AdminUserCard({ user }: AdminUserCardProps) {
  const roleColors = {
    ADMIN: { bg: `${colors.role.ADMIN}20`, text: colors.role.ADMIN },
    MEMBER: { bg: `${colors.role.MEMBER}20`, text: colors.role.MEMBER },
    VOLUNTEER: { bg: `${colors.role.VOLUNTEER}20`, text: colors.role.VOLUNTEER },
  };

  const joinedDate = new Date(user.createdAt).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        {/* Avatar */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
            style={{
              background: roleColors[user.role].bg,
              color: roleColors[user.role].text,
            }}
          >
            {user.fullName.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold">{user.fullName}</h3>
            <p className="text-text-secondary text-sm">{user.email}</p>
          </div>
        </div>

        {/* Role Badge */}
        <span
          className="px-2 py-1 rounded text-xs font-medium"
          style={{
            background: roleColors[user.role].bg,
            color: roleColors[user.role].text,
          }}
        >
          {user.role}
        </span>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        {user.phone}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 pt-4 border-t border-border">
        <div className="flex items-center gap-1 text-sm text-text-secondary">
          <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {user.registrationsCount} events
        </div>
        <div className="flex items-center gap-1 text-sm text-text-secondary">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          {user.tasksCount} tasks
        </div>
        <div className="ml-auto text-xs text-text-secondary">
          Joined {joinedDate}
        </div>
      </div>
    </div>
  );
}
