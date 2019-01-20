import { ADD_ARTICLE, REMOVE_ARTICLE } from './actionTypes';

export const addArticle = (payload: Object) => ({
    type: ADD_ARTICLE,
    payload,
})

export const removeArticle = (id: string) => ({
    type: REMOVE_ARTICLE,
    id,
})
