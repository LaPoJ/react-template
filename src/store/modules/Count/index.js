import { COUNT_INCREASE, COUNT_DECREASE } from '../type';

const defaultState = 0

const Count = (state = defaultState, action) => {
  let newState = defaultState
  switch (action.type) {
    case COUNT_INCREASE:
      return newState++
    case COUNT_DECREASE:
      return newState--
    default:
      return newState
  }
}

export default Count