import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
  
    {
      img: p3,
      name: "Movies Site",
      live_link:"https://movie-site-akshay.netlify.app/"
    },
    {
      img: p4,
      name: "Food Site",
      live_link:"https://project5efood.000webhostapp.com/index.html"
    },
    {
      img: p5,
      name: "Add todo",
      live_link:"https://akshay-todo-list.netlify.app/"
    }, 
    {
      img: p1,
      name: "React Router",
      live_link:"https://router-page.netlify.app/"
    },
    {
      img: p2,
      name: "Search Movie",
      live_link:"https://movies-site-akshay.netlify.app/"
    },
    {
      img: p6,
      name: "Shopping Cart using Redux",
      live_link:"https://item-shopping.netlify.app/"
    },
    
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <br/>
        <p className="text-gray-400 mt-3 text-lg"></p>
      </div>
      <br />
      <div className="flex max-w-8xl gap-6 px-5 mx-auto items-center ">
        <div className="w-[50%] mx-auto">
          <Swiper
            slidesPerview={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-white bg-gray-800 transform hover:scale-110 duration-100 px-4 py-2 mx-6 rounded "
                    >
                      View
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
                <br/>
                <a href="https://github.com/Akshu200?tab=repositories" 
                >
                <button className=" py-2 bg-cyan-600 font-bold transform hover:scale-110 duration-150 hover:text-cyan-600 hover:bg-white px-3 rounded-3xl ">Git Repository</button>
                </a> 
        </div>
        
 
      </div>
    </section>
  );
};

export default Project;
