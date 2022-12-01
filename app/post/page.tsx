import getData from "../../lib/getData";
import PostCard from "./PostCard";
import PostItem from "./PostItem";

export default async function PostPage() {
  const data = await getData().SSR("/posts");

  console.log(data);

  return (
    <div className="flex flex-wrap gap-8">
      {/* <PostItem title={data.posts[0].title} content={data.posts[0].content} /> */}
      {data.posts.map((post) => (
        <PostCard key={post.id} title={post.title} id={post.id} />
      ))}
    </div>
  );
}
