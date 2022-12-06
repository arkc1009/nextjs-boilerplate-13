import getData from "../../lib/getData";
import PostCard from "../post/PostCard";

export default async function UserPage({ params: { userId } }) {
  const data = await getData().SSR(`/posts/user/${userId}`);

  return (
    <div>
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
