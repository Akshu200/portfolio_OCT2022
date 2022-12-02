import React,{useState} from "react";
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

  const contact_info = [
    { logo: "mail", text: "Salunkheakshay121@gmail.com" },
    { logo: "logo-whatsapp", text: "9860******" },
    {
      logo: "location",
      text: "Pune, Mahatashtra",
    },
  ];
 
  const sendmsg = (e)=>{
    e.preventDefault();
    // console.log(name+email+message);
    
    // toast.info('Message Sent', {
    //   position: "top-right",
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    //   });
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 2500));
     toast.promise(
    resolveAfter3Sec,
    {
      pending: 'Sending Message',
      success: 'Message Sent 👌',
      error: 'Message rejected 🤯'
      
    },
    
)
    
    const info ={
      name:name,
      email:email,
      message:message,
    };

    emailjs.send('service_roedy5l', 'template_zzocsaj', info,'SseU7EmLVBR22nNE1')
        .then(() => {
          console.log("Message Send to Akshay");
      }, (error) => {
          console.log(error.text);
      })
     
      

  }

  
  // const sendEmail =(e)=>{
  //     e.preventDefault();
  //     // alert('msg send successfull')
  //     emailjs.sendForm('service_roedy5l', 'template_zzocsaj', e.target,'SseU7EmLVBR22nNE1')
  //     .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //       console.log(error.text);
  //   })
  // }
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form onSubmit={sendmsg} className="flex flex-col flex-1 gap-5">
            <input type="text"  placeholder="Your Name" 
            onChange={(e)=>{setName(e.target.value)}}
            />
            <input type="Email"  placeholder="Your Email Address"
            onChange={(e)=>{setEmail(e.target.value)}}
            />
            <textarea placeholder="Your Message" 
            onChange={(e)=>{setMessage(e.target.value)}}
            rows={10}></textarea>

            <button  className="btn-primary w-fit transform hover:scale-110 duration-150 hover:text-cyan-600 hover:bg-white">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row   transform hover:scale-110 duration-100
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer
      icon={false}
      position="top-right"
      autoClose={1500}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </section>
  );
};

export default Contact;
