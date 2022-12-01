import Link from "next/link";

export default function RootHeader() {
  return (
    <header className="w-full flex justify-center bg-[#393E46] text-[#F7F7F7]">
      <nav className="py-4">
        <ul className="flex justify-center gap-12">
          <li>
            <Link href="/post">Post</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/audio">Audio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
