import React from 'react'
import './MyWork.css';
import mywork_data from '../../assests/mywork_data';
import arrow from '../../assests/arrow.png';
function MyWork() {
  return (
    <div className='mywork' id='portfolio'>
        <div className='mywork-title'>
            <h1>My Latest Work</h1>

        </div>
        <div className='mywork-container'>
            {mywork_data.map((work, index)=> {

          return <img key={index} src={work.w_img} alt='' className='imgsize'/>
            
})}
        </div>
        <div className='mywork-showmore'>
            <p>Show More</p>
            <img src={arrow} alt=''/>

        </div>
        </div>
  )
}

export default MyWork