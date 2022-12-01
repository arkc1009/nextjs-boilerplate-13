import { useEffect, useRef } from "react";

export const useHtml = (content: string) => {
  const domRef = useRef<HTMLElement>(null);

  useEffect(() => {
    domRef.current = document.createElement("div");
    domRef.current.innerHTML = content;
  }, [content]);

  return domRef.current;
};
