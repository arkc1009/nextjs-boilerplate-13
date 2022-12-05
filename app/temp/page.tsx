"use client";

import "./theme.css";
import CodeMirror from "@uiw/react-codemirror";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  markdown as LangMarkdown,
  markdownLanguage,
} from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import StringHTML from "rehype-stringify";
import { postData } from "../../lib/getData";

const myTheme = createTheme({
  theme: "light",
  settings: {
    background: "#ffffff",
    foreground: "#212529",
  },
  styles: [
    { tag: t.heading, color: "#212529", fontWeight: "700", lineHeight: "1.5" },
    {
      tag: t.heading1,
      color: "#212529",
      fontWeight: "700",
      lineHeight: "1.5",
      fontSize: "2.5rem",
    },
    {
      tag: t.heading2,
      color: "#212529",
      fontWeight: "700",
      lineHeight: "1.5",
      fontSize: "2rem",
    },
    {
      tag: t.heading3,
      color: "#212529",
      fontWeight: "700",
      lineHeight: "1.5",
      fontSize: "1.5rem",
    },
    {
      tag: t.heading4,
      color: "#212529",
      fontWeight: "700",
      lineHeight: "1.5",
      fontSize: "1.3125rem",
    },
    { tag: t.quote, color: "#9d9d9f", fontStyle: "italic" },
    { tag: t.strong, color: "#e45649", fontWeight: "bold" },
    { tag: t.emphasis, color: "#c678dd", fontStyle: "italic" },
    { tag: t.tagName, color: "#e45649" },
    { tag: t.attributeName, color: "#986801" },
    { tag: t.link, color: "#50a14f", borderBottom: "solid 1px #50a14f" },
    { tag: t.keyword, color: "#0184bc" },
    { tag: t.definition(t.typeOperator), color: "#cf9d41" },
    { tag: t.atom, color: "#0184bc" },
    { tag: t.number, color: "#986801" },
    { tag: t.propertyName, color: "#e45649" },
    { tag: t.variableName, color: "#cf9d41" },
    { tag: t.string, color: "#50a14f" },
    { tag: t.punctuation, color: "#383a42" },
    { tag: t.operator, color: "#56b6c2" },
    { tag: t.meta, color: "#808080" },
    { tag: t.bracket, color: "#383a42" },
    { tag: t.comment, color: "#9d9d9f", fontStyle: "italic" },
  ],
});

export default function TempPage() {
  const [code, setCode] = useState("");
  const [html, setHtml] = useState("");
  const [title, setTitle] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const onChange = React.useCallback((value: string) => {
    setCode(value);

    const _html = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(StringHTML)
      .processSync(value)
      .toString();
    setHtml(_html);
  }, []);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(() => {
    console.log("submit", title, html);
    postData("/posts", { title, content: html })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [html, title]);

  return (
    <div className="grid grid-cols-[1fr_1fr] [&_.cm-gutters]:hidden">
      <div className="h-[calc(100vh - 56px)]">
        <CodeMirror
          value={code}
          extensions={[
            LangMarkdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={onChange}
          theme={myTheme}
          height="calc(100vh - 56px - 2rem)"
        />
        <div className="h-8 bg-slate-400">
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={handleTitleChange}
          />
          <button className="ring-0" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div ref={containerRef}>
        <ReactMarkdown
          className="h-[calc(100vh - 56px)] markdown-body"
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneLight as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {code}
        </ReactMarkdown>
      </div>
    </div>
  );
}
