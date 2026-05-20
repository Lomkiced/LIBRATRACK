import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * LIBRATRACK — Auth Middleware
 *
 * 1. Refreshes the Supabase session on EVERY request (required by @supabase/ssr).
 * 2. Protects /dashboard/** — unauthenticated users are redirected to /login.
 * 3. Redirects authenticated users away from /login to /dashboard.
 */
export async function middleware(request: NextRequest) {
  // Must create a new response so we can mutate cookies.
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Write cookies to the *request* object first, then mirror to response.
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // ⚠️ IMPORTANT: Do NOT add any logic between createServerClient and getUser.
  // A simple mistake could make it very hard to debug issues with users being
  // randomly logged out.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // ------------------------------------------------------------------
  // Route Protection Rules
  // ------------------------------------------------------------------

  // Rule 1: Unauthenticated user → accessing any /dashboard route → send to /login
  if (!user && pathname.startsWith("/dashboard")) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/login";
    redirectUrl.searchParams.set("redirectedFrom", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Rule 2: Authenticated user → accessing /login → send to /dashboard
  if (user && pathname === "/login") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";
    return NextResponse.redirect(redirectUrl);
  }

  // Rule 3: All other requests → pass through with refreshed session cookies.
  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Run middleware on all paths EXCEPT:
     * - Next.js internals (_next/static, _next/image)
     * - favicon, images, and static assets
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
