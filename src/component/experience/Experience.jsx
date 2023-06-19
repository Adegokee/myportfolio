import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons'/>
            <div>
              
            <h4>CSS</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons'/>
            <div>
            <h4>JavaScripts</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons'/>
          <div>
          <h4>BootStrap</h4>
            <small className='text-light'>Experienced</small>
          </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons'/>
           <div>
           <h4>React</h4>
            <small className='text-light'>Experienced</small>
           </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons'/>
           <div>
           <h4>Tailwind</h4>
            <small className='text-light'>Experienced</small>
           </div>
            </article>
          </div>
        </div>
        <div className="container__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons' />
           <div>
           <h4>Django</h4>
            <small className='text-light'>Intermidiate</small>
           </div>
            </article>
          
            
          </div>

        </div>
        <div className="container__backend">
        <h3>Junior DevOps Engineer </h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons' />
           <div>
           <h4>Aws Cloud <br /> Computing</h4>
            <small className='text-light'>Intermidiate</small>
           </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons' />
           <div>
           <h4>Terrform and Ansible for Automation</h4>
            <small className='text-light'>Intermidiate</small>
           </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons' />
           <div>
           <h4>Containerization: Docker, Kubernetes</h4>
            <small className='text-light'>Intermidiate</small>
           </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons' />
           <div>
           <h4>CI/CD with Jenkins</h4>
            <small className='text-light'>Intermidiate</small>
           </div>

            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons' />
           <div>
           <h4>Virtual Control <br /> with Git and Github</h4>
            <small className='text-light'>Intermidiate</small>
           </div>

            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons' />
           <div>
           <h4>Linux and Bash <br />Scripting</h4>
            <small className='text-light'>Intermidiate</small>
           </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons' />
           <div>
           <h4>SonarCloud and Snyk</h4>
            <small className='text-light'>Intermidiate</small>
           </div>

            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icons' />
           <div>
           <h4>Configuration:YAML</h4>
            <small className='text-light'>Intermidiate</small>
           </div>

            </article>
            
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience