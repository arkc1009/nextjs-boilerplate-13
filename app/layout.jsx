/* eslint-disable @next/next/no-head-element */

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <nav>WOw!</nav>
        {children}
      </body>
    </html>
  );
}
