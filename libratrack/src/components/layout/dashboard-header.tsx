"use client";

import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
  title?: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between w-full h-full">
      {/* Page Title */}
      {title && (
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
      )}

      {/* Search + Actions */}
      <div className="flex items-center gap-3 ml-auto">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="header-search"
            type="search"
            placeholder="Search books..."
            className="pl-9 w-56"
            aria-label="Search books"
          />
        </div>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
