import React, { useState } from "react";
import image from "../assets/download.png";

export default function Projects() {
  
const projects = [
    {
        name: "E-commerce Platform",
        description: "A full-featured e-commerce platform with payment integration, product management, and user authentication.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    {
        name: "Social Media App",
        description: "A social media application with real-time chat, post sharing, and user profiles.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    {
        name: "Project Management Tool",
        description: "A project management tool to track tasks, milestones, and team collaboration.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    {
        name: "Fitness Tracker",
        description: "An app to track workouts, monitor progress, and set fitness goals.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    {
        name: "Recipe Sharing Platform",
        description: "A platform for users to share and discover new recipes with step-by-step instructions.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    {
        name: "Travel Booking System",
        description: "A system to book flights, hotels, and rental cars with user reviews and ratings.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    {
        name: "Online Learning Platform",
        description: "A platform offering various online courses with video lectures, quizzes, and certificates.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    {
        name: "Weather Forecast App",
        description: "An app providing real-time weather updates, forecasts, and severe weather alerts.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    {
        name: "Event Management System",
        description: "A system to manage events, ticket sales, and attendee registrations.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    {
        name: "News Aggregator",
        description: "An app that aggregates news from various sources and categorizes them for easy reading.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    {
        name: "Job Portal",
        description: "A job portal for employers to post jobs and job seekers to find and apply for jobs.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
    {
        name: "Portfolio Website",
        description: "A personal portfolio website to showcase projects, skills, and contact information.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    },
];
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleHover = (project) => {
    setSelectedProject(project);
  };
  return (
    <div className="bg-black h-screen flex flex-col w-100 text-white">
      <div className="ml-5 mt-10 p-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold montserrat-bold text-left">
          Projects
        </h1>
      </div>
      <div className="w-100 flex justify-evenly mt-10 ">
        <div className="grid grid-cols-3 gap-4 p-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onMouseEnter={() => handleHover(project)}
            >
              <img
                src={project.images[0]} // Display the first image from the array
                alt={project.name}
                className="w-full h-48 object-cover rounded-md"
              />
              {/* <h2 className="montserrat mt-2 text-xl font-bold text-gray-500">{project.name}</h2> */}
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col p-10">
          <img
            src={selectedProject.images[0]} // Display the first image from the array
            className="w-full h-64 object-cover rounded-md"
          />
          <div className="mt-10 ">
         <div className="flex justify-between">
         <h1 className="text-6xl font-extrabold montserrat-bold">
            {selectedProject.name}
          </h1>
          <div className="flex gap-2">
            {selectedProject.images.map((image, index) => (
              <div className="rounded-xl ring-1 ring-violet w-10 h-10">
                <img
                  key={index}
                  src={image}
                  alt={selectedProject.name}
                  className="w-10 h-10 object-cover rounded-xl"/>
              </div>
            ))}
           
          </div>
         </div>
          <p className="mt-5 text-lg text-gray-400 montserrat">
            {selectedProject.description}
          </p>
          </div>
        </div>
      </div>
  
    </div>
  );
}
