import type { Metadata } from "next";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  title: "Borrowers — LIBRATRACK",
};

const mockBorrowers = [
  { id: "ST-2023-001", name: "Alice Dela Cruz", grade: "Grade 10 - Rizal", activeLoans: 2, status: "Good" },
  { id: "ST-2023-042", name: "John Smith", grade: "Grade 9 - Mabini", activeLoans: 0, status: "Good" },
  { id: "ST-2024-112", name: "Maria Clara", grade: "Grade 11 - STEM", activeLoans: 1, status: "Good" },
  { id: "ST-2022-088", name: "David Lee", grade: "Grade 12 - ABM", activeLoans: 3, status: "Blocked/Overdue" },
  { id: "ST-2023-055", name: "Emma Watson", grade: "Grade 8 - Luna", activeLoans: 0, status: "Good" },
  { id: "ST-2024-201", name: "Miguel Reyes", grade: "Grade 7 - Bonifacio", activeLoans: 1, status: "Good" },
  { id: "ST-2021-019", name: "Sophia Santos", grade: "Grade 12 - HUMSS", activeLoans: 5, status: "Blocked/Overdue" },
  { id: "ST-2025-003", name: "Liam Mendoza", grade: "Grade 7 - Aguinaldo", activeLoans: 2, status: "Good" },
  { id: "ST-2023-077", name: "Isabella Garcia", grade: "Grade 10 - Quezon", activeLoans: 0, status: "Good" },
  { id: "ST-2022-034", name: "Lucas Tolentino", grade: "Grade 11 - STEM", activeLoans: 1, status: "Blocked/Overdue" },
];

export default function BorrowersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Borrowers</h1>
          <p className="text-muted-foreground mt-2">
            Manage student records, track active loans, and monitor account statuses.
          </p>
        </div>
        <Button className="shrink-0 gap-2 font-medium shadow-md shadow-primary/20">
          <Plus className="h-4 w-4" />
          Register Borrower
        </Button>
      </div>

      <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-border/50 flex items-center justify-between bg-muted/20">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name or student ID..."
              className="pl-9 h-9 bg-background"
            />
          </div>
          <div className="text-sm text-muted-foreground font-medium hidden sm:block">
            {mockBorrowers.length} Registered
          </div>
        </div>
        <div className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[150px] pl-6">Student ID</TableHead>
                <TableHead className="min-w-[200px]">Name</TableHead>
                <TableHead>Grade / Section</TableHead>
                <TableHead className="text-center">Active Loans</TableHead>
                <TableHead className="text-right pr-6">Account Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockBorrowers.map((borrower) => (
                <TableRow key={borrower.id}>
                  <TableCell className="font-mono text-xs pl-6 text-muted-foreground">{borrower.id}</TableCell>
                  <TableCell className="font-semibold">{borrower.name}</TableCell>
                  <TableCell>{borrower.grade}</TableCell>
                  <TableCell className="text-center font-mono">{borrower.activeLoans}</TableCell>
                  <TableCell className="text-right pr-6">
                    <Badge 
                      variant={borrower.status === "Good" ? "default" : "destructive"}
                      className={borrower.status === "Good" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                    >
                      {borrower.status}
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
