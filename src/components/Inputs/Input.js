import React, { useState } from "react";

const Input = ({ bind, error, touchedFirstTime, label }) => {
  const [validate, setValidate] = useState(false);
  return (
    <div className="flex flex-col mt-4">
      {label && (
        <label htmlFor="end-date" className="text-sm font-medium">
          {`${label}:`}
        </label>
      )}

      <input
        className="border border-gray-400 p-2 w-full placeholder-gray-600"
        {...bind}
        onBlur={() => setValidate(true)}
      />

      <div>
        {validate
          ? !error &&
            touchedFirstTime && (
              <>
                <label className="text-danger">First name error</label>
              </>
            )
          : ""}
      </div>
    </div>
  );
};

export default Input;
