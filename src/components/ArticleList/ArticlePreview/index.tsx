import * as React from "react";

const ArticlePreview = (props: any) => {
  const Article = (
    <div className="articleDiv">
      <h2>{props.name}</h2>
      <span>{props.preview}</span>
    </div>
  );
  return Article;
};
export default ArticlePreview;
