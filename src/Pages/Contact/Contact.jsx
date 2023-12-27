import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_peqa85s', 'template_vm9xfjs', form.current, 'Lqx8BimxgXH_XyERk')
        .then((result) => {
            console.log(result.text);
            toast.success('Your message has been sent to Shakil')
        }, (error) => {
            console.log(error.text);
        });
      };

  return (
    <div>
      <h2 className="text-xl text-center font-bold my-8">Contact Me</h2>
      <form className="w-8/12 mx-auto bg-blue-400 h-60 p-8" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <br />
        <div className="mt-8">
        <label>Message</label>
        <textarea name="message" />
        <input className="btn ml-2" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
