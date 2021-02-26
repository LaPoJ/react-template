import { GET_DOTO, ADD_TODO, DELETE_TODO } from './type';

// 增加todo
export const addTodoAction = () => ({
  type: ADD_TODO
})

// 获取todo
export const getTodoAction = (data) => ({
  type: GET_DOTO,
  data: data
})

export const deleteTodoAction = (index) => ({
  type: DELETE_TODO,
  index
})