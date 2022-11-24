import {types} from "./types";

const initialStore = {
  result: 0,
}

export const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case types.PLUS: return {
      ...store, result: action.numbers.one + action.numbers.two
    }
    case types.MINUS: return {
      ...store, result: action.numbers.one - action.numbers.two
    }
    case types.MULTIPLY: return {
      ...store, result: action.numbers.one * action.numbers.two
    }
    case types.DIVIDE: return {
      ...store, result: action.numbers.one / action.numbers.two
    }
    default: return store
  }
}