import React, { useState } from "react";
import axios from "axios";

const useRestAPI = () => {
  let [products, setProducts] = useState([]);
  let [change, setChange] = useState(true);

  const BASE_URL = "http://localhost:1337/api/tasks";

  const getAll = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  };

  const remove = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`, { method: "DELETE" });
    return response;
  };
  const add = async (product) => {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({ data: product }),
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    setChange(true);
    return response.json();
  };

  return { getAll, add, remove };
};

export default useRestAPI;
