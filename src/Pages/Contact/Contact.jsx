import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from 'react-hot-toast';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGithub, FaHouse, FaMessage, FaPhone } from 'react-icons/fa6';

const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: "1000", delay: "500" });
  }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_peqa85s', 'template_vm9xfjs', form.current, 'Lqx8BimxgXH_XyERk')
        .then((result) => {
            toast.success('Your message sent to Shakil');
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      };

  return (
    <div>

      <div>
        <h2
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="text-6xl text-center font-bold mt-6">Md. Shakil Islam</h2>
        
        <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className='md:w-7/12 md:mx-auto text-center mt-8 flex'>
          <div className='md:grid grid-cols-2 gap-8 mx-auto'>
          <div>
            <h1 className='font-bold text-2xl text-blue-600'>Home</h1>
           <div className='flex gap-4 justify-center items-center'>
           <FaHouse></FaHouse>
          <span className='mt-2 flex text-xl'>Natore, Rajshahi <br /> Bangladesh</span>
           </div>
          </div>
        <div>
        <div>
            <h1 className='font-bold text-2xl text-blue-600'>Phone</h1>
           <div className='flex gap-4 justify-center items-center'>
           <FaPhone></FaPhone>
          <span className='mt-2 flex text-xl'>+8801876232402</span>
           </div>
          </div>
        </div>

          <div>
            <h1 className='font-bold text-2xl text-blue-600'>GitHub</h1>
           <div className='flex gap-4 justify-center items-center text-center'>
           <FaGithub></FaGithub>
          <span className='mt-2 flex text-xl'>github.com/shakilgit1</span>
           </div>
          </div>
        <div>
        <div>
            <h1 className='font-bold text-2xl text-blue-600'>Email</h1>
           <div className='flex gap-4 justify-center items-center'>
           <FaMessage></FaMessage>
          <span className='mt-2 flex text-md md:text-xl'>programmershakil99@gmail.com</span>
           </div>
          </div>
        </div>
       
          </div>
        </div>
      </div>

    <div className='my-12'>
    <h2
      data-aos="fade-up"
       className="text-4xl text-center font-bold my-8">Message Me</h2>

      <form
       data-aos="zoom-in"
       data-aos-offset="200"
       data-aos-delay="50"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out"

      className="w-8/12 mx-auto bg-blue-400 h-96 p-4 md:p-10" ref={form} onSubmit={sendEmail}>
         <div className='w-6/12'>
         <div className='md:flex gap-4'>
         <div>
        <label>Name</label>
        <br />
        <input type="text" name="user_name" required placeholder='Your Name' className='p-2 mt-2 mb-1 md:mb-0'/>
        </div>
        <div>
        <label>Email</label>
        <br />
        <input type="email" name="user_email" required placeholder='Your Email' className='p-2 mt-2'/>
        </div>
         </div>
        <br />
        <div className="">
        <label className=''>Message</label>
        <br />
         <div className='md:flex flex-col'>
         <textarea name="message" placeholder='Your message' className='p-4  md:w-[430px] h-28 mt-2 rounded-lg'/>
        <input className="btn btn-sm ml-2 mt-1 md:mt-4 md:w-2/12 btn-secondary" type="submit" value="Send" />
         </div>
        </div>
         </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
