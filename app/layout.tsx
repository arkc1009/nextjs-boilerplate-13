/* eslint-disable @next/next/no-head-element */
import "../styles/globals.css";

import RootHeader from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>

      <body className="w-screen h-screen flex flex-col items-center bg-[#F8F9FA]">
        <RootHeader />
        <main className="w-full h-full shadow-inner px-24">{children}</main>
      </body>
    </html>
  );
}
