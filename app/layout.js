/* eslint-disable @next/next/no-head-element */

export default function RootLayout({ children }) {
  return (
    <html>
      <head>Next.js 13</head>
      <body>
        <nav>WOw!</nav>
        {children}
      </body>
    </html>
  );
}
