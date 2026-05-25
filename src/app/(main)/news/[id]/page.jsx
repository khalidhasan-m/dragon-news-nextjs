import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";

export const metadata = {
  title: "Dragon News || Details",
};

const NewsDetails = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  console.log(news);

  return (
    <div className="container mx-auto mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4 my-10">
      <div className="card col-span-9 bg-base-100 shadow-sm border border-gray-200 rounded-none p-6">
        {/* Featured Image */}
        <figure className="mb-6">
          <Image
            src={news.image_url}
            alt="News"
            className="w-full h-auto object-cover"
            width={800}
            height={400}
          />
        </figure>

        {/* Article Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
          {news.title}
        </h1>

        {/* Article Body */}
        <div className="text-gray-600 text-sm leading-relaxed space-y-4 mb-8">
          <p>
            {news.author?.name || "Unknown Author"}, {news.published_at} |{" "}
            {news.total_view} views <IoEyeSharp />|{" "}
            {news.rating?.number || "No rating"} rating
          </p>
          <p>{news.description}</p>
          <p>{news.details}</p>
        </div>

        {/* Action Button */}
        <div className="card-actions">
          <Link href={`/category/${news.category_id}`}>
            <button className="btn btn-error text-white rounded-none flex items-center gap-2">
              <FaArrowLeft />
              All news in this category
            </button>
          </Link>
        </div>
      </div>
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsDetails;
