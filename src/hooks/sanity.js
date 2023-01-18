import sanityClient from "@sanity/client";
const task = {
  id: 5,
  title: "jestem z react",
  date: "20.01.2023",
};
const BASE_URL = "http://localhost:1337/api/tasks";
export default sanityClient({
  projectId: "7vxellwz",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skGvBie8WTdB17mzqWAm2JHttAPo2bFxet1bYfKQIYxqksJo1H8n2DcLyOxS3SKA5FaHkyZSJFoqjsggN16hyaIMYKXdMgEAFL84JEvpVxFGXS1Kij14cmxwusiCbYzqwn6LXeAYuJ7uJvZ0xpgUkLaxxpIAzhNaeQph6z6zHS0wWDuMqsaQ",
  useCdn: true,
});
