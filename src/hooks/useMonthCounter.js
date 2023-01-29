import { useState } from "react";
import dayjs from "dayjs";

function useMonthCounter() {
  const [currentDate, setDate] = useState(dayjs());

  const addMonth = () => {
    setDate(currentDate.add(1, "month"));
  };

  const subtractMonth = () => {
    setDate(currentDate.subtract(1, "month"));
  };

  return [currentDate, addMonth, subtractMonth];
}

export default useMonthCounter;
