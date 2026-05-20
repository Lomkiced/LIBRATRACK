import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* Deep navy gradient background — consistent across all auth pages */
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[oklch(0.14_0.04_258)]">

      {/* Ambient glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/3 h-[500px] w-[500px] rounded-full bg-[oklch(0.38_0.18_258)] opacity-[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-1/4 h-[400px] w-[400px] rounded-full bg-[oklch(0.52_0.15_200)] opacity-[0.06] blur-3xl"
      />

      {/* Subtle dot-grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.9 0 0 / 0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Card container */}
      <div className="relative z-10 w-full max-w-md px-4 py-8">
        {children}
      </div>

      {/* Footer */}
      <p className="absolute bottom-4 text-center text-[11px] text-white/25 w-full">
        © {new Date().getFullYear()} LIBRATRACK · Polytechnic College of La Union
      </p>
    </div>
  );
}
