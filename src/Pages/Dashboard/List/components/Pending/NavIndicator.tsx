import { useState } from "react";
import { FloatingIndicator, UnstyledButton } from "@mantine/core";
import classes from "./NavIndicator.module.css";

// Define data as a string
const dataAsString = `["Packages", "Drivers", "Cars"]`;

interface FunProps {
  setNavIndicate: (index: string) => void;
}

const NavIndicator = ({ setNavIndicate }: FunProps) => {
  // Parse the string to retrieve the original array
  const data = JSON.parse(dataAsString);

  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const [active, setActive] = useState(0);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const handleClick = (index: number, item: string) => {
    setActive(index);

    setNavIndicate(item);
  };

  const controls = data.map((item: string, index: number) => (
    <UnstyledButton
      key={item}
      className={classes.control}
      ref={setControlRef(index)}
      onClick={() => handleClick(index, item)}
      mod={{ active: active === index }}
    >
      <span className={classes.controlLabel}>{item}</span>
    </UnstyledButton>
  ));

  return (
    <div className={`${classes.root} self-end`} ref={setRootRef}>
      {controls}

      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />
    </div>
  );
};

export default NavIndicator;
