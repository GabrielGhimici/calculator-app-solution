import numeral from 'numeral';
import { StateActions } from './StateActions';

export const initialState = {
  display: '',
  total: '',
  operator: '',
};

export const stateReducer = (state, action) => {
  switch (action.type) {
    case StateActions.NUMERIC_KEY_PRESS: {
      let newDisplay = state.display;
      if (newDisplay === '0' || newDisplay === '') {
        newDisplay = `${action.payload}`;
      } else {
        newDisplay = `${state.display}${action.payload}`;
      }
      return { ...state, ...{ display: newDisplay } };
    }
    case StateActions.RESET_KEY_PRESS: {
      return initialState;
    }
    case StateActions.DELETE_KEY_PRESS: {
      return {
        ...state,
        ...{ display: state.display.substring(0, state.display.length - 1) },
      };
    }
    case StateActions.OPERATION_KEY_PRESS: {
      let newTotal = state.total;
      if (state.total === '') {
        newTotal = state.display;
      } else {
        newTotal = applyOp(state.operator, state.total, state.display);
      }
      return {
        ...state,
        ...{
          total: newTotal,
          display: '',
          operator: action.payload,
        },
      };
    }
    case StateActions.EQ_KEY_PRESS: {
      const newDisplay = state.operator
        ? applyOp(state.operator, state.total, state.display)
        : state.display;
      return {
        ...state,
        ...{
          display: newDisplay,
          total: '',
          operator: '',
        },
      };
    }
    case StateActions.DOT_KEY_PRESS: {
      let newDisplay = state.display;
      if (newDisplay === '') {
        newDisplay = '0.';
      } else if (newDisplay.includes('.')) {
        newDisplay = state.display;
      } else {
        newDisplay = `${newDisplay}.`;
      }
      return { ...state, ...{ display: newDisplay } };
    }
    default:
      return state;
  }
};

const applyOp = (operator, first, second) => {
  const numericFirst = Number(first);
  const numericSecond = Number(second);
  if (Number.isNaN(numericFirst) || Number.isNaN(numericSecond)) {
    return 'Err';
  }
  switch (operator) {
    case '+':
      return add(numericFirst, numericSecond);
    case '-':
      return subtract(numericFirst, numericSecond);
    case '*':
      return multiply(numericFirst, numericSecond);
    case '/':
      return divide(numericFirst, numericSecond);
    default:
      return '0';
  }
};

const add = (first, second) => {
  return `${numeral(first).add(second).value()}`;
};

const subtract = (first, second) => {
  return `${numeral(first).subtract(second).value()}`;
};

const multiply = (first, second) => {
  return `${numeral(first).multiply(second).value()}`;
};

const divide = (first, second) => {
  return `${numeral(first).divide(second).value()}`;
};
