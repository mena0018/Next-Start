import './globals.css';
import type { Metadata } from 'next';
import { cn } from '@/src/lib/utils';
import { Providers } from './Providers';
import { PropsWithChildren } from 'react';
import { SiteConfig } from '@/src/lib/site-config';
import { Inter as FontSans } from 'next/font/google';
import { ModeToggle } from '@/src/components/features/theme/theme-toggle';

const fontSans = FontSans({ subsets: ['latin'] });
export const metadata: Metadata = SiteConfig;

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.className)}>
        <ModeToggle />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
