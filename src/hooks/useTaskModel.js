import { useState } from "react";

const useAddTaskModel = ({ defaultValue = {} } = {}) => {
  let [name, setName] = useState(defaultValue.name || "");
  let [email, setEmail] = useState(defaultValue.email || "");

  return {
    errors: {
      name: name === "" ? "Please enter name" : undefined,
      email: email === "" ? "Please enter email" : undefined,
    },
    inputProps: {
      name: {
        value: name,
        onChange: (e) => setName(e.target.value),
      },
      email: {
        value: email,
        onChange: (e) => setEmail(e.target.value),
      },
    },
  };
};
export default useAddTaskModel;
