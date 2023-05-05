import { BookOpenIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blog = useLoaderData();
  const [bookMark, setBookmark] = useState(false);
  return (
    <div className="container mx-auto">
      <div>
        <img className="w-full h-64 rounded-md" src={blog.image} alt="" />
        <div className="flex justify-between mt-3">
          <div>
            <p>{blog.publishedBy.name}</p>
            <p>{blog.date}</p>
          </div>
          <div>
            <button onClick={() => setBookmark(true)} disabled={bookMark}>
              {bookMark ? (
                <BookmarkIcon className="w-8 h-8" />
              ) : (
                <BookOpenIcon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
        <p className="my-8 text-lg">{blog.description}</p>
        {blog.features &&
          blog.features.map((feature) => {
            return (
              <li className="my-3" key={feature}>
                {feature}
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
