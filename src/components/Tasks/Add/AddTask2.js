import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pl";

const Calendar = () => {
  const dayjs = require("dayjs");
  dayjs.locale("pl");
  const date = dayjs();
  const firstDayOfMonth = date.startOf("month").format("dddd");
  console.log(firstDayOfMonth);

  return (
    <>
      <form className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-medium mb-4">Dodaj nowe zadanie</h2>
        <div className="mb-4">
          <input
            className="border border-gray-400 p-2 w-full placeholder-gray-600"
            type="text"
            id="task-name"
            name="task-name"
            placeholder="Nazwa zadania"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="border border-gray-400 p-2 w-full placeholder-gray-600"
            id="task-description"
            name="task-description"
            placeholder="Opis zadania"
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            className="border border-gray-400 p-2 w-full placeholder-gray-600"
            type="date"
            id="due-date"
            name="due-date"
            placeholder="Data ważności"
          />
        </div>
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
          Dodaj zadanie
        </button>
      </form>
    </>
  );
};

export default Calendar;
//
// const year = dayjs().year();
// const month = dayjs().month();
// const daysInMonth = dayjs().daysInMonth();
// const lastDayMonth = dayjs(new Date(2023, 0)).startOf("month").endOf("week");
// const firstDayOfMonth = dayjs(new Date(2023, 3)).day();
// const firstDayOfMonth2 = dayjs().startOf("month");
// const firstDayOfMonthhh = dayjs();
//
// const daysDiff = lastDayMonth.diff(firstDayOfMonth, "days");
// console.log(firstDayOfMonth);
// ///weekday
//
// // const monthDays = () =>
// //   new Array(+lastDayMonth).fill(0).map((_, idx) => dayjs().date(idx + 1));
// //console.log(monthDays());
// let daysCounter = firstDayOfMonth2.day() - 7;
//
// //console.log(daysMonthMatrix);
// const matrixArray = new Array(42).fill(0).map((el) => {
//   daysCounter++;
//   return (el = firstDayOfMonth2.day(daysCounter));
// });
// // console.log(matrixArray);
