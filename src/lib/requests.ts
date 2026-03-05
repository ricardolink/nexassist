export type RequestStatus = "pending" | "in-progress" | "completed";

export interface SavedRequest {
  id: string;
  serviceType: string;
  description: string;
  dateNeeded: string;
  city: string;
  budget: string;
  photoPreview: string | null;
  name: string;
  email: string;
  phone: string;
  countryDial: string;
  countryFlag: string;
  countryCode: string;
  status: RequestStatus;
  submittedAt: string;
}

const KEY = "nexassist_requests";

export function getRequests(): SavedRequest[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveRequest(req: Omit<SavedRequest, "id" | "status" | "submittedAt">): SavedRequest {
  const full: SavedRequest = {
    ...req,
    id: crypto.randomUUID(),
    status: "pending",
    submittedAt: new Date().toISOString(),
  };
  const existing = getRequests();
  localStorage.setItem(KEY, JSON.stringify([full, ...existing]));
  return full;
}

export function statusLabel(s: RequestStatus) {
  return { pending: "Pending", "in-progress": "In Progress", completed: "Completed" }[s];
}

export function statusColor(s: RequestStatus) {
  return {
    pending: "text-[#C9A962] border-[#C9A962]/40 bg-[#C9A962]/8",
    "in-progress": "text-sky-400 border-sky-400/40 bg-sky-400/8",
    completed: "text-emerald-400 border-emerald-400/40 bg-emerald-400/8",
  }[s];
}

export function formatDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}
