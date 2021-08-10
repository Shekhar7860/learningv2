import { useEffect, useState } from "react";

const FilterFun = () => {
  const [data, setData] = useState("s");

  useEffect(() => {
    setData("Hello world");
  }, []);

  const items = [
    {
      title: "All",
    },
    {
      title: "Travel",
    },
    {
      title: "Architecture",
    },
    {
      title: "Style",
    },
    {
      title: "Sports",
    },
    {
      title: "Food",
    },
    {
      title: "Art",
    },
    {
      title: "Beauty",
    },
    {
      title: "Music",
    },
    {
      title: "Humor",
    },
    {
      title: "Fitness",
    },
    {
      title: "Athlete",
    },
    {
      title: "Celebrity",
    },
    {
      title: "Blogger",
    },
  ];

  return { items, data };
};

export default FilterFun;
