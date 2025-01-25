import { useContext } from "react";
import { NightModeContext } from "../contexts/night-mode";
import { IconToggleContext } from "../contexts/icon-toggle";
import { Expandable } from "./Expandable";
import {
  IconSunHigh,
  IconFlagOff,
  IconFlagCheck,
  IconMoonStars,
} from "@tabler/icons-react";

export const Toolbar = () => {
  const { isLightMode, setLightMode, toggleColorScheme } =
    useContext(NightModeContext);
  const { isIconShowing, setIconShowing } = useContext(IconToggleContext);
  const toolbarClasses = `${isLightMode ? "toolbar--light" : "toolbar--dark"}`;

  const activateTheme = () => {
    setLightMode(!isLightMode);
    toggleColorScheme();
  };

  const activateIconToggle = () => {
    setIconShowing(!isIconShowing);
  };

  return (
    <Expandable>
      {isLightMode ? (
        <IconMoonStars
          className={toolbarClasses}
          stroke={2}
          height={48}
          width={48}
          style={{ cursor: "pointer" }}
          title="Toggle Dark/Light Mode"
          onClick={activateTheme}
        />
      ) : (
        <IconSunHigh
          className={toolbarClasses}
          stroke={2}
          height={48}
          width={48}
          style={{ cursor: "pointer" }}
          title="Toggle Dark/Light Mode"
          onClick={activateTheme}
        />
      )}
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
