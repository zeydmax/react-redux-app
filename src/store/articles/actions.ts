import { ADD_ARTICLE, REMOVE_ARTICLE, LOAD_ARTICLE } from './actionTypes';

export const addArticle = (payload: Object) => ({
    type: ADD_ARTICLE,
    payload,
})

export const removeArticle = (id: number) => ({
    type: REMOVE_ARTICLE,
    id,
})

export const loadArticle = (id: number, title: string, subtitle: string, text: string) => ({
    type: LOAD_ARTICLE,
    id,
    title,
    subtitle,
    text,
})