import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — LIBRATRACK",
  description: "Overview of the book inventory for the Basic Education Department.",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to LIBRATRACK — your book inventory overview.
        </p>
      </div>
      {/* Dashboard widgets and stats will be added here */}
    </div>
  );
}
