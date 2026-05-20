"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type LoginState = {
  error?: string;
};

/**
 * Server Action: Authenticates the admin user with Supabase Auth.
 * On success → redirects to /dashboard.
 * On failure → returns the error message for the UI to display.
 */
export async function login(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Return a generic message for security — don't reveal whether the
    // email exists or not. Only use the real message in development.
    const message =
      process.env.NODE_ENV === "development"
        ? error.message
        : "Invalid email or password. Please try again.";
    return { error: message };
  }

  // Session cookies are set by the Supabase SSR client automatically.
  redirect("/dashboard");
}

/**
 * Server Action: Signs out the user and redirects to /login.
 */
export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
