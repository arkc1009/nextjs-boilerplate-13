import Link from "next/link";
import getData from "../../../lib/getData";
import MarkdownViewer from "../../../ui/MarkdownViewer";

export default async function PostItemPage({ params }) {
  const { postSlug, userId } = params;
  const data = await getData().SSR(`/posts/${userId}/${postSlug}`);

  console.log(`[${userId}/${postSlug}] PAGE:`, `/post/edit/${data.post.id}`);

  return (
    <div>
      <header className="flex gap-4">
        <h1 className="text-2xl font-bold">title: {data.post.title}</h1>
        <Link href={`/post/edit/${data.post.id}`}>Edit Post</Link>
      </header>
      <MarkdownViewer code={data.post.content} />
    </div>
  );
}
