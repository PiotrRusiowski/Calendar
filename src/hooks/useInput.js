import { useState } from "react";

export const useInput = ({
  initialValue = "",
  id = "",
  type = "",
  placeholder = "",
}) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  return {
    value,
    setValue,
    touched,
    setTouched,
    reset: () => setValue(""),

    bind: {
      id,
      type,
      value,
      placeholder,
      onChange: (event) => {
        setValue(event.target.value);
        setTouched(true);
      },
    },
  };
};
