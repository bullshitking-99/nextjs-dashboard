import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  //  specify the route for custom sign-in, sign-out, and error pages.
  pages: {
    signIn: '/login', // user will be redirected to custom login page, rather than default route
  },
  callbacks: {
    //  verify if the request is authorized, called before a request is completed
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
