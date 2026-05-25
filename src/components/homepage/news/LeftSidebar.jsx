import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">All Categories</h2>
      <ul className="mt-6 flex flex-col gap-3">
        {categories.data.news_category.map((category) => (
          <li
            className={`rounded-md font-bold text-left p-1 text-md ${activeId === category.category_id && "bg-gray-200"}`}
            key={category.category_id}
          >
            <Link
              href={`/category/${category.category_id}`}
              className="block p-2"
            >
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
