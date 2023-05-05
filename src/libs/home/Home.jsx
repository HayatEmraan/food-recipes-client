import React, { useEffect, useState } from "react";
import banner from "../../assets/banner/banner1.avif";
import banner1 from "../../assets/banner/banner2.avif";
import banner2 from "../../assets/banner/banner3.avif";
import banner3 from "../../assets/banner/banner4.avif";
import { Link } from "react-router-dom";
import { Card, Carousel } from "flowbite-react";
import {
  CalendarIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const Home = () => {
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    fetch("https://food-recipe-web.vercel.app/v2")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="lg:flex flex-row-reverse items-center gap-4">
        <div>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel className="md:w-full lg:w-[600px]">
              <img src={banner} alt="..." />
              <img src={banner1} alt="..." />
              <img src={banner2} alt="..." />
              <img src={banner3} alt="..." />
            </Carousel>
          </div>
        </div>
        <div className="md:px-[2]">
          <h2 className="text-lg text-green-600 font-semibold">WELCOME</h2>
          <p className="text-3xl font-bold mb-8">
            Easy recipes <br />
            for{" "}
            <span className="underline decoration-pink-500/30 text-4xl text-purple-600">
              {" "}
              any occasion
            </span>
          </p>
          <p>
            <span className="text-2xl text-green-600 underline">Welcome</span>{" "}
            to our food recipes website, your go-to destination for delicious
            and easy-to-make recipes that are sure to satisfy your taste buds.{" "}
            <br /> Browse through our collection of breakfast, lunch, dinner,
            and dessert recipes that are perfect for any occasion. From classic
            comfort foods to international cuisines, our recipes are sure to
            excite your palate and bring some variety to your meal plan.
          </p>
          <div className="mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded me-4">
              About Us
            </button>
            <Link to="/blog">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">What's new on our table</h2>
          <p>
            Do you want to see more?{" "}
            <Link to="/blog" className="text-green-600">Show all Blog</Link>
          </p>
        </div>
        <div className="lg:grid grid-cols-3 gap-4 my-8">
          {recipes &&
            recipes.map((item) => {
              return (
                <div key={item.id}>
                  <div className="max-w-lg">
                    <Card>
                      <img
                        className="rounded w-full h-96"
                        src={item.image}
                        alt=""
                      />
                      <div className="flex justify-between">
                        <div className="flex">
                          <UserCircleIcon className="w-6 h-6" />
                          <p className="ml-1">{item.publishedBy.name}</p>
                        </div>
                        <div className="flex">
                          <CalendarIcon className="w-6 h-6" />
                          <p className="ml-1">{item.date}</p>
                        </div>
                      </div>
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex">
                          <HeartIcon className="w-6 h-6" />
                          <p className="ml-1">{item.like}</p>
                        </div>
                        <div>
                          <Link
                            to={`/blog/${item.id}`}
                            className="border px-2 py-1 rounded-lg bg-black text-white font-semibold"
                          >
                            <button>Read More</button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
