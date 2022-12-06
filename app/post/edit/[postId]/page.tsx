import React from "react";
import getData from "../../../../lib/getData";
import PostForm from "../../PostForm.client";

export default async function EditPostPage({ params: { postId } }) {
  console.log(`/posts/${postId}`);
  const data = await getData().SSR(`/posts/${postId}`);

  return (
    <PostForm
      mdText={data.post.content}
      title={data.post.title}
      postId={data.post.id}
      type="edit"
    />
  );
}
