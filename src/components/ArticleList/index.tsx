import * as React from "react";
import { connect } from 'react-redux';
import ArticlePreview from "./ArticlePreview";

const mapStateToProps = (state: any) => {
    return { articles: state.articles }
}
//@ts-ignore
const ConnectedArticleList = ({ articles }) => {
  const List = articles.map((article: any) => {
    return (
      <li>
        <ArticlePreview
          key={article.id}
          name={article.title}
          preview={article.subtitle}
        />
      </li>
    );
  });
  return <ul className="articleListUl">{List}</ul>;
};

const ArticleList = connect(mapStateToProps) (ConnectedArticleList);

export default ArticleList;
