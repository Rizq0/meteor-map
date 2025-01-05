import { useContext } from "react";
import { NightModeContext } from "../contexts/night-mode";
import { Expandable } from "./Expandable";
import { IconSunHigh } from "@tabler/icons-react";

export const Toolbar = () => {
  const { isLightMode, setLightMode } = useContext(NightModeContext);
  const toolbarClasses = `${isLightMode ? "toolbar--light" : "toolbar--dark"}`;

  const activateTheme = () => {
    setLightMode(!isLightMode);
  };

  return (
    <Expandable>
      <IconSunHigh
        className={toolbarClasses}
        stroke={2}
        height={48}
        width={48}
        style={{ cursor: "pointer" }}
        onClick={activateTheme}
      />
    </Expandable>
  );
};
