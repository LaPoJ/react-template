import { GET_DOTO, ADD_TODO, DELETE_TODO } from './type';

const defaultState = {
  list: [
    { id: 1, val: 'test todo 1', key: 0 },
    { id: 2, val: 'test doto 2', key: 1 },
    { id: 3, val: 'test doto 3', key: 2}
  ]
}


const Todo = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case GET_DOTO:
      return newState
    case ADD_TODO:
      newState.list.push(action.data)
      return newState
    case DELETE_TODO:
      const newStates = newState.list.filter(item => {
          return item.key !== action.index
      });
      newState.list = newStates
      return newState
    default:
      return state
  }
}

export default Todo