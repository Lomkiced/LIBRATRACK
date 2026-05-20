import type { Metadata } from "next";
import { ArrowRightLeft, BookDown, BookUp, ScanBarcode } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Issue / Return — LIBRATRACK",
};

export default function IssueReturnPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Issue & Return</h1>
        <p className="text-muted-foreground mt-2">
          Process book check-outs and returns quickly using barcodes or manual entry.
        </p>
      </div>

      <Tabs defaultValue="issue" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-12 mb-6">
          <TabsTrigger value="issue" className="text-base gap-2">
            <BookUp className="h-4 w-4" />
            Issue Book
          </TabsTrigger>
          <TabsTrigger value="return" className="text-base gap-2">
            <BookDown className="h-4 w-4" />
            Return Book
          </TabsTrigger>
        </TabsList>
        
        {/* Issue Book Tab */}
        <TabsContent value="issue">
          <Card className="border-border/60 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle>Check-Out Process</CardTitle>
              <CardDescription>Scan the student ID and the book barcode to issue a book.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="issue-student-id">Student ID / Scanner</Label>
                <div className="relative">
                  <ScanBarcode className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input id="issue-student-id" placeholder="Scan or type Student ID..." className="pl-10 h-12 text-lg font-mono" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="issue-book-barcode">Book Barcode / ISBN</Label>
                <div className="relative">
                  <ScanBarcode className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input id="issue-book-barcode" placeholder="Scan or type Book Barcode..." className="pl-10 h-12 text-lg font-mono" />
                </div>
              </div>

              {/* Mock Student/Book Info Panel (Placeholder) */}
              <div className="rounded-lg border border-dashed p-6 bg-muted/20 text-center text-sm text-muted-foreground flex flex-col items-center justify-center min-h-[120px]">
                Waiting for scan...
              </div>
            </CardContent>
            <CardFooter className="bg-muted/20 pt-6">
              <Button className="w-full h-12 text-base gap-2">
                <ArrowRightLeft className="h-5 w-5" />
                Confirm Issue
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Return Book Tab */}
        <TabsContent value="return">
          <Card className="border-border/60 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle>Check-In Process</CardTitle>
              <CardDescription>Scan the book barcode to process a return.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="return-book-barcode">Book Barcode / ISBN</Label>
                <div className="relative">
                  <ScanBarcode className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input id="return-book-barcode" placeholder="Scan or type Book Barcode..." className="pl-10 h-12 text-lg font-mono" />
                </div>
              </div>

              {/* Mock Book Info Panel (Placeholder) */}
              <div className="rounded-lg border border-dashed p-6 bg-muted/20 text-center text-sm text-muted-foreground flex flex-col items-center justify-center min-h-[220px]">
                Waiting for scan...
              </div>
            </CardContent>
            <CardFooter className="bg-muted/20 pt-6">
              <Button className="w-full h-12 text-base gap-2" variant="secondary">
                <BookDown className="h-5 w-5" />
                Confirm Return
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
