import { useState } from "react";
import LightOff from "/images/light-off.svg";
import LightBlue from "/images/light-blue.svg";
import LightGreen from "/images/light-green.svg";
import LightOrange from "/images/light-orange.svg";
import LightPink from "/images/light-pink.svg";
import LightRed from "/images/light-red.svg";
import LightYellow from "/images/light-yellow.svg";

const lights = [
  LightBlue,
  LightGreen,
  LightOff,
  LightOrange,
  LightPink,
  LightRed,
  LightYellow,
];

export const SingleLight = () => {
  const [isOn, setOn] = useState(true);

  const getRandomIndex = () => {
    return Math.floor(Math.random() * lights.length);
  };

  const randomIndex = getRandomIndex();

  const imageSrc = isOn ? lights[randomIndex] : LightOff;

  const handleToggle = () => {
    setOn(!isOn);
  };

  return <img src={imageSrc} alt="Single light" onClick={handleToggle} />;
};
