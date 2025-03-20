"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {SeekerSidebar} from "@/components/seeker-sidebar";
import {CoachSidebar} from "@/components/coach-sidebar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserType(localStorage.getItem("userType"));
    }
  }, []);

  // Hide sidebar for login and signup pages
  const hideSidebar = pathname === "/login" || pathname === "/signup";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}>
        <SidebarProvider>
          {!hideSidebar && (userType === "seeker" ? <SeekerSidebar /> : <CoachSidebar />)}
          <main className="w-full">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
