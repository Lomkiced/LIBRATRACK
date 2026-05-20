"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Library,
  Users,
  ArrowRightLeft,
  BarChart,
  BookOpen
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/inventory", label: "Book Inventory", icon: Library },
  { href: "/borrowers", label: "Borrowers", icon: Users },
  { href: "/issue-return", label: "Issue/Return", icon: ArrowRightLeft },
  { href: "/reports", label: "Reports", icon: BarChart },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="size-5" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold text-lg tracking-tight">LIBRATRACK</span>
            <span className="text-xs text-muted-foreground">Admin Portal</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <SidebarMenuItem key={href}>
                    <SidebarMenuButton render={<Link href={href} />} isActive={isActive} tooltip={label}>
                      <Icon className="mr-2" />
                      <span>{label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
