import React from 'react'
import './about.css'
import ME from '../../assest/tunde2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
        <h4>Experience</h4>
        <small>3+ Years Working</small>
        </article>
        <article className='about__card'>
          <FiUser className='about__icon'/>
        <h4>Client</h4>
        <small>200+ Years Working</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
        <h4>Projects</h4>
        <small>80+ Years Working</small>
        </article>
      </div>
      <p>Full Stack Developer familiar with a wide range of programming utilities and languages, with a background in designing, testing and implementing infrastructure and applications. Knowledgeable of backend and frontend development requirements with 8 years of work experience using source control tools to identify and fix bugs in code, handling any part of the process with ease. Software development professional with experience in developing and designing web applications using HTML, CSS, JavaScript, Python, Django, My SQL and React, etc. Adapt at deploying complex front- and backend systems, web services and databases..</p>
      <a href="#contact" className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
      
    </section>
  )
}

export default About