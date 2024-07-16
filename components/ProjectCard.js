import React, { useRef } from "react";
import { SparklesIcon } from "@heroicons/react/20/solid";
import { useDraggable } from "react-use-draggable-scroll";

function ProjectCard({ project, selected }) {
  function Slider(projects, key) {
    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref, {
      isMounted: true,
      applyRubberBandEffect: true,
    });

    return (
      <div
        key={key}
        id={projects.project.id + "-slider-container"}
        className="flex overflow-x-scroll gap-4 no-scrollbar"
        {...events}
        ref={ref}
      >
        {projects.project.screenshots.map((src, i) => (
          <img
            key={i}
            src={src}
            className="image-slider-image h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm hover:cursor-grabbing"
          />
        ))}
      </div>
    );
  }

  return (
    <span className="z-10 transition-all">
      <div
        id={`${project.id}-card`}
        className={`overflow-hidden transition-all ease-in duration-1000 delay-700 py-1 ${
          selected === `${project.id}`  ? '' : "hidden"
        }`}
      >
        <div>
          <div>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 md:pb-8">
              <div className="bg-white/10 backdrop-blur-md mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16 ring-1 ring-white/20 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                <Slider project={project} />

                <div className="w-full flex-auto">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {project.name}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                   {project.short_description}
                  </p>
                  <ul
                    role="list"
                    className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                  >
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-x-3">
                        <SparklesIcon
                          className="h-7 w-5 flex-none"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex">
                    <a
                      href={project.url}
                      className="text-sm font-semibold leading-6 text-white"
                    >
                      View website Live <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default ProjectCard;