import "@/styles/globals.css";

import { fontSans } from "@/lib/fonts";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import Providers from "./providers";
import { type Metadata, type Viewport } from "next";
import { cn } from "@udecode/cn";
import { SiteHeader } from "@/components/site/site-header";
import { TailwindIndicator } from "@/components/site/tailwind-indicator";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `font-sans ${inter.variable}`,
          "min-h-screen bg-background font-sans antialiased",
          "[&_.slate-selected]:!bg-primary/20 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-primary [&_.slate-selection-area]:bg-primary/10",

          fontSans.variable,
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader className="" />
              <div className="flex flex-1 flex-col">{children}</div>
            </div>
            <TailwindIndicator />
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
