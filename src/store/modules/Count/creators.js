import { COUNT_DECREASE, COUNT_INCREASE } from '../type';

export const increaseCountAction = () => ({
  type: COUNT_INCREASE
})

export const countDecreaseAction = () => ({
  type: COUNT_DECREASE
})