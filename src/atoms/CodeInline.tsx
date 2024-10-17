import React from "react";

const CodeInline: React.FC<{ color: string; code: string; lang: string }> = ({
  color,
  code,
  lang,
}) => {
  return (
    <code className={`language-${lang}`} style={{ color: color }}>
      {code}
    </code>
  );
};

export default CodeInline;
