import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="max-w-[1320px] mx-auto mt-[130px]">
      <h2 className="text-[48px] font-bold text-center">Job Category List</h2>
      <p className="text-center leading-[26px] text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-4 mt-8 gap-6">
        {category.map((cat, idx) => (
          <Category key={idx} cat={cat}></Category>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
