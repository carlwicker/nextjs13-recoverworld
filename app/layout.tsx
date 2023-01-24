"use client";

import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import "./globals.css";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log(process.env);
    console.log(process.env.NEXT_PUBLIC_APPID);

    return () => {};
  }, []);

  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
