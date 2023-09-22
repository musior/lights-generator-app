import { Text } from "./Text";
import { IconAdd } from "./icons/IconAdd";
import { IconMinus } from "./icons/IconMinus";

import styles from "./Counter.module.css";
import { useState } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className={styles.wrapper}>
      <Text>
        {count} {props.text}
      </Text>
      <nav>
        <IconMinus onClick={handleDecrement} />
        <IconAdd onClick={handleIncrement} />
      </nav>
    </div>
  );
};
