import { CSSProperties, useState } from "react";
import "./ToggleSwitch.css";

interface IToggleSwitch {
  onToggle: () => void;
  isChecked?: boolean;
  onColor?: string;
  offColor?: string;
  handleColor?: string;
  size?: string;
  speed?: string;
}

export default function ToggleSwitch({
  onToggle,
  isChecked,
  onColor,
  offColor,
  handleColor,
  size,
  speed,
}: IToggleSwitch) {
  const [state, setState] = useState(false);

  const handleToggle = () => {
    setState(!state);
    onToggle();
  };

  return (
    <button
      onClick={handleToggle}
      className={`uz-piu-toggle ${
        (isChecked && "uz-piu-toggle-on") || (state && "uz-piu-toggle-on")
      }`}
      style={
        {
          backgroundColor: state ? onColor : offColor,
          "--speed": speed,
          "--size": size || "80px",
          "--handleColor": handleColor,
        } as CSSProperties
      }
    ></button>
  );
}
