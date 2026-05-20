"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { login, type LoginState } from "@/app/(auth)/login/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Loader2, AlertCircle, ShieldCheck } from "lucide-react";

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
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
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
    <div className="w-full max-w-[400px] flex flex-col space-y-8">
      {/* ---- Headers ---- */}
      <div className="flex flex-col space-y-2 text-center lg:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access the admin portal.
        </p>
      </div>

      {/* ---- Form Area ---- */}
      <form action={formAction} className="space-y-6" noValidate>
        {/* ---- Error Alert ---- */}
        {state?.error && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{state.error}</span>
          </div>
        )}

        {/* ---- Email ---- */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="admin@example.com"
            autoComplete="email"
            required
            className="h-11 px-4 text-base bg-background focus-visible:ring-primary focus-visible:ring-2 transition-all shadow-sm"
            aria-describedby={state?.error ? "login-error" : undefined}
          />
        </div>

        {/* ---- Password ---- */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-semibold text-foreground">
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
              className="h-11 px-4 pr-11 text-base bg-background focus-visible:ring-primary focus-visible:ring-2 transition-all shadow-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
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
        <div className="pt-2">
          <SubmitButton />
        </div>
      </form>

      {/* ---- Security Notice ---- */}
      <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
        <span>Authorized personnel only. Secure connection.</span>
      </div>
    </div>
  );
}
