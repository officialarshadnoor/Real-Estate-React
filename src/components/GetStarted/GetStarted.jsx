import React from 'react'
import './GetStarted.css';

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innderWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'>Subscribe and find super attractive price quotes from our side <br/>Find you residence</span>
                <button className='button'>
                    <a href='mailto:blogginghindi@gmail.com'>Get Started</a>
                </button>
            </div> 
        </div>
    </section>
  )
}

export default GetStarted