import { useContext } from "react";
import { NightModeContext } from "../contexts/night-mode";
import { IconToggleContext } from "../contexts/icon-toggle";
import { Expandable } from "./Expandable";
import { IconSunHigh, IconFlagOff, IconFlagCheck } from "@tabler/icons-react";

export const Toolbar = () => {
  const { isLightMode, setLightMode } = useContext(NightModeContext);
  const { isIconShowing, setIconShowing } = useContext(IconToggleContext);
  const toolbarClasses = `${isLightMode ? "toolbar--light" : "toolbar--dark"}`;

  const activateTheme = () => {
    setLightMode(!isLightMode);
  };

  const activateIconToggle = () => {
    setIconShowing(!isIconShowing);
  };

  return (
    <Expandable>
      <IconSunHigh
        className={toolbarClasses}
        stroke={2}
        height={48}
        width={48}
        style={{ cursor: "pointer" }}
        title="Toggle Dark/Light Mode"
        onClick={activateTheme}
      />
      {isIconShowing ? (
        <IconFlagOff
          className={toolbarClasses}
          stroke={2}
          height={48}
          width={48}
          style={{ cursor: "pointer" }}
          title="Toggle Icons"
          onClick={activateIconToggle}
        />
      ) : (
        <IconFlagCheck
          className={toolbarClasses}
          stroke={2}
          height={48}
          width={48}
          style={{ cursor: "pointer" }}
          title="Toggle Icons"
          onClick={activateIconToggle}
        />
      )}
    </Expandable>
  );
};
