import "./globals.css";
import Script from "next/script";
import Nav from "./comp/nav/Nav";
import Footer from "./comp/Footer";
import { Geist, Lexend, Major_Mono_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const redaction = localFont({
  src: [
    {
      path: "./fonts/Redaction-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Redaction-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Redaction-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-redaction",
});
const redaction10 = localFont({
  src: [
    {
      path: "./fonts/Redaction_10-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Redaction_10-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Redaction_10-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-redaction-10",
});
const redaction20 = localFont({
  src: [
    {
      path: "./fonts/Redaction_20-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Redaction_20-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Redaction_20-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-redaction-20",
});
const redaction35 = localFont({
  src: [
    {
      path: "./fonts/Redaction_35-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Redaction_35-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Redaction_35-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-redaction-35",
});
const redaction50 = localFont({
  src: [
    {
      path: "./fonts/Redaction_50-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Redaction_50-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Redaction_50-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-redaction-50",
});
const redaction70 = localFont({
  src: [
    {
      path: "./fonts/Redaction_70-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Redaction_70-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Redaction_70-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-redaction-70",
});
const redaction100 = localFont({
  src: [
    {
      path: "./fonts/Redaction_100-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Redaction_100-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Redaction_100-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-redaction-100",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans",
        geist.variable,
        lexend.variable,
        majorMonoDisplay.variable,
        redaction.variable,
        redaction10.variable,
        redaction20.variable,
        redaction35.variable,
        redaction50.variable,
        redaction70.variable,
        redaction100.variable,
      )}
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
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
