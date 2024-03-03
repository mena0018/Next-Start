import { baseAuth } from './auth';
import { AuthError } from 'next-auth';
import type { User } from '@prisma/client';

export const auth = async () => {
  const session = await baseAuth();

  if (session?.user) {
    const user = session.user as User;
    return user;
  }

  return null;
};

export const requiredAuth = async () => {
  const user = await auth();

  if (!user) {
    throw new AuthError('You must be authenticated to access this resource.');
  }

  return user;
};
