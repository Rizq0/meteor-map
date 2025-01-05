import { useState, useContext } from "react";
import { IconSettingsSpark } from "@tabler/icons-react";
import { NightModeContext } from "../contexts/night-mode";

export const Expandable = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLightMode } = useContext(NightModeContext);
  const toolbarClasses = `${isLightMode ? "toolbar--light" : "toolbar--dark"}`;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toolbar">
      <IconSettingsSpark
        stroke={2}
        width={48}
        height={48}
        onClick={toggleOpen}
        style={{ cursor: "pointer" }}
        className={toolbarClasses}
      />
      {isOpen && children}
    </div>
  );
};
