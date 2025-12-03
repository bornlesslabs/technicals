import type { Metadata } from 'next';
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const departureMono = localFont({
  src: [
    {
      path: './fonts/DepartureMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/DepartureMono-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-departure',
});

export const metadata: Metadata = {
  title: 'technicals.dev',
  description: 'A minimalist tech website',
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${departureMono.variable} font-sans antialiased h-screen w-screen overflow-hidden flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <main className="relative w-full flex-1 overflow-hidden">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
