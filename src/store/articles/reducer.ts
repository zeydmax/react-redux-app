import { ADD_ARTICLE, REMOVE_ARTICLE } from "./actionTypes";


const defaultState = {
  articles: [
    {
      id: '1',
      title: "Lorem",
      subtitle: "Sit amet",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ],
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case ADD_ARTICLE: {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }
    case REMOVE_ARTICLE: {
      return Object.assign({}, state, {
        articles: state.articles.filter(article => article.id !== action.id)
      });
    }
    default:
      return state;
  }
};
