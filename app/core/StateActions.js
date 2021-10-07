export const StateActions = {
  NUMERIC_KEY_PRESS: 'NUMERIC_KEY_PRESS',
  RESET_KEY_PRESS: 'RESET_KEY_PRESS',
  DELETE_KEY_PRESS: 'DELETE_KEY_PRESS',
  OPERATION_KEY_PRESS: 'OPERATION_KEY_PRESS',
  EQ_KEY_PRESS: 'EQ_KEY_PRESS',
  DOT_KEY_PRESS: 'DOT_KEY_PRESS',
};

export const numericKeyPress = (keyValue) => ({
  type: StateActions.NUMERIC_KEY_PRESS,
  payload: keyValue,
});

export const resetKeyPress = () => ({
  type: StateActions.RESET_KEY_PRESS,
});

export const deleteKeyPress = () => ({
  type: StateActions.DELETE_KEY_PRESS,
});

export const eqKeyPress = () => ({
  type: StateActions.EQ_KEY_PRESS,
});

export const dotKeyPress = () => ({
  type: StateActions.DOT_KEY_PRESS,
});

export const operationKeyPress = (operation) => ({
  type: StateActions.OPERATION_KEY_PRESS,
  payload: operation,
});
