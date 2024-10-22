import React from "react";

const CodeBlock: React.FC<{
  id?: string;
  lineNums?: string;
  lineNumbers?: boolean;
  lang?: string;
  code: string;
  className?: string;
}> = ({ id, lineNums, lang = "js", code, className, lineNumbers }) => {
  return (
    <pre>
      <code
        data-id={id || null}
        data-line-numbers={lineNums ?? (lineNumbers || false)}
        data-noescape
        className={`${className || ""} ${lang ? `language-${lang}` : ""}`}
      >
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
