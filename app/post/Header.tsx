import Link from "next/link";

export default function PostHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/post/ssr">SSR</Link>
          </li>
          <li>
            <Link href="/post/ssg">SSG</Link>
          </li>
          <li>
            <Link href="/post/isr">ISR</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
