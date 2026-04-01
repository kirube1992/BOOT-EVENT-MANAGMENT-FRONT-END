interface Task {
  id: string;
  title: string;
  description: string | null;
  deadline: string | null;
  status: "PENDING" | "DONE" | "CLOSED";
  event: { id: string; title: string };
  createdBy: { id: string; fullName: string };
  assignments: { user: { id: string; fullName: string } }[];
  updatesCount: number;
}

interface AdminTaskCardProps {
  task: Task;
}

export function AdminTaskCard({ task }: AdminTaskCardProps) {
  const statusColors = {
    PENDING: { bg: "#FFA72620", text: "#FFA726" },
    DONE: { bg: "#2EE6A620", text: "#2EE6A6" },
    CLOSED: { bg: "#9AA3C720", text: "#9AA3C7" },
  };

  const deadline = task.deadline
    ? new Date(task.deadline).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <span
          className="px-2 py-1 rounded text-xs font-medium"
          style={{
            background: statusColors[task.status].bg,
            color: statusColors[task.status].text,
          }}
        >
          {task.status}
        </span>
        {deadline && (
          <span className="text-text-secondary text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {deadline}
          </span>
        )}
      </div>

      <h3 className="font-semibold mb-2">{task.title}</h3>
      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
        {task.description || "No description provided."}
      </p>

      {/* Event */}
      <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {task.event.title}
      </div>

      {/* Assignees */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex -space-x-2">
          {task.assignments.slice(0, 3).map((a, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-medium border-2 border-surface"
              title={a.user.fullName}
            >
              {a.user.fullName.charAt(0).toUpperCase()}
            </div>
          ))}
          {task.assignments.length > 3 && (
            <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-xs border-2 border-surface">
              +{task.assignments.length - 3}
            </div>
          )}
        </div>

        <span className="text-text-secondary text-sm">
          {task.updatesCount} updates
        </span>
      </div>
    </div>
  );
}
