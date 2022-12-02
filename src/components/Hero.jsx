import React from "react";

const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('akshay.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'akshay.pdf';
            alink.click();
        })
    })
}
  return (
    <section
      id="home"
      className="md:items-center mx-auto min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      
      <div className="flex-1">
        <div className="text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal py-10 leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              hello!
              <br />
            </span>
            My Name is <span>Akshay</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
           
          </h4>
          <br/>
         
          <button onClick={onButtonClick} className="py-1 bg-cyan-600 font-bold transform hover:scale-110 duration-100 hover:text-cyan-600 hover:bg-white px-3 text-lg  rounded-3xl ">Click</button>
        
          
          <div className=" mt-8 text-3xl flex items-center  justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 transform hover:scale-150 duration-150 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
