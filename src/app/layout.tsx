import "./globals.css";
import NavSideBar from "./comp/NavSideBar.tsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavSideBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
