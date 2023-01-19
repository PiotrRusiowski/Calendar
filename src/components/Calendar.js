import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/pl";
// ustawic na pl-Pl

const Calendar = () => {
  dayjs.locale("pl");

  const nowDate = dayjs().daysInMonth();
  const lastDayMonth = dayjs().endOf("month").endOf("week");
  const firstDayOfMonth = dayjs().startOf("month").startOf("week");
  const daysDiff = lastDayMonth.diff(firstDayOfMonth, "days");

  console.log("test", nowDate);
  console.log("first", firstDayOfMonth.day());
  console.log("last", Number(lastDayMonth));
  // const monthDays = () =>
  //   new Array(+lastDayMonth).fill(0).map((_, idx) => dayjs().date(idx + 1));
  //console.log(monthDays());
  for (let i = 0; i <= daysDiff; i++) {
    console.log("ttt", firstDayOfMonth.add(i, "days").format());
  }
  return <div>

    <div>
      <h2 class="text-lg font-semibold text-gray-900">Upcoming meetings</h2>
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div class="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div class="flex items-center text-gray-900">
            <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Previous month</span>

              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="flex-auto font-semibold">January</div>
            <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Next month</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            <!-- Always include: "py-1.5 hover:bg-gray-100 focus:z-10" Is current month, include: "bg-white" Is not current month, include: "bg-gray-50" Is selected or is today, include: "font-semibold" Is selected, include: "text-white" Is not selected, is not today, and is current month, include: "text-gray-900" Is not selected, is not today, and is not current month, include: "text-gray-400" Is today and is not selected, include: "text-indigo-600" Top left day, include: "rounded-tl-lg" Top right day, include: "rounded-tr-lg" Bottom left day, include: "rounded-bl-lg" Bottom right day, include: "rounded-br-lg" -->
            <button type="button" class="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <!-- Always include: "mx-auto flex h-7 w-7 items-center justify-center rounded-full" Is selected and is today, include: "bg-indigo-600" Is selected and is not today, include: "bg-gray-900" -->
              <time datetime="2021-12-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
            </button>
            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time datetime="2021-12-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
            </button>
            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time datetime="2021-12-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
            </button>
            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time datetime="2021-12-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
            </button>
            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time datetime="2021-12-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
            </button>
            <button type="button" class="rounded-tr-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-07" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">7</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-08" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">8</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-09" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">9</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-10" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">10</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-11" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">11</time>
            </button>
            <button type="button" class="bg-white py-1.5 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-12" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">12</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-13" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">13</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-14" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">14</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-15" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">15</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-16" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">16</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-17" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">17</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-18" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">18</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-19" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">19</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-20" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">20</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-21" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">21</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-22" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 font-semibold text-white">22</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-23" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">23</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-24" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">24</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-25" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">25</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-26" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">26</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
            </button>
            <button type="button" class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
            </button>
            <button type="button" class="rounded-bl-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-01-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
            </button>
            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-02-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
            </button>
            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-02-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
            </button>
            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-02-03" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
            </button>
            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-02-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
            </button>
            <button type="button" class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-02-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
            </button>
            <button type="button" class="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time datetime="2022-02-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
            </button>
          </div>
          <button type="button" class="mt-8 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add event</button>
        </div>
        <ol class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          <li class="relative flex space-x-6 py-6 xl:static">
              <div class="flex-auto">
                <h3 class="pr-10 font-semibold text-gray-900 xl:pr-0">Leslie Alexander</h3>
                <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                  <div class="flex items-start space-x-3">
                    <dt class="mt-0.5">
                      <span class="sr-only">Date</span>
                      <!-- Heroicon name: mini/calendar -->
                      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                      </svg>
                    </dt>
                    <dd><time datetime="2022-01-10T17:00">January 10th, 2022 at 5:00 PM</time></dd>
                  </div>
                  <div class="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                    <dt class="mt-0.5">
                      <span class="sr-only">Location</span>
                      <!-- Heroicon name: mini/map-pin -->
                      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
                      </svg>
                    </dt>
                    <dd>Starbucks</dd>
                  </div>
                </dl>
              </div>
              <div class="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center">
                <div>
                  <button type="button" class="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open options</span>
                    <!-- Heroicon name: mini/ellipsis-horizontal -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                    </svg>
                  </button>
                </div>
                <!-- Dropdown menu, show/hide based on menu state. Entering: "transition ease-out duration-100" From: "transform opacity-0 scale-95" To: "transform opacity-100 scale-100" Leaving: "transition ease-in duration-75" From: "transform opacity-100 scale-100" To: "transform opacity-0 scale-95" -->
                <div class="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                  <div class="py-1" role="none">
                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0">Edit</a>
                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1">Cancel</a>
                  </div>
                </div>
              </div>
          </li>
          <!-- More meetings... -->
        </ol>
      </div>
    </div>
  </div>;
};

export default Calendar;
