import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign In — LIBRATRACK",
  description:
    "Sign in to the LIBRATRACK Admin Portal for the Basic Education Department, Polytechnic College of La Union.",
};

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Column (Brand/Visual) */}
      <div className="relative hidden lg:flex flex-col items-center justify-center bg-zinc-900 p-12 text-zinc-100 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full w-[120%] h-[120%] -top-[10%] -left-[10%] opacity-30 mix-blend-screen pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center max-w-xl text-center space-y-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-2xl">
            <BookOpen className="h-10 w-10" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
              LIBRATRACK
            </h1>
            <p className="text-lg leading-relaxed text-zinc-300 font-medium">
              Enterprise Book Inventory System designed for the Basic Education Department of Polytechnic College of La Union.
            </p>
          </div>
        </div>
        
        {/* Footer info absolute */}
        <div className="absolute bottom-8 text-sm text-zinc-500 font-medium">
          © {new Date().getFullYear()} Polytechnic College of La Union. All rights reserved.
        </div>
      </div>

      {/* Right Column (Form Area) */}
      <div className="flex items-center justify-center p-8 sm:p-12 bg-background">
        <LoginForm />
      </div>
    </div>
  );
}
