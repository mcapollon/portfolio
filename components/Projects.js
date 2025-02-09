"use client";
import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import ProjectCard from "./ProjectCard";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import Cursor from '../components/Cursor'
gsap.registerPlugin(Flip) 

function Projects() {
  const projects = [
    {
      name: "Instaborne",
      short_description:
        "Website development, estimation form and admin dashboard for electric charging station company built with react, next js and supabase as the database.",
      url: "https://instaborne.ca/",
      screenshots: [
        "/assets/instaborne/instaborne-homePage.png",
        "/assets/instaborne/instaborne-estimationForm.png",
        "/assets/instaborne/instaborne-simulateurCout.png",
      ],
      strip_img: "instaborne",
      id: "instaborne",
      bg_image: "bg-instaborne",
      features: ['Next JS', 'Supabase', 'Tailwind']
    },
    {
      name: "Promutuel",
      short_description:
        "Reusable component development for insurance company built with PHP & Drupal.",
      url: 'https://www.promutuelassurance.ca/en',
      screenshots: [
        "/assets/promutuel/promutuel-home.png",
        "/assets/promutuel/promutuel-1.png",
        "/assets/promutuel/promutuel-2.png"
      ],
      strip_img: "Promutuel",
      id: "promutuel",
      bg_image: "bg-promutuel",
      features: ['PhP', 'Twig', 'Drupal']
    },
    {
      name: "Max Park",
      short_description:
        "Website and ticket management system for private parking management company",
      url: 'https://www.maxparksolutions.com/',
      screenshots: [
        "/assets/maxpark/maxpark-home.png",
        "/assets/maxpark/maxpark-services.png",
        "/assets/maxpark/maxpark-payer-avis.png",
      ],
      strip_img: "maxpark",
      id: "maxpark",
      bg_image: "bg-maxpark",
      features: ['React', 'Firebase', 'Tailwind']
    },
    {
      name: "FWD Movement",
      short_description:
        "Website for FWD Movements, a Montreal-based company specializing in street dance, artistic performances, and cultural mediation built with Next JS.",
      url: 'https://fwdmovements.com/fr',
      screenshots: [
        "/assets/fwdmovement/fwdmovement-equipe.png",
        "/assets/fwdmovement/fwdmovement-histoire.png",
        "/assets/fwdmovement/fwdmovement-home.png",
      ],
      strip_img: "fwdmovement",
      id: "fwdmovement",
      bg_image: "bg-fwdmovement",
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
    Flip.from([sliceState, cardState], {duration: 0.2, ease: "power1.inOut"});
  }

  function handleClose() {
    // const cardState = Flip.getState('.project-card');
    setSelectedSlice(null);
    // Flip.from(cardState, {duration: 2, ease: "power1.inOut"})
  }

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-row min-h-screen -translate-y">
      <Cursor isHovered={isHovered}/>
      {projects.map((project, i) => (
        <div
          key={i}
          id={project.id}
          className={`
            project-slice transition-all ease-in-out duration-700 bg-cover bg-center overflow-hidden hover:grayscale-0 ${selectedSlice === project.id ? `grayscale-0 w-full ${project.bg_image} shrink-0 md:shrink` : `${project.bg_image} grow md:w-28 grayscale hover:scale-x-110`}
          `}
          onMouseEnter={() => {selectedSlice === project.id ? '' : setIsHovered(true)}}
          onMouseLeave={() => {setIsHovered(false)}}
          onClick={(e) => {
            handleSliceClick(e, project);
            setIsHovered(false)
          }}
        >
          <span className="z-10">
            <div className="flex justify-between p-10">
              <p className="text-orientation-vertical text-xl font-black text-white">
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
            <ProjectCard className="transition-all ease-in-out duration-500 project-card" selected={selectedSlice} project={project}/>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Projects;
