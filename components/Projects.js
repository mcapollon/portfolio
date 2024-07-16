"use client";
import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import ProjectCard from "./ProjectCard";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip) 

function Projects() {
  const projects = [
    {
      name: "Instaborne",
      short_description:
        "Website and admin for electric charging station company built with react & next js.",
      url: "https://instaborne.ca/",
      screenshots: [
        "/assets/natyf.png",
        "/assets/promutuel.png",
        "/assets/instaborne.jpeg",
      ],
      strip_img: "instaborne",
      id: "instaborne",
      bg_image: "bg-instaborne",
      features: ['Next JS', 'Supabase', 'Tailwind']
    },
    {
      name: "Promutuel",
      short_description:
        "Website for electric charging station company built with react next js.",
      url: 'https://www.promutuelassurance.ca/en',
      screenshots: [
        "/assets/natyf.png",
        "/assets/promutuel.png",
        "/assets/instaborne.jpeg",
      ],
      strip_img: "Promutuel",
      id: "promutuel",
      bg_image: "bg-promutuel",
      features: ['PhP', 'Twig', 'Drupal']
    },
    {
      name: "629 Securite",
      short_description:
        "Website for electric charging station company built with react next js.",
      url: 'https://www.629securite.com/fr',
      screenshots: [
        "/assets/natyf.png",
        "/assets/promutuel.png",
        "/assets/instaborne.jpeg",
      ],
      strip_img: "629_securite",
      id: "629_securite",
      bg_image: "bg-629_securite",
      features: ['Next JS', 'Supabase', 'Tailwind']
    },
    // {
    //   name: "FWD Movement",
    //   short_description:
    //     "Website for electric charging station company built with react next js.",
    //   url: 'https://fwdmovement.vercel.app/fr',
    //   screenshots: [
    //     "/assets/natyf.png",
    //     "/assets/promutuel.png",
    //     "/assets/instaborne.jpeg",
    //   ],
    //   strip_img: "fwdmovement",
    //   id: "fwdmovement",
    //   bg_image: "bg-fwdmovement",
    //   features: ['Next JS', 'Supabase', 'Tailwind']
    // },
    {
      name: "Natyf Tv",
      short_description:
        "Website for electric charging station company built with react next js.",
      url: 'https://natyf.com/',
      screenshots: [
        "/assets/natyf.png",
        "/assets/promutuel.png",
        "/assets/instaborne.jpeg",
      ],
      strip_img: "natyf",
      id: "natyf",
      bg_image: "bg-natyf",
      features: ['Next JS', 'Supabase', 'Tailwind']
    },
  ];

  const [selectedSlice, setSelectedSlice] = useState('')

  useEffect(() => {
    if (window.matchMedia("(min-width: 640px)").matches) {
      document.getElementById('instaborne').click();
    }
  }, []);

  function handleSliceClick(e, project) {
    const sliceState = Flip.getState('.project-slice')
    const cardState = Flip.getState('.project-card')
    selectedSlice != project.id ? setSelectedSlice(e.currentTarget.id) : '';
    Flip.from([sliceState, cardState], {duration: 1.6, ease: "power1.inOut"});
  }

  // function handleClose() {
  //   setSelectedSlice(null)
  //   const sliceState = Flip.getState('.project-slice')
  //   const cardState = Flip.getState('.project-card')
  //   gsap.to([sliceState, cardState], {duration: 1, ease: "power1.inOut"});
  // }

  function handleClose() {
    // const sliceState = Flip.getState('.project-slice');
    const cardState = Flip.getState('.project-card');
    setSelectedSlice(null);
    // Flip.from(sliceState, {duration: 2, ease: "power1.inOut"});
    Flip.from(cardState, {duration: 2, ease: "power1.inOut"})
  }

  return (
    <div className="flex flex-row min-h-screen">
      {projects.map((project, i) => (
        <div
          key={i}
          id={project.id}
          className={`
            project-slice transition-all ease-in-out duration-700 bg-cover bg-no-repeat overflow-hidden ${selectedSlice === project.id ? `w-full ${project.bg_image} shrink-0 md:shrink` : `${project.bg_image} grow md:w-28`}
          `}
          onClick={(e) => {
            handleSliceClick(e, project);
          }}
        >
          <span className="z-10">
            <div className="flex justify-between p-10">
              <p className="text-orientation-vertical text-xl font-black">
                {project.name}
              </p>
              <button
                onClick={handleClose}
                type="button"
                className={`h-fit ${selectedSlice === project.id ? 'transition-all ease-in-out duration-700 sm:visible md:hidden' : 'transition-all ease-in-out duration-700 hidden' } transition-all rounded-full bg-white/10 backdrop-blur-md p-1 text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
              >
                <XMarkIcon
                 className=" h-12 w-12" aria-hidden="true" 
                />
              </button>
            </div>
            <ProjectCard className="project-card" selected={selectedSlice} project={project}/>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Projects;
