import type { Role, TaskStatus, AttendanceStatus } from "@prisma/client";

export const colors = {
  // Core Theme
  primary: "#736c97ff",
  secondary: "#FF5E7E",
  accent: "#2EE6A6",
  background: "#0F1226",
  surface: "#1A1F3A",
  textPrimary: "#E6E9FF",
  textSecondary: "#9AA3C7",
  border: "#2A2F55",

  // Roles
  role: {
    ADMIN: "#FF5E7E",
    MEMBER: "#6f6895ff",
    VOLUNTEER: "#2EE6A6",
  },

  // Task Status
  taskStatus: {
    PENDING: "#FFA726",
    DONE: "#2EE6A6",
    CLOSED: "#9AA3C7",
  },

  // Attendance
  attendance: {
    NOT_MARKED: "#9AA3C7",
    PRESENT: "#2EE6A6",
  },
} as const;

export function getRoleColor(role: Role): string {
  return colors.role[role];
}

export function getTaskStatusColor(status: TaskStatus): string {
  return colors.taskStatus[status];
}

export function getAttendanceColor(status: AttendanceStatus): string {
  return colors.attendance[status];
}

export const gradients = {
  eventCard: "linear-gradient(135deg, #736e8fff, #ba6b7bff)",
} as const;
