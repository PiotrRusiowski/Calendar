import React, { useEffect, useState } from "react";
import Text from "../Inputs/Text";
import { useInput } from "../../hooks/useInput";
import useRestApi from "../../hooks/useRestApi";
const AddTask = () => {
  const api = useRestApi();

  const {
    value: title,
    touched: touchedTitle,
    bind: bindTitle,
    reset: resetTitle,
  } = useInput("");
  const {
    value: description,
    touched: touchedDescription,
    bind: bindDescription,
    reset: resetSurName,
  } = useInput("");
  const [error, setError] = useState({
    title: false,
    description: false,
  });

  useEffect(() => {
    return () => {
      setError({
        title: validateTextInput(title),
        description: validateTextInput(description),
      });
    };
  }, [title, description]);
  const validateTextInput = (value) => value.length > 4;
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: 9,
      title,
      content: description,
    };
    // const addProduct = async () => console.log(await add(task));
    // addProduct();
  };
  const isValid = () => Object.values(error).every((el) => el);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Text
          touchedFirstTime={touchedTitle}
          bind={bindTitle}
          error={error.title}
        />
        <Text
          touchedFirstTime={touchedDescription}
          bind={bindDescription}
          error={error.description}
        />

        <button disabled={!isValid()} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default AddTask;
