import React, { useEffect, useState } from "react";
import Text from "../../Inputs/Text";
import { useInput } from "../../../hooks/useInput";
import DatePicker from "../../Inputs/DatePicker";
import useMonthCounter from "../../../hooks/useMonthCounter";
const AddTask = (props) => {
  const [currentDate] = useMonthCounter();
  const {
    value: title,
    touched: touchedTitle,
    bind: bindTitle,
  } = useInput({ type: "text", placeholder: "Title" });

  const {
    value: description,
    touched: touchedDescription,
    bind: bindDescription,
  } = useInput({ type: "text", placeholder: "Description" });

  const { value: startDate, bind: bindStartDate } = useInput({
    initialValue: currentDate.format("YYYY-MM-DD"),
    id: "start-date",
    type: "date",
  });

  const { value: endDate, bind: bindEndDate } = useInput({
    initialValue: currentDate.format("YYYY-MM-DD"),
    id: "end-date",
    type: "date",
  });

  const { value: startTime, bind: bindStartTime } = useInput({
    initialValue: "20:12",
    id: "start-time",
    type: "time",
  });

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
        {/*<Text*/}
        {/*  touchedFirstTime={touchedTitle}*/}
        {/*  bind={bindTitle}*/}
        {/*  error={error.title}*/}
        {/*/>*/}
        {/*<Text*/}
        {/*  touchedFirstTime={touchedDescription}*/}
        {/*  bind={bindDescription}*/}
        {/*  error={error.description}*/}
        {/*/>*/}
        <DatePicker bind={bindStartDate} />
        <DatePicker bind={bindEndDate} />
        <DatePicker bind={bindStartTime} />
        <DatePicker
          bind={bindDescription}
          error={error.description}
          touchedFirstTime={touchedDescription}
        />
        <DatePicker
          touchedFirstTime={touchedTitle}
          bind={bindTitle}
          error={error.title}
        />
        {/*<div className="flex flex-col mt-4">*/}
        {/*  <label htmlFor="time" className="text-sm font-medium">*/}
        {/*    Time:*/}
        {/*  </label>*/}
        {/*  <input*/}
        {/*    type="time"*/}
        {/*    id="time"*/}
        {/*    className="border border-gray-400 p-2 rounded"*/}
        {/*    // value={selectedTime}*/}
        {/*    // onChange={(e) => setSelectedTime(e.target.value)}*/}
        {/*  />*/}
        {/*</div>*/}

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
