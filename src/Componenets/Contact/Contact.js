import React from 'react';
import './Contact.css';
import mail from '../../assests/mail.png';
import location from '../../assests/location.png';
import call from '../../assests/call.png';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3c1aa1f0-5650-41ac-973e-b8eed4501f81");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };


  return (
    <div className='contact' id='contact'> 
    <div className='contact-title'>
        <h1>Get in touch</h1>

    </div>
    <div className='contact-section'>
        <div className='contact-left'>
            <h1> Lets talk</h1>
            <p> I am currently avaliable, so feel free to contact me.</p>
            <div className='contact-details'>
                <div className='contact-detail'>
                <img src={mail} alt=''/> <p>duasultan15@gmail.com</p>
                </div>
                <div className='contact-detail'>
                <img src={call} alt=''/><p>041 721 6846</p>
                </div>
                <div className='contact-detail'>
                <img src={location} alt=''/> <p>Finland</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor=''> Your Name</label>
            <input type='text' placeholder='Enter your name' name='name' /> 
            <label htmlFor=''>Your Email</label>
            <input type='email' placeholder='Enter your email' name='email' />
            <label htmlFor=''> Write your message here</label>
            <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
            <button className='contact-submit' type='submit'>Submit Now</button>


        </form>
    </div>
    </div>
  )
}

export default Contact