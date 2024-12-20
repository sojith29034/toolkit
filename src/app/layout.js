'use client';

import Navbar from '../components/Navbar';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathname = usePathname();

  // If the pathname is not the home page ('/'), show the navbar
  const showNavbar = pathname !== '/';

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tool Kit</title>
      </head>
      <body className="bg-zinc-800 min-h-screen">
        {showNavbar && <Navbar />}
        <main>{children}</main>
      </body>
    </html>
  );
}

