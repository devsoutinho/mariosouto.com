import React from "react";

const DarkModeControlContext = React.createContext({
  isDarkMode: undefined,
  toggleDarkMode: () => {},
});

export const DarkModeControlProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = React.useState(undefined);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <DarkModeControlContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeControlContext.Provider>
  );
}

export const useDarkModeControl = () => React.useContext(DarkModeControlContext);