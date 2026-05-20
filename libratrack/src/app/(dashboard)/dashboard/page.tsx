import type { Metadata } from "next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Dashboard Overview — LIBRATRACK",
};

const recentTransactions = [
  { id: "TX-1049", student: "Alice Dela Cruz", book: "The Great Gatsby", action: "Check-out", date: "2026-05-20", status: "Active" },
  { id: "TX-1048", student: "John Smith", book: "Calculus Early Transcendentals", action: "Return", date: "2026-05-20", status: "Completed" },
  { id: "TX-1047", student: "Maria Clara", book: "Noli Me Tangere", action: "Check-out", date: "2026-05-19", status: "Active" },
  { id: "TX-1046", student: "David Lee", book: "Physics for Scientists", action: "Check-out", date: "2026-05-19", status: "Overdue" },
  { id: "TX-1045", student: "Emma Watson", book: "Harry Potter and the Sorcerer's Stone", action: "Return", date: "2026-05-18", status: "Completed" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to the LIBRATRACK Admin Portal. Here is what is happening today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Metric Cards */}
        <div className="rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm p-6 flex flex-col justify-between h-[120px]">
          <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Total Books</h3>
          <div className="text-3xl font-bold text-primary">12,450</div>
        </div>
        <div className="rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm p-6 flex flex-col justify-between h-[120px]">
          <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Active Loans</h3>
          <div className="text-3xl font-bold text-primary">342</div>
        </div>
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 text-card-foreground shadow-sm p-6 flex flex-col justify-between h-[120px]">
          <h3 className="tracking-tight text-sm font-medium text-destructive">Overdue Returns</h3>
          <div className="text-3xl font-bold text-destructive">12</div>
        </div>
        <div className="rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm p-6 flex flex-col justify-between h-[120px]">
          <h3 className="tracking-tight text-sm font-medium text-muted-foreground">New Borrowers (This Month)</h3>
          <div className="text-3xl font-bold text-primary">45</div>
        </div>
      </div>

      <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border/50">
          <h2 className="text-lg font-semibold tracking-tight">Recent Transactions</h2>
          <p className="text-sm text-muted-foreground">The latest borrowing and return activities in the library.</p>
        </div>
        <div className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[100px] pl-6">ID</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Book Title</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right pr-6">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium pl-6">{tx.id}</TableCell>
                  <TableCell>{tx.student}</TableCell>
                  <TableCell className="max-w-[200px] truncate" title={tx.book}>{tx.book}</TableCell>
                  <TableCell>{tx.action}</TableCell>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell className="text-right pr-6">
                    <Badge 
                      variant={
                        tx.status === "Completed" ? "secondary" : 
                        tx.status === "Overdue" ? "destructive" : 
                        "default"
                      }
                      className="font-medium"
                    >
                      {tx.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
