import { PostType } from "../../../@types/Post";
import getData from "../../../lib/getData";
import Post from "../../../ui/post/Post";

export default async function SSR() {
  const posts: PostType[] = await getData().SSR("/posts");

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.name}
          checked={post.checked}
        />
      ))}
    </div>
  );
}
