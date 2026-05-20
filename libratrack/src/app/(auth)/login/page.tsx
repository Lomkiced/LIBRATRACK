import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to the LIBRATRACK Admin Portal for the Basic Education Department, Polytechnic College of La Union.",
};

export default function LoginPage() {
  return <LoginForm />;
}
