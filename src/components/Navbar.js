'use client';
import '../app/globals.css'

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Transformers</Link>
        <div className="space-x-4">
          <Link href="/url-to-qr" className="hover:text-gray-300">QR Code</Link>
          <Link href="/url-to-bar" className="hover:text-gray-300">Barcode</Link>
          <Link href="/url-shortener" className="hover:text-gray-300">URL Shortener</Link>
        </div>
      </div>
    </nav>
  );
}
