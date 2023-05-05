import { CalendarIcon, HeartIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Card } from 'flowbite-react';
import React from 'react';

const More = (props) => {
    const { name, description, image, date, like, publishedBy } = props.blog;
    return (
      <div>
          <div className="max-w-lg">
            <Card>
              <img className="rounded w-full h-96" src={image} alt="" />
              <div className="flex justify-between">
                <div className="flex">
                  <UserCircleIcon className="w-6 h-6" />
                  <p className="ml-1">{publishedBy.name}</p>
                </div>
                <div className="flex">
                  <CalendarIcon className="w-6 h-6" />
                  <p className="ml-1">{date}</p>
                </div>
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {description.slice(0, 200)}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <HeartIcon className="w-6 h-6" />
                  <p className="ml-1">{like}</p>
                </div>
              </div>
            </Card>
          </div>
      </div>
    );
};

export default More;