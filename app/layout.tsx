import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UseForm",
  description:
    "Create professional forms in minutes with an intuitive drag-and-drop editor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white fixed w-full border-b">
          <NavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
