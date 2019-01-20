import * as React from "react";
import { v1 as uuidv1 } from "uuid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addArticle } from "../../store/articles/actions";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { Dispatch } from "redux";
import { IArticles, IFormState, IFormProps } from "../../types/types";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addArticle: (article: IArticles) => dispatch(addArticle(article))
  };
};

class ConnectedArticleEdit extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    this.state = {
      title: "",
      subtitle: "",
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { title, subtitle, text } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id, subtitle, text });
    this.setState({ title: "", subtitle: "", text: "" });
  }

  render() {
    const { title, subtitle, text } = this.state;
    const Form = (
      <form className="form-group" onSubmit={this.handleSubmit}>
        <Input
          editor="textbox"
          id="title"
          value={title}
          handleChange={this.handleChange}
        />
        <Input
          editor="textbox"
          id="subtitle"
          value={subtitle}
          handleChange={this.handleChange}
        />
        <Input
          editor="multiline"
          id="text"
          value={text}
          handleChange={this.handleChange}
        />
        <Button type="submit" className="btn btn-primary mt-1" desc="Save" />{" "}
        <Link to="/" className="btn btn-secondary mt-1">
          Return
        </Link>
      </form>
    );
    return <>{Form}</>;
  }
}

const ArticleEdit = connect(
  null,
  mapDispatchToProps
)(ConnectedArticleEdit);

export default ArticleEdit;
