import "./globals.css";
import NavDesktopBar from "./comp/NavDesktopBar";
import NavTabletBar from "./comp/NavTabletBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavDesktopBar />
          <NavTabletBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
