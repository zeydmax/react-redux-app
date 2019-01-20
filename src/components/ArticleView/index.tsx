import * as React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { IArticlesState, IArticles } from '../../types/types';

const mapStateToProps = (state: IArticlesState) => {
  return { articles: state.articles };
};
//@ts-ignore
const ConnectedArticleView = ({ articles, match }) => {
  const currentId = match.params.id;
  const currentArticle = articles.filter((article: IArticles) => article.id === currentId)[0];
  const View = (
    <div>
      <h1>{currentArticle.title}</h1>
      <h4>{currentArticle.subtitle}</h4>
      <p>{currentArticle.text}</p>
      <Link className='text-danger' to='/'>Back</Link>
    </div>
  );
  return View;
};

const ArticleView = connect(mapStateToProps)(ConnectedArticleView);

export default ArticleView;
