import Link from "next/link";
import getData from "../../lib/getData";
import PostCard from "./PostCard";

export default async function PostPage() {
  const data = await getData().SSR("/posts");

  return (
    <div className="flex flex-wrap gap-8 pt-8">
      <header className="w-full text-right">
        <button className="px-4 py-2 font-semibold text-white bg-green-400 rounded hover:bg-green-600">
          <Link href="/post/create">CREATE POST!</Link>
        </button>
      </header>
      {data.posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          id={post.id}
          postUrl={post.postUrl}
        />
      ))}
    </div>
  );
}
