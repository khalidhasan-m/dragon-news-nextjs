import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

export const metadata = {
  title: "Dragon News || Home",
};

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "paramsRes");

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6 mb-10">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>
      <div className="col-span-6">
        <h2 className="font-bold text-lg">Dragon News Home</h2>
        {news.data.length > 0 ? (
          news.data.map((n) => {
            return <NewsCard key={n._id} news={n} />;
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <h2 className="text-4xl font-bold text-[#403F3F]">No News Found</h2>

            <p className="mt-4 max-w-md text-gray-500">
              We couldn&apos;t find any news articles matching your request.
              Please try another category or check back later.
            </p>
          </div>
        )}
      </div>
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
