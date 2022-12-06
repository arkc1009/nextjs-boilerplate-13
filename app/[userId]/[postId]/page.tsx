import getData from "../../../lib/getData";
import MarkdownViewer from "../../../ui/MarkdownViewer";

export default async function PostItemPage({ params }) {
  const { postId } = params;
  const data = await getData().SSR(`/posts/${postId}`);

  console.log(`[${postId}] PAGE:`, data);

  return (
    <div>
      <h1 className="text-2xl font-bold">title: {data.post.title}</h1>
      <MarkdownViewer code={data.post.content} />
    </div>
  );
}
