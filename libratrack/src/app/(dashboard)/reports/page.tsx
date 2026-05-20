"use client";

import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const borrowingTrends = [
  { month: "Jan", borrowed: 180 },
  { month: "Feb", borrowed: 250 },
  { month: "Mar", borrowed: 310 },
  { month: "Apr", borrowed: 280 },
  { month: "May", borrowed: 420 },
  { month: "Jun", borrowed: 390 },
];

const categoryDistribution = [
  { name: "Science", value: 350 },
  { name: "Literature", value: 420 },
  { name: "History", value: 210 },
  { name: "Technology", value: 580 },
  { name: "Mathematics", value: 150 },
];

const COLORS = ["#0ea5e9", "#f59e0b", "#10b981", "#6366f1", "#ec4899"];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
        <p className="text-muted-foreground mt-2">
          Visualize library usage, borrowing trends, and inventory distribution.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Borrowing Trends Chart */}
        <Card className="shadow-md border-border/60">
          <CardHeader>
            <CardTitle>Borrowing Trends</CardTitle>
            <CardDescription>Number of books borrowed per month (Last 6 Months)</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={borrowingTrends} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  tickLine={false} 
                  axisLine={false} 
                  fontSize={12} 
                  tickMargin={10} 
                  stroke="hsl(var(--muted-foreground))"
                />
                <Tooltip 
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                />
                <Bar dataKey="borrowed" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Inventory Distribution Chart */}
        <Card className="shadow-md border-border/60">
          <CardHeader>
            <CardTitle>Inventory Distribution</CardTitle>
            <CardDescription>Books available by category</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
