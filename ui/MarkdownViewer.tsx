"use client";

import "../styles/markdown.css";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({
  code,
  className,
  ...rest
}) => {
  return (
    <ReactMarkdown
      className={`${className} markdown-body`}
      components={{
        code({ inline, className: _className, children, ...props }) {
          const match = /language-(\w+)/.exec(_className || "");
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
            <code className={_className} {...props}>
              {children}
            </code>
          );
        },
      }}
      {...rest}
    >
      {code}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
