import { createContext, useState } from "react";

export const IconToggleContext = createContext();

export const IconToggleProvider = ({ children }) => {
  const [isIconShowing, setIconShowing] = useState(true);

  return (
    <IconToggleContext.Provider value={{ isIconShowing, setIconShowing }}>
      {children}
    </IconToggleContext.Provider>
  );
};
