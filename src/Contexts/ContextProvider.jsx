import React, { useState, createContext, useContext } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  // variable declarations
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  // function calls and declarations
  // functionality to handle navbar component clicks
  const handleClick = (click) => {
    setIsClicked({ ...initialState, [click]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu, // checking menu visibility statue
        isClicked,
        setIsClicked, // determine which navbar component
        handleClick,
        screenSize,
        setScreenSize,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
