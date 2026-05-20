import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — LIBRATRACK",
  description: "Main dashboard for the LIBRATRACK Book Inventory System.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar will be rendered here */}
      <aside className="w-64 border-r bg-card" aria-label="Sidebar navigation">
        {/* <AppSidebar /> */}
      </aside>

      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        <header className="h-16 border-b flex items-center px-6 bg-card">
          {/* <DashboardHeader /> */}
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
