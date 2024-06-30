import React from 'react'
import './hero.css';
import img from '../../assests/img.png';
const hero = () => {
  return (
    <div className='hero' id='home'>
    <img src={img} alt=''/>
    <h1> <span>I'm Dua Sultan,</span> UI/UX Designer based in Finland.</h1>
  {/* <p>I'm a  UI/UX Desinger having an experience of more than one year in both Web and Mobile applications using the tools Figma and AdobeXD.</p> */}
    <div className='hero-action'>
    <button className='hero-connect'>Connect with me</button>
    <button className='hero-resume'>My Resume</button>
    </div>
    </div>
  )
}

export default hero