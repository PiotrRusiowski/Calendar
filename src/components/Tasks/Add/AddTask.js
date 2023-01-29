import React, { useEffect, useState } from "react";
import Text from "../../Inputs/Text";
import { useInput } from "../../../hooks/useInput";
import DatePicker from "../../Inputs/DatePicker";
import useMonthCounter from "../../../hooks/useMonthCounter";
const AddTask = (props) => {
  const [currentDate] = useMonthCounter();
  const { value: title, touched: touchedTitle, bind: bindTitle } = useInput("");
  const {
    value: description,
    touched: touchedDescription,
    bind: bindDescription,
  } = useInput("");
  const { value: startDate, bind: bindStartDate } = useInput(
    currentDate.format("YYYY-MM-DD")
  );
  const { value: endDate, bind: bindEndDate } = useInput(
    currentDate.format("YYYY-MM-DD")
  );

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
      title,
      content: description,
    };

    props.createTask(task);
  };
  const isValid = () => Object.values(error).every((el) => el);
  return (
    <div>
      <form className="bg-white p-6 rounded-lg" onSubmit={handleSubmit}>
        <Text
          touchedFirstTime={touchedTitle}
          bind={bindTitle}
          error={error.title}
          placeholder={"Add task"}
        />
        <Text
          placeholder={"description"}
          touchedFirstTime={touchedDescription}
          bind={bindDescription}
          error={error.description}
        />
        <DatePicker bind={bindStartDate} />
        <DatePicker bind={bindStartDate} />
        <button
          className="bg-blue-500 text-white mt-4 p-2 rounded hover:bg-blue-400"
          disabled={!isValid()}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default AddTask;
