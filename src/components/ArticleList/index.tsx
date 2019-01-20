import * as React from "react";
import { connect } from 'react-redux';
import ArticlePreview from "./ArticlePreview";
import DeleteArticle from '../DeleteArticle';

const mapStateToProps = (state: any) => {
    return { articles: state.articles }
}

//@ts-ignore
const ConnectedArticleList = ({ articles }) => {
  const List = articles.map((article: any) => {
    return (
      <li className='list-group-item d-flex justify-content-between'>
        <ArticlePreview
          key={article.id}
          name={article.title}
          preview={article.subtitle}
          id={article.id}
        />
        <DeleteArticle id={article.id}/>
      </li>
    );
  });
  return <ul className="list-group">{List}</ul>;
};

const ArticleList = connect(mapStateToProps) (ConnectedArticleList);

export default ArticleList;
