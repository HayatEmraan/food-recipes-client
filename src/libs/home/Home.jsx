import React, { useEffect, useState } from "react";
import banner from "../../assets/banner/banner1.avif";
import banner1 from "../../assets/banner/banner2.avif";
import banner2 from "../../assets/banner/banner3.avif";
import banner3 from "../../assets/banner/banner4.avif";
import { Link } from "react-router-dom";
import { Card, Carousel } from "flowbite-react";
import { BeakerIcon, CalendarIcon, HeartIcon, UserCircleIcon } from "@heroicons/react/24/solid";


const Home = () => {
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/v2")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-row-reverse items-center gap-4">
        <div>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel style={{ width: "600px" }}>
              <img src={banner} alt="..." />
              <img src={banner1} alt="..." />
              <img src={banner2} alt="..." />
              <img src={banner3} alt="..." />
            </Carousel>
          </div>
        </div>
        <div>
          <h2 className="text-lg text-green-600 font-semibold">WELCOME</h2>
          <p className="text-3xl font-bold mb-8">
            Easy recipes <br /> for any occasion
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            impedit libero aliquid tempore sequi voluptates excepturi amet odit?
            Nihil voluptates maiores dicta, neque eveniet qui quibusdam placeat
            inventore officiis doloremque? lorem50
          </p>
          <div className="mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded me-4">
              About Us
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Show All Recipes
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">What's new on our table</h2>
          <p>
            Do you want to see more?{" "}
            <Link className="text-green-600">Show all receipes</Link>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 my-8">
          {recipes &&
            recipes.map((item) => {
              console.log(item);
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
                          <Link className="border px-2 py-1 rounded-lg bg-black text-white font-semibold"><button>Read More</button></Link>
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
