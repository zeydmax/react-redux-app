import * as React from 'react';

const ArticleView = (props: any) => {
    const View = <div>
        <h1>{props.title}</h1>
        <h4>{props.subtitle}</h4>
        <p>{props.text}</p>
    </div>;
    return View;
};

export default ArticleView;
