import React, { useContext, useState } from "react";

const MyComponent = ({ error, touchedFirstTime, bind, placeholder }) => {
  const [validate, setValidate] = useState(false);
  return (
    <>
      <div className="flex flex-col mt-4">
        <input
          type="text"
          className="border border-gray-400 p-2 w-full placeholder-gray-600"
          {...bind}
          placeholder={placeholder}
          onBlur={() => setValidate(true)}
        />
      </div>
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
    </>
  );
};

export default MyComponent;
