import React from "react";

export const tasks = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return [...action.tasks];
    default:
      return state;
  }
};
