import { CalendarIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Card } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogV2 = () => {
  const blog = useLoaderData();
  return (
    <div className="container mx-auto lg:grid grid-cols-3 gap-4 my-3">
      {blog &&
        blog.map((bg) => {
          return (
            <div className="max-w-lg" key={bg.id}>
              <Card imgSrc={bg.image}>
                <div className="flex justify-between">
                  <div className="flex gap-2 ">
                    <UserCircleIcon className="w-6 h-6" />
                    <p>{bg.authorName}</p>
                  </div>
                  <div className="flex gap-2">
                    <CalendarIcon className="w-6 h-6" />
                    <p>{bg.published_date}</p>
                  </div>
                </div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {bg.topic}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {bg.details.length === 250
                    ? bg.details
                    : bg.details.slice(0, 250)}
                </p>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default BlogV2;
