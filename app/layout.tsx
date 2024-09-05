import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ReactNode } from "react";

import { cn } from "@/app/lib/utils";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}

/*
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Meal Planner",
  description: "Use AI to plan your meals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}*/
