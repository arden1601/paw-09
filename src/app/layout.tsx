import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import MainProvider from "@/context/MainContext";
import AuthProvider from "@/context/AuthContext";
// import Image from "next/image";

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
  title: "PAW-09 To-Do List",
  description: "To do list APP",
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
            {/* <div className="absolute w-screen h-screen z-0">
              <Image src="/bg.png" alt="logo" fill objectFit="cover" />
            </div> */}
            {children}
          </>
        </Provider>
      </body>
    </html>
  );
}
