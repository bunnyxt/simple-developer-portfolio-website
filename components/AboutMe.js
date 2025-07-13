import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function AboutMe() {
  const techstack = [
    {
      name: "JavaScript",
      url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    },
    {
      name: "TypeScript",
      url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
    },
    {
      name: "React",
      url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
    },
    {
      name: "Vue",
      url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png",
    },
    {
      name: "Next.js",
      url: "https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704",
    },
    {
      name: "Webpack",
      url: "https://user-images.githubusercontent.com/25181517/187955008-981340e6-b4cc-441b-80cf-7a5e94d29e7e.png",
    },
    {
      name: "HTML",
      url: "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
    },
    {
      name: "CSS",
      url: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
    },
    {
      name: "Tailwind CSS",
      url: "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
    },
    {
      name: "Java",
      url: "https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png",
    },
    {
      name: "Spring Boot",
      url: "https://user-images.githubusercontent.com/25181517/183891303-41f257f8-6b3d-487c-aa56-c497b880d0fb.png",
    },
    {
      name: "Python",
      url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
    },
    {
      name: "Flask",
      url: "https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png",
    },
    {
      name: "Git",
      url: "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png",
    },
    {
      name: "AWS",
      url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png",
    },
    {
      name: "MySQL",
      url: "https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png",
    },
    {
      name: "MongoDB",
      url: "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",
    },
    {
      name: "GraphQL",
      url: "https://user-images.githubusercontent.com/25181517/192107856-aa92c8b1-b615-47c3-9141-ed0d29a90239.png",
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            I'm a Fullstack Frontend Software Engineer that loves building
            products with high impact from scratch.
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently. If you see me as a good fit,
                feel free to{" "}
                <Link
                  href="/contact"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  contact me
                </Link>
                !
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  target="_blank"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  target="_blank"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  target="_blank"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-72 group-hover:translate-x-0 transition duration-300"></span>
                    X (formerly Twitter)
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></span>
                    Instagram
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              Hello there! My name is Jinyuan Liu and I use pronounce he/him.{" "}
              <a
                href="https://github.com/bunnyxt"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                bunnyxt
              </a>{" "}
              is my ID in the coding world!
            </p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              Currently, I'm a Software Development Engineer at a global payment
              fintech unicorn company{" "}
              <a
                href="https://nium.com"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Nium
              </a>
              , building Nium's modern web portal with React, TypeScript, and
              Tailwind CSS. As one of the first frontend engineers at the
              company, I've been instrumental in establishing our modern
              frontend infrastructure from scratch over the past two years,
              working closely with our Staff Engineer TL to build component
              libraries, project architecture, and development workflows.
            </p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              I have 3 years of full time working{" "}
              <Link
                href="/experience"
                className="text-blue-500 hover:underline"
              >
                experience
              </Link>{" "}
              using TypeScript, React, NextJS, Python, NodeJS, Vue, and more.
              Not only solid tech skills but also cooperation and communication
              skills are developed during these experiences.
            </p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              Besides, as a big fan of web technologies, in the past 6 years, I
              initiated lots of side{" "}
              <Link href="/projects" className="text-blue-500 hover:underline">
                projects
              </Link>{" "}
              and familiar with the whole process of web development, from UI
              design, frontend implementation, backend architecture, cloud
              services, DevOps, etc.
            </p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              Now, I'm actively looking for mid-level SDE roles. If you are
              interested in me, feel free to{" "}
              <Link href="/contact" className="text-blue-500 hover:underline">
                contact
              </Link>{" "}
              me!
            </p>

            <h1 className="bg-blue-500 text-3xl rounded-md px-2 py-1 mt-4 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              {techstack.map((t) => (
                <img
                  className="h-20 w-20 mx-4 my-4"
                  key={t.name}
                  alt={t.name}
                  title={t.name}
                  src={t.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
