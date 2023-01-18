import { useEffect, useState } from "react";

const useTaskModel = ({ defaultValue = {} } = {}) => {
  let [name, setName] = useState(defaultValue.name || "");
  let [description, setDescription] = useState(defaultValue.description || "");
  let [isImportant, setImportant] = useState(defaultValue.isImportant || "");
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    hobbies: false,
  });
  useEffect(() => {
    setError({
      firstName: validateTextInput(name),
      lastName: validateTextInput(description),
    });
  }, [name, description]);
  const validateTextInput = (value) => value.length > 4;
  return {
    errors: {
      name: name === "" ? "Please enter name" : undefined,
      description: description === "" ? "Please enter email" : undefined,
    },
    inputProps: {
      name: {
        value: name,
        onChange: (e) => setName(e.target.value),
      },
      description: {
        value: description,
        onChange: (e) => setDescription(e.target.value),
      },
      isImportant: {
        value: isImportant,
        onChange: (e) => setImportant(e.target.value),
      },
    },
  };
};
export default useTaskModel;
