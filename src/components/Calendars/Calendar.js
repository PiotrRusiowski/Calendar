import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import isToday from "dayjs/plugin/isToday";

const Calendar = () => {
  //dayjs.locale("pl");
  const [actuallyDate, setActuallyDate] = useState(dayjs());
  const [lastDayOfTheMonth, setLastDayOfTheMonth] = useState(
    dayjs(new Date(dayjs().year(), dayjs().month(), 0))
  );
  dayjs.extend(isToday);

  console.log(actuallyDate);
  console.log(actuallyDate.add(1, "month"));
  let currentMonthCount = 0 - dayjs(lastDayOfTheMonth.day());

  const days = new Array(42).fill(0).map(() => {
    currentMonthCount++;
    return {
      date: dayjs(new Date(2023, 0, currentMonthCount)).format("YYYY-MM-DD"),
      isSelected: false,
    };
  });
  console.log(dayjs("2023-01-01").isSame(days[13].date, "month"));

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
    // More meetings...
  ];
  const useCalendarsServiceSubtract = () => {
    console.log(actuallyDate.month(), actuallyDate.year());
    return setActuallyDate(actuallyDate.subtract(1, "month"));
  };
  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">Upcoming meetings</h2>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div className="flex items-center text-gray-900">
            <button
              onClick={useCalendarsServiceSubtract}
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex-auto font-semibold">
              {actuallyDate.format("MMMM")}
            </div>
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            {days.map((day, dayIdx) => (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  "py-1.5 hover:bg-gray-100 focus:z-10",
                  dayjs().isSame(day.date, "month") ? "bg-white" : "bg-gray-50",
                  (day.isSelected || dayjs(day.date).isToday()) &&
                    "font-semibold",
                  day.isSelected && "text-white",
                  !day.isSelected &&
                    dayjs().isSame(day.date, "month") &&
                    !dayjs(day.date).isToday() &&
                    "text-gray-900",
                  !day.isSelected &&
                    !dayjs().isSame(day.date, "month") &&
                    !dayjs(day.date).isToday() &&
                    "text-gray-400",
                  dayjs(day.date).isToday() &&
                    !day.isSelected &&
                    "text-indigo-600",
                  dayIdx === 0 && "rounded-tl-lg",
                  dayIdx === 6 && "rounded-tr-lg",
                  dayIdx === days.length - 7 && "rounded-bl-lg",
                  dayIdx === days.length - 1 && "rounded-br-lg"
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    "mx-auto flex h-7 w-7 items-center justify-center rounded-full",
                    day.isSelected &&
                      dayjs(day.date).isToday() &&
                      "bg-indigo-600",
                    day.isSelected &&
                      !dayjs(day.date).isToday() &&
                      "bg-gray-900"
                  )}
                >
                  {day.date.split("-").pop().replace(/^0/, "")}
                </time>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="mt-8 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add event
          </button>
        </div>
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {meetings.map((meeting) => (
            <li
              key={meeting.id}
              className="relative flex space-x-6 py-6 xl:static"
            >
              <img
                src={meeting.imageUrl}
                alt=""
                className="h-14 w-14 flex-none rounded-full"
              />
              <div className="flex-auto">
                <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
                  {meeting.name}
                </h3>
                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                  <div className="flex items-start space-x-3">
                    <dt className="mt-0.5">
                      <span className="sr-only">Date</span>
                      <CalendarIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <time dateTime={meeting.datetime}>
                        {meeting.date} at {meeting.time}
                      </time>
                    </dd>
                  </div>
                  <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                    <dt className="mt-0.5">
                      <span className="sr-only">Location</span>
                      <MapPinIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>{meeting.location}</dd>
                  </div>
                </dl>
              </div>
              <Menu
                as="div"
                className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center"
              >
                <div>
                  <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisHorizontalIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="src/components/Calendars/Calendar#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="src/components/Calendars/Calendar#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Cancel
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Calendar;
