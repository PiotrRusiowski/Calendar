import React, { useEffect, useState } from "react";
import { useInput } from "../../../hooks/useInput";
import Input from "../../Inputs/Input";
import useMonthCounter from "../../../hooks/useMonthCounter";
import dayjs from "dayjs";
const AddTask = (props) => {
  const [currentDate] = useMonthCounter();
  const {
    value: title,
    touched: touchedTitle,
    bind: bindTitle,
  } = useInput({ type: "text", placeholder: "Title..." });

  const {
    value: description,
    touched: touchedDescription,
    bind: bindDescription,
  } = useInput({ type: "text", placeholder: "Description..." });

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
    initialValue: dayjs().format("HH:mm"),
    id: "start-time",
    type: "time",
  });
  const { value: endTime, bind: bindEndTime } = useInput({
    initialValue: dayjs().format("HH:mm"),
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
  const validateTextInput = (value) => value.length > 3;
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      title,
      content: description,
      startDate: `${startDate} ${startTime}`,
      endDate: `${endDate} ${endTime}`,
    };
    props.createTask(task);
  };
  const isValid = () => Object.values(error).every((el) => el);
  return (
    <div>
      <form className="bg-white p-6 rounded-lg" onSubmit={handleSubmit}>
        <Input
          touchedFirstTime={touchedTitle}
          bind={bindTitle}
          error={error.title}
        />
        <Input bind={bindDescription} />
        <div className={"flex flex-row items-end"}>
          <Input bind={bindStartDate} label={"Start date"} />
          <Input bind={bindStartTime} />
        </div>
        <div className={"flex flex-row items-end"}>
          <Input bind={bindEndDate} label={"End date"} />
          <Input bind={bindEndTime} />
        </div>

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
