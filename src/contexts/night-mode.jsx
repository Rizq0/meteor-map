import { createContext, useEffect, useState } from "react";

export const NightModeContext = createContext();

export const NightModeProvider = ({ children }) => {
  const [isLightMode, setLightMode] = useState(false);
  const { toggleColorScheme } = useMantineTheme();

  useEffect(() => {
    toggleColorScheme();
  }, [isLightMode]);

  return (
    <NightModeContext.Provider value={{ isLightMode, setLightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};
