import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import MainProvider from "@/context/MainContext";
import AuthProvider from "@/context/AuthContext";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthProvider>
        <MainProvider>{children}</MainProvider>
      </AuthProvider>
    </>
  );
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
      <Provider>
        
          <>
            <Sidebar />
            <div className="absolute w-screen h-screen z-0">
              <Image src="/bg.png" alt="logo" fill objectFit="cover" />
            </div>
            {children}
          </>
      </Provider>
      </body>
    </html>
  );
}
