"use client";

import CodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import {
  markdown as LangMarkdown,
  markdownLanguage,
} from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

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

const MarkdownEditor: React.FC<ReactCodeMirrorProps> = (props) => {
  return (
    <CodeMirror
      extensions={[
        LangMarkdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      theme={myTheme}
      {...props}
    />
  );
};

export default MarkdownEditor;
