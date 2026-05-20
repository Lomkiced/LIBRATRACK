"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { logout } from "@/app/(auth)/login/actions";
import {
  LayoutDashboard,
  Library,
  Users,
  ArrowRightLeft,
  BarChart,
  BookOpen,
  User,
  ChevronsUpDown,
  LogOut
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

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

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/inventory", label: "Book Inventory", icon: Library },
  { href: "/borrowers", label: "Borrowers", icon: Users },
  { href: "/issue-return", label: "Issue/Return", icon: ArrowRightLeft },
  { href: "/reports", label: "Reports", icon: BarChart },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <Sidebar className="border-r border-border/50 bg-card">
      <SidebarHeader className="p-6 border-b border-border/40">
        <div className="flex items-center gap-4">
          <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <BookOpen className="size-6" />
          </div>
          <div className="flex flex-col gap-1 leading-none">
            <span className="font-bold text-xl tracking-tight text-foreground">LIBRATRACK</span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Admin Portal</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <SidebarMenuItem key={href}>
                    <SidebarMenuButton 
                      render={<Link href={href} />} 
                      isActive={isActive} 
                      tooltip={label}
                      className={`h-12 px-4 gap-4 transition-all duration-200 group ${
                        isActive 
                          ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary rounded-r-lg rounded-l-none shadow-sm" 
                          : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground font-medium rounded-lg"
                      }`}
                    >
                      <Icon className={`size-5 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground transition-colors"}`} />
                      <span className="text-base">{label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/40">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-14 px-3 gap-3 rounded-xl border border-border/40 shadow-sm hover:bg-sidebar-accent hover:shadow-md transition-all"
                  />
                }
              >
                <Avatar className="h-9 w-9 rounded-lg">
                  <AvatarFallback className="bg-primary/10 text-primary rounded-lg">
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold text-foreground">Administrator</span>
                  <span className="truncate text-xs font-medium text-muted-foreground">admin@example.com</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-64 rounded-xl border-border/50 shadow-xl"
                side="right"
                align="end"
                sideOffset={16}
              >
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="font-normal p-3">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-bold leading-none">Administrator</p>
                      <p className="text-xs font-medium leading-none text-muted-foreground">
                        admin@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-border/50" />
                <DropdownMenuItem 
                  className="p-3 text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer rounded-lg m-1 gap-3 font-medium transition-colors"
                  disabled={isPending}
                  onClick={(e) => {
                    e.preventDefault();
                    startTransition(async () => {
                      await logout();
                    });
                  }}
                >
                  <LogOut className="size-4" />
                  {isPending ? "Logging out..." : "Log out safely"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
