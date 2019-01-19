import * as React from "react";
import { v1 as uuidv1 } from "uuid";
import { connect } from "react-redux";
import { addArticle } from "../../store/articles/actions";

const mapDispatchToProps = (dispatch: any) => {
  return {
    addArticle: (article: any) => dispatch(addArticle(article))
  };
};

class ConnectedArticleEdit extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: "",
      subtitle: ""
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
    this.setState({ title: "", subtitle: "", text: '' });
  }

  render() {
    const { title, subtitle, text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="titleInput"
          id="title"
          value={title}
          onChange={this.handleChange}
        />
        <label htmlFor='subtitle'>Subtitle</label>
        <input
          type="text"
          className="subtitleInput"
          id="subtitle"
          value={subtitle}
          onChange={this.handleChange}
        />
        <label htmlFor='text'>Text</label>
        <textarea
            className='textArea'
            id='text'
            value={text}
            onChange={this.handleChange}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

const ArticleEdit = connect(
  null,
  mapDispatchToProps
)(ConnectedArticleEdit);

export default ArticleEdit;
