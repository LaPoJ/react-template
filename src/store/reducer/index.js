import { combineReducers } from 'redux';
import { todoList, count } from "../modules/index";

const reducer = combineReducers({
    todoList,
    count
})

export default reducer
