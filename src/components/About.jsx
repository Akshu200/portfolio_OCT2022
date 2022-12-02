import React from "react";

const About = () => {
 
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto py-20">
              hey, my name is Akshay, I'm Pursuing my Information Technology (I.T.) Engineering from k.j. Trinity. I want to become Full Stack Developer(MERN).
               I am passionate about web development and how it works that I wanted to explore. Talking about my technology knowledge in Programming I know C , C++ & Database,
              I know MongoDB, SQL (Basic). In Web development, i'm good at Javascript(Intermediate), HTML, CSS. Frameworks I know FrontEnd (React js), Backend (Node js)
              with Express.js and CSS frameworks, I know Bootstrap & Tailwind CSS. For learning Purpose, I did Some Project that are below.
              </p>
 
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default About;
