import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <body>{children}</body>
    </html>
  );
}
