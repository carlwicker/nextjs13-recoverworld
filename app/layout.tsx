import { app, analytics } from "../components/utils/Firebase";
import { Arimo } from "@next/font/google";

import "./globals.css";
const arimo = Arimo({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={arimo.className}>{children}</body>
    </html>
  );
}
