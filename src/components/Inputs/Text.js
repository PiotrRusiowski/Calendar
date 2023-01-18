import React, { useContext, useState } from "react";

const MyComponent = ({ error, touchedFirstTime, bind }) => {
  const [validate, setValidate] = useState(false);
  return (
    <div className="form-group">
      <div>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          {...bind}
          onBlur={() => setValidate(true)}
        />
      </div>
      <div>
        <p>{`${error}${touchedFirstTime}`}</p>
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

export default MyComponent;
