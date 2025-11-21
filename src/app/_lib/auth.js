// app/_lib/auth.js
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        console.log('SignIn attempt for:', user.email);
        const existingGuest = await getGuest(user.email);

        if (!existingGuest) {
          console.log('Creating new guest for:', user.email);
          await createGuest({ email: user.email, fullName: user.name });
        }

        return true;
      } catch(error) {
        console.error('SignIn error:', error);
        return false;
      }
    },
    async session({ session, user }) {
      try {
        const guest = await getGuest(session.user.email);
        session.user.guestId = guest.id;
        return session;
      } catch (error) {
        console.error('Session callback error:', error);
        return session;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === 'development',
  
  // ADD THESE SETTINGS
  trustHost: true,
  useSecureCookies: process.env.NODE_ENV === 'production',
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);