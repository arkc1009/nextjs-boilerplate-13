"use client";

const PostInfo: React.FC<any> = ({ id, data }) => {
  return <div onClick={() => console.log(`[${id}]:`, data)}>Click Me!</div>;
};

export default PostInfo;
