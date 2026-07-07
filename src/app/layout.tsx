import "./globals.css";
import Nav from "./comp/nav/Nav";
import Footer from "./comp/Footer";
import { Geist, Lexend, Major_Mono_Display, Leckerli_One } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend",
});
const majorMonoDisplay = Major_Mono_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-majorono",
});

const leckerliOne = Leckerli_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-leckerli",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable, lexend.variable, majorMonoDisplay.variable, leckerliOne.variable)}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          }}
        />
      </head>
      <body>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
