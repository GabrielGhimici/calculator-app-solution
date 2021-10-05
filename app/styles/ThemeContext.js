import React, { createContext, useReducer } from 'react';

export const ThemeDispatchContext = createContext();
export const ThemeStateContext = createContext();

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
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}
