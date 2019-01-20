export interface Action<T = any> {
  type: T;
  payload: T;
  id: string;
}

export interface IDelete<T = any> {
  id: string;
  removeArticle: T;
}

export interface IArticles<T = string> {
  id?: T;
  title: T;
  subtitle: T;
  text: T;
}

export interface IArticlesState {
  articles: IArticles[];
}

export interface IArticleProps<T = string> {
  title: T;
  preview: T;
  id: T;
}

export interface IFormState<T = string> {
  [key: string]: T;
}

export interface IFormProps<T = any> {
  addArticle: T;
}

export interface IButtonProps<T = string, A = any> {
  className?: T;
  type?: T;
  desc?: T;
  handleClick?: A;
}

export interface IInputProps<T = string, A = any> {
  editor: T;
  id: T;
  value: T;
  handleChange: A;
}
