import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  return {
    value,
    setValue,
    touched,
    setTouched,
    reset: () => setValue(""),

    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
        setTouched(true);
      },
    },
  };
};
