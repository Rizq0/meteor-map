import { createContext, useEffect, useState } from "react";
import { useMantineColorScheme } from "@mantine/core";

export const NightModeContext = createContext();

export const NightModeProvider = ({ children }) => {
  const [isLightMode, setLightMode] = useState(false);
  const { toggleColorScheme } = useMantineColorScheme();

  useEffect(() => {
    toggleColorScheme();
  }, [isLightMode]);

  return (
    <NightModeContext.Provider value={{ isLightMode, setLightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};
