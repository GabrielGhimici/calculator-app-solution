import React, { createContext, useReducer } from 'react';

export const DispatchContext = createContext();
export const StateContext = createContext();

const Actions = {
  UPDATE_THEME: 'UPDATE_THEME',
};

export const updateTheme = (themeValue) => ({
  type: Actions.UPDATE_THEME,
  payload: themeValue,
});

const initialState = {
  theme: 'dark',
};

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.UPDATE_THEME:
      return {
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
