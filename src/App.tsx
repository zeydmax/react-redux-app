import * as React from "react";
import ArticleList from "./components/ArticleList";
import ArticleEdit from "./components/ArticleEdit";

export default class App extends React.Component<any, any> {
  render() {
    return <>
    <ArticleList />
    <ArticleEdit />
    </>;
  }
}
