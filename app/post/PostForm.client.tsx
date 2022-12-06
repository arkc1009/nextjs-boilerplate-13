"use client";

import { Suspense, useCallback, useState } from "react";
import { patchData, postData } from "../../lib/getData";
import MarkdownEditor from "../../ui/MarkdownEditor";
import MarkdownViewer from "../../ui/MarkdownViewer";

interface PostFormProps {
  postId?: string;
  mdText?: string;
  title?: string;
  type?: "create" | "edit";
}

const PostForm: React.FC<PostFormProps> = ({
  postId,
  mdText = "",
  title: titleProps = "",
  type = "create",
}) => {
  const [code, setCode] = useState(mdText);
  const [title, setTitle] = useState(type === "create" ? "제목" : titleProps);

  const onChange = useCallback((value: string) => {
    setCode(value);
  }, []);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(() => {
    const url = type === "edit" ? `/posts/${postId}` : "/posts";
    postData(url, { title, content: code })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [title, code, postId, type]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-[1fr_1fr] [&_.cm-gutters]:hidden shadow">
        <div className="max-h-[calc(100vh_-_56px_-_4rem)] overflow-y-auto">
          <input
            className="w-full h-16 p-4 bg-white"
            type="text"
            placeholder="title"
            value={title}
            onChange={handleTitleChange}
          />
          <MarkdownEditor
            value={code}
            onChange={onChange}
            height="calc(100vh - 56px - 4rem - 4rem)"
          />
        </div>
        <div className="border-l">
          <h1 className="w-full flex items-center h-16 p-4 bg-white text-[2rem] font-bold">
            {title}
          </h1>
          <div className="h-[calc(100vh_-_56px_-_4rem_-_4rem)] bg-white overflow-y-auto">
            <MarkdownViewer code={code} className="h-full" />
          </div>
        </div>
      </div>
      <div className="w-full h-16 px-4 pt-3 text-right col-[1_/_3]">
        <button
          className="px-4 py-2 font-semibold text-white bg-green-400 rounded hover:bg-green-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostForm;
