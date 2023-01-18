import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "sqqzspaai3js",
    accessToken: "8Jlo6b8wCbx0SBy8iBw6B1ULHSZ4-lS7_87Wka-30tg",
    host: "preview.contentful.com",
  });

  const getTasks = async () => {
    try {
      return await client.getEntries();
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getTasks };
};

export default useContentful;
