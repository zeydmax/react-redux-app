import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleEdit from "./components/ArticleEdit";
import ArticleView from "./components/ArticleView";
import Header from './components/Header';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Route exact path="/" component={ArticleList} />
          <Route exact path="/new" component={ArticleEdit} />
          <Route path="/article_:id" component={ArticleView} />
        </div>
      </BrowserRouter>
    );
  }
}
