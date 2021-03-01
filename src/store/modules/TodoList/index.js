import { GET_DOTO, ADD_TODO, DELETE_TODO } from '../type';

const defaultState = [
  { id: 1, val: 'test todo 1', key: 0 },
  { id: 2, val: 'test doto 2', key: 1 },
  { id: 3, val: 'test doto 3', key: 2 }
]

let todoDefLen = 3

function setTodoItem(val) {
  console.log(val);
  todoDefLen++
  const data = {
    id: todoDefLen,
    val: val,
    key: todoDefLen-1
  }

  return data
}

const Todo = (state = defaultState, action) => {
  let todoLists = state.slice(0)
  switch (action.type) {
    case GET_DOTO:
      return todoLists
    case ADD_TODO:
      const todoItem = setTodoItem(action.data)
      todoLists.push(todoItem)
      return todoLists
    case DELETE_TODO:
      const newStates = todoLists.filter(item => {
          return item.key !== action.index
      });
      return newStates
    default:
      return todoLists
  }
}

export default Todo