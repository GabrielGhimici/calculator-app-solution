import React, { createContext, useReducer } from 'react';
import { stateReducer, initialState } from './StateReducer';

export const MainDispatchContext = createContext();
export const MainStateContext = createContext();

export default function StateProvider({ children }) {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <MainStateContext.Provider value={state}>
      <MainDispatchContext.Provider value={dispatch}>
        {children}
      </MainDispatchContext.Provider>
    </MainStateContext.Provider>
  );
}
