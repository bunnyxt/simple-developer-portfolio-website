import React from "react";
import Link from "next/link";

export default function BriefAboutMe() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-black my-20 md:my-0 dark:text-white">
            About Me
          </h1>
          <Link
            href="/about"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-100 dark:bg-gray-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white dark:hover:from-blue-600 dark:hover:to-purple-700 cursor-pointer group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-125"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p className="transform transition-transform duration-300 group-hover:translate-x-1">
              Check out more
            </p>
          </Link>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-center md:my-20 lg:my-0 -translate-y-8">
          <div className="w-full p-10 md:p-20 max-w-6xl mx-auto bg-gray-200 dark:bg-gray-700">
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
              I'm a Fullstack Frontend Software Engineer that loves building
              products with high impact from scratch.
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
              I'm currently working as a Software Engineer at{" "}
              <a
                href="https://www.nium.com/"
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                Nium
              </a>
              , a FinTech unicorn, where I build the frontend infrastructure and
              products from 0 to 1.
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
              Besides work, I'm the founder of{" "}
              <a
                href="https://tdd.bunnyxt.com"
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                TianDian Daily
              </a>
              , the largest Vocaloid China music video archive platform with
              million videos and billion view records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
