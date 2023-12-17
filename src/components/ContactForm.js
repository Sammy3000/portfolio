import './FormStyles.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm=()=>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m9bjc7c', 'template_dt5sjvr', form.current, 'DsDqrHWLM7NYG0SOy')
        .then((result) => {
            console.log(result.text);
            console.log('message sent successfully!');
            if(result){
                return(
                    <div className='success'>
                        <h5>Message sent successfully!</h5>
                    </div>
                )

            }
          

        }, (error) => {
            console.log(error.text);
            if(error){
                return(
                    <div className='fail'>
                        <h5>Message failed!</h5>
                    </div>
                )
            }
            
        });
        e.target.reset();
    };

    return(
        <div className='form'>
           <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input className='input' type="text" name="from_name" required />
                <label>Email</label>
                <input className='input' type="email" name="user_email" required/>
                <label>Message</label>
                <textarea placeholder='Write me a message...' name="message" required/>
                <input className='button' type="submit" value="Send" />
           </form>
        </div>
    )
}

export default ContactForm