import { useState } from "react";

export const useFloatingLabel = (value: string) => {
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 ? true : undefined;

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return { floating, onFocus, onBlur };
};
