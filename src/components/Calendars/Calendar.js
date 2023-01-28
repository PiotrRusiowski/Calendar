import dayjs from "dayjs";
import "dayjs/locale/pl";
import isToday from "dayjs/plugin/isToday";
import useMonthCounter from "../../hooks/useMonthCounter";
import CalendarView from "../../views/CalendarView";

const Calendar = () => {
  dayjs.extend(isToday);
  useMonthCounter();
  const [currentDate, addMonth, subtractMonth] = useMonthCounter();
  let currentMonthCount = -dayjs(
    new Date(currentDate.year(), currentDate.month(), 0)
  ).day();
  const days = new Array(42).fill(0).map(() => {
    currentMonthCount++;
    return {
      date: dayjs(
        new Date(currentDate.year(), currentDate.month(), currentMonthCount)
      ).format("YYYY-MM-DD"),
      isSelected: false,
    };
  });
  const meetings = [
    {
      id: 1,
      date: "January 10th, 2022",
      time: "5:00 PM",
      datetime: "2022-01-10T17:00",
      name: "Leslie Alexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      location: "Starbucks",
    },
  ];

  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <CalendarView
      addMonth={addMonth}
      currentDate={currentDate}
      subtractMonth={subtractMonth}
      classNames={classNames}
      days={days}
      meetings={meetings}
    />
  );
};
export default Calendar;
