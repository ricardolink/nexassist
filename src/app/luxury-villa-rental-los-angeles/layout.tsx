import type { Metadata } from "next";
import { metadata as m } from "./meta";
export const metadata: Metadata = m;
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
