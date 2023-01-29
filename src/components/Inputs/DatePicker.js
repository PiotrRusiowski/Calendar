import React from "react";

const DatePicker = ({ bind }) => {
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor="end-date" className="text-sm font-medium">
        End Date:
      </label>
      <input
        type="date"
        id="end-date"
        className="border border-gray-400 p-2 w-full placeholder-gray-600"
        {...bind}
      />
    </div>
  );
};

export default DatePicker;
