import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Cursor from "@/components/Cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio website ('Owner': Aditya_Kahandal)",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
          {children}
        <FireFliesBackground />
        <Cursor/>
      </body>
    </html>
  );
}