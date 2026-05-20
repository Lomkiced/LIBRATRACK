"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { login, type LoginState } from "@/app/(auth)/login/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BookOpen, Eye, EyeOff, Loader2, AlertCircle, ShieldCheck } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Submit Button — uses useFormStatus to show spinner while pending   */
/* ------------------------------------------------------------------ */
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      id="login-submit-btn"
      type="submit"
      className="w-full h-11 text-sm font-semibold tracking-wide transition-all duration-200"
      disabled={pending}
      aria-label="Sign in to LIBRATRACK"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing in…
        </>
      ) : (
        "Sign In"
      )}
    </Button>
  );
}

/* ------------------------------------------------------------------ */
/*  Main LoginForm Component                                            */
/* ------------------------------------------------------------------ */
const initialState: LoginState = { error: undefined };

export function LoginForm() {
  const [state, formAction] = useActionState(login, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="w-full shadow-2xl border border-border/60 bg-card/95 backdrop-blur-sm">
      <CardHeader className="space-y-5 pb-6 pt-8">
        {/* Brand Icon */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
            <BookOpen className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>

        {/* Brand Text */}
        <div className="text-center space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">
            LIBRATRACK
          </CardTitle>
          <CardDescription className="text-sm font-medium">
            Admin Portal
          </CardDescription>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Basic Education Department
            <br />
            Polytechnic College of La Union
          </p>
        </div>
      </CardHeader>

      <CardContent className="pb-8">
        <form action={formAction} className="space-y-5" noValidate>
          {/* ---- Error Alert ---- */}
          {state?.error && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/8 px-4 py-3 text-sm text-destructive"
            >
              <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{state.error}</span>
            </div>
          )}

          {/* ---- Email ---- */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="admin@example.com"
              autoComplete="email"
              required
              className="h-11"
              aria-describedby={state?.error ? "login-error" : undefined}
            />
          </div>

          {/* ---- Password ---- */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                required
                className="h-11 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* ---- Submit ---- */}
          <div className="pt-1">
            <SubmitButton />
          </div>
        </form>

        {/* ---- Security Notice ---- */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
          <span>Authorized personnel only. Unauthorized access is prohibited.</span>
        </div>
      </CardContent>
    </Card>
  );
}
