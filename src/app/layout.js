import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kshitij Deshmukh",
  description: "Kshitij Deshmukh is a full stack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScroll />
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
