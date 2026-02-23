import React from "react";

export function simpleMarkdownToElements(markdown) {
  const lines = markdown.split("\n");
  const elements = [];
  let listItems = [];
  let paragraphLines = [];
  let key = 0;

  const flushParagraph = () => {
    if (paragraphLines.length) {
      elements.push(
        <p key={`p-${key++}`}>{paragraphLines.join(" ").trim()}</p>
      );
      paragraphLines = [];
    }
  };

  const flushList = () => {
    if (listItems.length) {
      elements.push(
        <ul key={`ul-${key++}`}>
          {listItems.map((item, index) => (
            <li key={`li-${key++}-${index}`}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      return;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      elements.push(<h1 key={`h1-${key++}`}>{line.replace(/^#\s+/, "")}</h1>);
      return;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      elements.push(<h2 key={`h2-${key++}`}>{line.replace(/^##\s+/, "")}</h2>);
      return;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      elements.push(<h3 key={`h3-${key++}`}>{line.replace(/^###\s+/, "")}</h3>);
      return;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.replace(/^-\s+/, ""));
      return;
    }

    if (/^\d+\.\s+/.test(line)) {
      flushParagraph();
      listItems.push(line.replace(/^\d+\.\s+/, ""));
      return;
    }

    paragraphLines.push(line);
  });

  flushParagraph();
  flushList();

  return elements;
}
