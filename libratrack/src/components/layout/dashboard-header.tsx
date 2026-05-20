"use client";

import { useTransition } from "react";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { logout } from "@/app/(auth)/login/actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DashboardHeaderProps {
  title?: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <header className="flex items-center justify-between w-full h-full">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-2" />
        {/* Page Title */}
        {title && (
          <span className="text-sm font-medium text-muted-foreground hidden sm:block">{title}</span>
        )}
      </div>

      {/* Search + Actions */}
      <div className="flex items-center gap-3 ml-auto">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="header-search"
            type="search"
            placeholder="Search books..."
            className="pl-9 w-56 h-9"
            aria-label="Search books"
          />
        </div>
        <Button variant="ghost" size="icon" aria-label="Notifications" className="h-9 w-9">
          <Bell className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" className="relative h-9 w-9 rounded-full ml-1" aria-label="User menu" />
            }
          >
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-primary/10 text-primary">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Administrator</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    LIBRATRACK Admin
                  </p>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer w-full"
              disabled={isPending}
              onClick={(e) => {
                e.preventDefault(); // Prevent menu from closing immediately if we want to show loading state
                startTransition(async () => {
                  await logout();
                });
              }}
            >
              {isPending ? "Logging out..." : "Log out"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
