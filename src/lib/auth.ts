import NextAuth from 'next-auth';
import { env } from '@/src/lib/env';
import { prisma } from '@/src/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const githubId = env.GITHUB_ID;
const githubSecret = env.GITHUB_SECRET;

const googleId = env.GOOGLE_ID;
const googleSecret = env.GOOGLE_SECRET;

if (!githubId || !githubSecret || !googleId || !googleSecret) {
  throw new Error('Missing environment variables for authentication');
}

export const { handlers, auth: baseAuth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),
  ],
  secret: env.AUTH_SECRET,
  session: {
    strategy: 'database',
  },
});
