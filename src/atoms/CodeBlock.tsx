import React from "react";

const CodeBlock: React.FC<{
  id?: string;
  lineNums?: string;
  lang?: string;
  code: string;
  className?: string;
}> = ({ id, lineNums, lang, code, className }) => {
  return (
    <pre>
      <code
        data-id={id || null}
        data-line-numbers={lineNums || null}
        data-noescape
        className={`${className || ""} ${lang ? `language-${lang}` : ""}`}
      >
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
