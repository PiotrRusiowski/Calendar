import React from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const nowDate = dayjs().daysInMonth();
  const lastDayMonth = dayjs().endOf("month").format("DD");
  const firstDayOfMonth = dayjs().startOf("month");
  console.log("test", nowDate);
  console.log("first", firstDayOfMonth.day());
  console.log("last", Number(lastDayMonth));
  const monthDays = () =>
    new Array(+lastDayMonth).fill(0).map((_, idx) => dayjs().date(idx + 1));
  console.log(monthDays());
  for (let i = 0; i < firstDayOfMonth.day(); i++) {
    console.log("ttt", firstDayOfMonth.day(i));
  }
  return <div></div>;
};

export default Calendar;
