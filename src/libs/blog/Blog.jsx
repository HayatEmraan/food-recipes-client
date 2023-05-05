import {
  BookOpenIcon,
  BookmarkIcon,
  CalendarIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import More from "../more/More";

const Blog = () => {
  const blog = useLoaderData();
  const { id } = useParams();
  const [bio, setBio] = useState(null);
  console.log(bio);
  useEffect(() => {
    fetch(`http://localhost:5000/v4/${id}`)
      .then((res) => res.json())
      .then((data) => setBio(data));
  }, []);
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
      <div className="mt-12 mb-4">
        <Card>
          <div className="flex gap-4">
            <div>
              <img
                className="h-40 rounded-lg"
                src={bio && bio.picture}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">{bio && bio.name} Details</h3>
              <p>{bio && bio.description}</p>
              <div className="mt-3">
                <h3 className="text-lg font-semibold">
                  No. Recipes :- {bio && bio.num_recipes}
                </h3>
                <h2 className="text-lg font-semibold text-purple-500 mt-2">
                  Experience
                </h2>
                <h3 className="text-lg font-semibold">
                  Year Experience:- {bio && bio.years_experience}
                </h3>
              </div>
            </div>
          </div>
          <div>
            <hr className="border-2 w-96 mx-auto mt-2" />
            <div className="mt-3">
              <h2 className="text-lg font-bold text-gray-600">
                More From {bio && bio.name}
              </h2>
              <div className="grid grid-cols-3 gap-4 my-8">
                <More blog={blog} />
                <More blog={blog} />
                <More blog={blog} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
