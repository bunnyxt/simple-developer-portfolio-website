import React from "react";
import Link from "next/link";

export default function FavoriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-black my-20 md:my-0 dark:text-white text-center">
            Favorite Projects
          </h1>
          <Link
            href="/projects"
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
              View all
            </p>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40">
          {/* Single card */}
          <a
            href="/projects/medical-image-analysis-platform"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/medical-image-analysis-platform/mask-editor.png"
                alt="medical-image-analysis-platform_mask-editor"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h3 className="absolute top-5 left-5 md:top-10 md:left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                Medical Image Analysis Platform
              </h3>
              <span className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-white font-bold text-xl bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                01
              </span>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://tdd.bunnyxt.com"
            target="_blank"
            className="w-full block col-span-3  sm:col-span-2 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/tiandian-daily/video-trending-line-chart.jpg"
                alt="tiandian-daily_video-trending-line-chart.jpg"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h3 className="absolute top-5 left-5 md:top-10 md:left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2 flex items-center space-x-2">
                <span>TianDian Daily</span>
                <svg
                  className="w-4 h-4 text-gray-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </h3>
              <span className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-white font-bold text-xl bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                02
              </span>
            </div>
          </a>
          {/* Single card */}
          {/* TODO: add back when I deploy the website again <a
            href="https://bunnyxt-tmdb.azurewebsites.net"
            target="_blank"
            className="w-full block col-span-3 sm:col-span-1  object-cover"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> * /}
              <img
                src="/usc-films/homepage-carousel.jpg"
                alt="usc-films_homepage-carousel"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h1 className="absolute top-5 left-5 md:top-10 md:left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                USC Films
              </h1>
              <span className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-gray-50 font-bold text-xl">
                03
              </span>
            </div>
          </a> */}
          {/* Single card */}
          <a
            href="https://docs.nium.com/docs/portal-reports"
            target="_blank"
            className="w-full block col-span-3 sm:col-span-1  object-cover"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/nium-portal/transactions-page.png"
                alt="nium-portal-transactions-page"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h3 className="absolute top-5 left-5 md:top-10 md:left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2 flex items-center space-x-2">
                <span>Nium Portal</span>
                <svg
                  className="w-4 h-4 text-gray-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </h3>
              <span className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-white font-bold text-xl bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                03
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
