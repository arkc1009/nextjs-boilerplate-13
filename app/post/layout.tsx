import PostHeader from "./Header";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html>
    //   <body>
    //     {/* <PostHeader /> */}
    //     <main>{children}</main>
    //   </body>
    // </html>
    <div>
      {/* <PostHeader /> */}
      <main>{children}</main>
    </div>
  );
}
