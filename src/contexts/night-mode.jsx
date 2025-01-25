import { createContext, useEffect, useState } from "react";
import { useMantineColorScheme } from "@mantine/core";

export const NightModeContext = createContext();

export const NightModeProvider = ({ children }) => {
  const [isLightMode, setLightMode] = useState(false);
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <NightModeContext.Provider
      value={{ isLightMode, setLightMode, toggleColorScheme }}
    >
      {children}
    </NightModeContext.Provider>
  );
};
