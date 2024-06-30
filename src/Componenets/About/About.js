import React from 'react'
import './About.css';
import profileimg from '../../assests/profileimg.jpg'
const About = () => {
  return (
    <div className='about' id='about'>
         <div className='about-title'>
            About Me
         </div>
         <div className='about-section'> 
            <div className='about-left'>
            <img src={profileimg} alt=' ' className='profile-img'/>
            </div>
            <div className='about-right'>
              <div className='about-para'> 
                <p>I am a UI/UX designer with one year of experience in web and mobile app design, proficient in Figma and Adobe XD. I have created diverse projects with a 
                    focus on user-centric, intuitive designs and detailed prototyping. </p>
                   <p> I'm passionate about learning new things and eager to grow in this feild.</p>
              </div>
              <div className='about-skills'>
                <div className='about-skill'> <p>UI Design</p><hr style={{width:"80%"}} /></div>
                <div className='about-skill'> <p>UX Design</p><hr style={{width:"80%"}} /></div> 
                <div className='about-skill'> <p>Prototyping</p><hr style={{width:"70%"}} /></div>
                <div className='about-skill'> <p>HTML&CSS</p><hr style={{width:"70%"}} /></div>
                <div className='about-skill'> <p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className='about-skill'> <p>React JS</p><hr style={{width:"50%"}} /></div>
              </div>
            </div>
         </div>
         <div className='about-achievements'>
            <div className='about-ach'>
                <h1>1+</h1>
                <p> YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className='about-ach'>
                <h1>20+</h1>
                <p> PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className='about-ach'>
                <h1>5+</h1>
                <p> CERTIFICATIONS</p>
            </div>

         </div>
    </div>
  )
}

export default About