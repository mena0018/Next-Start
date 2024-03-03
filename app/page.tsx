import { auth } from '@/src/lib/auth-helper';
import { LoginButton } from '@/src/components/features/auth/LoginButton';
import { LogoutButton } from '@/src/components/features/auth/LogoutButton';

export default async function Home() {
  const user = await auth();

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <h1>{user ? `Authenticated ${user.name}` : 'Not Authenticated'}</h1>
      <div>{user ? <LogoutButton /> : <LoginButton />}</div>
    </main>
  );
}
