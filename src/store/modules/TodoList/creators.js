import { GET_DOTO, ADD_TODO, DELETE_TODO } from '../type';

// 增加todo
export const addTodoAction = (val) => ({
  type: ADD_TODO,
  data: val
})

// 获取todo
export const getTodoAction = () => ({
  type: GET_DOTO,
})

export const deleteTodoAction = (index) => ({
  type: DELETE_TODO,
  index
})