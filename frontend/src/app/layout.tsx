import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: 'OIL NWIS — Nearby Wells Intelligence System',
  description: 'Oil India Limited — AI-Powered Offset Well Intelligence for Drilling Decision Support',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#071018] text-[#EAF4FA] min-h-screen antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
