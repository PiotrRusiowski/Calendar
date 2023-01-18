const postData = async () => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({ data: task }),
    mode: "cors",
    headers: {
      Authorization: "",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return response.json();
};
postData().then((data) => console.log(data));
