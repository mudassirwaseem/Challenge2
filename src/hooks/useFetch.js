import { useEffect, useState } from "react";

const useFetch = ({ url, category }) => {
  const [data, setData] = useState(null);
  console.log(url, "gggg");
  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(url);
      const dataAPI = await rawData.json();
      console.log(dataAPI, "api");
      setData(
        dataAPI.entries.filter((element) => element.programType == category)
      );
    };
    fetchData();
  }, [url, category]);
  return { data };
};

export default useFetch;
