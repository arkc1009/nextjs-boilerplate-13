"use client";

import React, { useRef } from "react";
import { useEffect } from "react";
import { useHtml } from "../../lib/useHtml";

interface PostItemProps {
  title: string;
  content: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, content }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current.innerHTML = content;
  }, [content]);

  return (
    <div className="[&_h1]:font-bold [&_h1]:text-2xl [&_section]:mt-4">
      <h1>{title}</h1>
      <section ref={containerRef}></section>
    </div>
  );
};

export default PostItem;
