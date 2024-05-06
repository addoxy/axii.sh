import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { cn } from "@/utils/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Addoxy - Full-stack Web Developer & UI/UX Designer",
  description:
    "I build beautiful, interactive and accessible websites with a focus on seamless user experiences. I also provide high quality Notion templates to boost your productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "relative flex min-h-screen flex-col bg-background font-sans antialiased",
          fontSans.variable,
          process.env.NODE_ENV === "development" && "debug-screens",
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
