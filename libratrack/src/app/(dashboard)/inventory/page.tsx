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
  title: "Book Inventory — LIBRATRACK",
};

const mockBooks = [
  { id: "B-101", title: "The Pragmatic Programmer", author: "Andrew Hunt", isbn: "978-0135957059", category: "Technology", status: "Available", stock: 5 },
  { id: "B-102", title: "Clean Code", author: "Robert C. Martin", isbn: "978-0132350884", category: "Technology", status: "Available", stock: 3 },
  { id: "B-103", title: "1984", author: "George Orwell", isbn: "978-0451524935", category: "Literature", status: "Borrowed", stock: 0 },
  { id: "B-104", title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "978-0060935467", category: "Literature", status: "Available", stock: 2 },
  { id: "B-105", title: "Sapiens", author: "Yuval Noah Harari", isbn: "978-0062316097", category: "History", status: "Available", stock: 4 },
  { id: "B-106", title: "The Martian", author: "Andy Weir", isbn: "978-0553418026", category: "Science Fiction", status: "Borrowed", stock: 0 },
  { id: "B-107", title: "Introduction to Algorithms", author: "Thomas H. Cormen", isbn: "978-0262033848", category: "Technology", status: "Available", stock: 1 },
  { id: "B-108", title: "Dune", author: "Frank Herbert", isbn: "978-0441172719", category: "Science Fiction", status: "Available", stock: 7 },
  { id: "B-109", title: "A Brief History of Time", author: "Stephen Hawking", isbn: "978-0553380163", category: "Science", status: "Available", stock: 2 },
  { id: "B-110", title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "978-0743273565", category: "Literature", status: "Borrowed", stock: 0 },
];

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Book Inventory</h1>
          <p className="text-muted-foreground mt-2">
            Manage the library catalog, track stock, and update records.
          </p>
        </div>
        <Button className="shrink-0 gap-2 font-medium shadow-md shadow-primary/20">
          <Plus className="h-4 w-4" />
          Add New Book
        </Button>
      </div>

      <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-border/50 flex items-center justify-between bg-muted/20">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by title, author, or ISBN..."
              className="pl-9 h-9 bg-background"
            />
          </div>
          <div className="text-sm text-muted-foreground font-medium hidden sm:block">
            {mockBooks.length} Total Books
          </div>
        </div>
        <div className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[80px] pl-6">ID</TableHead>
                <TableHead className="min-w-[200px]">Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right pr-6">Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockBooks.map((book) => (
                <TableRow key={book.id}>
                  <TableCell className="font-medium pl-6 text-muted-foreground">{book.id}</TableCell>
                  <TableCell className="font-semibold">{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell className="text-muted-foreground font-mono text-xs">{book.isbn}</TableCell>
                  <TableCell>{book.category}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={book.status === "Available" ? "default" : "secondary"}
                      className="font-medium"
                    >
                      {book.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right pr-6 font-mono">
                    <span className={book.stock === 0 ? "text-destructive font-bold" : ""}>
                      {book.stock}
                    </span>
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
