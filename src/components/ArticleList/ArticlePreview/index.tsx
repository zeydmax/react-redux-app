import * as React from "react";
import { Link } from 'react-router-dom';
import { IArticleProps } from '../../../types/types'

const ArticlePreview = (props: IArticleProps) => {
  const Article = (
    <div className="articleDiv">
      <h2 className='text-primary'>{props.title}</h2>
      <span className='text-secondary'>{props.preview}</span>
    </div>
  );
  return <Link to={'article_' + props.id}>{Article}</Link>;
};
export default ArticlePreview;
