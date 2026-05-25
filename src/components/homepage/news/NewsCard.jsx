import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const NewsCard = ({ news }) => {
  // Placeholder image URL - replace this with your actual image path
  //   const imageUrl = "/path-to-your-image.jpg";

  return (
    <div className="card bg-base-100 shadow-xl border mt-6 border-gray-200 rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <Image
                src={news.author.img}
                alt="Author Avatar"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm">{news.author?.name}</h3>
            <p className="text-xs text-gray-500">
              {news.author?.published_date}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-600">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pb-2">
        <h2 className="text-lg font-bold leading-tight">{news.title}</h2>
      </div>

      {/* Image Placeholder */}
      <figure className="px-4 py-2">
        <Image
          src={news.image_url}
          alt="News Image"
          width={400}
          height={400}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Content Section */}
      <div className="p-4 pt-2">
        <p className="text-sm text-gray-500 mb-4 line-clamp-3">
          {news.details}
        </p>
        <Link href={`/news/${news._id}`}>
          <button className="text-orange-500 font-semibold btn hover:underline">
            Read More
          </button>
        </Link>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
        <div className="flex items-center text-orange-500 gap-0.5">
          <FaStar size={14} />
          <span className="text-gray-600 ml-1 text-sm">
            {news.rating.number}
          </span>
        </div>
        <div className="text-gray-500 text-sm flex items-center gap-1">
          <IoEyeSharp /> {news.total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
