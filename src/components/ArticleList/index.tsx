import * as React from "react";
import { connect } from 'react-redux';
import ArticlePreview from "./ArticlePreview";
import DeleteArticle from '../DeleteArticle';
import { IArticlesState, IArticles } from '../../types/types';

const mapStateToProps = (state: IArticlesState) => {
    return { articles: state.articles }
}

//@ts-ignore
const ConnectedArticleList = ({ articles }) => {
  const List = articles.map((article: IArticles) => {
    return (
      <li key={article.id} className='list-group-item d-flex justify-content-between'>
        <ArticlePreview
          title={article.title}
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
