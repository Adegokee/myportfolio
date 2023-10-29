import React from 'react'
import LEARN from '../../assest/facebook.png'
import LEARN1 from '../../assest/maxresdefault.jpg'
import LEARN2 from '../../assest/female.png'
import LEARN3 from '../../assest/youtube-page.jpg'
import LEARN4 from '../../assest/rapid-swift.png'
import LEARN5 from '../../assest/millionaire.png'
import './portfolio.css'

const data=[
  {
    id:1,
    image:LEARN,
    title: 'Facebook',
    github: 'https://github.com/AdegokeBabatunde43/djangomysocial',
    demo: 'https://tundetechhtmlcsssocial1.netlify.app/'
  },
  {
    id:2,
    image:LEARN1,
    title: 'NetFlix',
    github: 'https://github.com/Adegokee/movieapiclass',
    demo: 'https://tiny-starship-0ac823.netlify.app/'
  },
  {
    id:3,
    image:LEARN5,
    title: 'Quiz App',
    github: 'https://github.com/Adegokee/quizappdeloy',
    demo: 'https://whimsical-pavlova-392619.netlify.app/'
  },
  {
    id:4,
    image:LEARN3,
    title: 'Youtube API Clone',
    github: 'https://github.com/Adegokee/youtube-clone',
    demo: 'https://adegokeyoutubeclone.netlify.app/'
  },
  {
    id:4,
    image:LEARN2,
    title: 'Ecommerce Cart',
    github: 'https://github.com/AdegokeBabatunde43/my-movie-Api-1',
    demo: 'https://myecommercecartdemo.netlify.app/'
    
  },
  {
    id:5,
    image:LEARN4,
    title: 'Animation count with JavaScripts',
    github: 'https://github.com/AdegokeBabatunde43/quiz-app',
    demo: 'https://dreamy-rabanadas-67958e.netlify.app/'
  },
  {
    id:6,
    image:LEARN4,
    title: 'Weather App',
    github: 'https://github.com/AdegokeBabatunde43/quiz-app',
    demo: 'https://luxury-youtiao-506679.netlify.app/'
  },
  {
    id:6,
    image:LEARN4,
    title: 'Simple Caculator',
    github: 'https://github.com/AdegokeBabatunde43/quiz-app',
    demo: 'https://lucent-otter-12b8ee.netlify.app/'
    
  },
  {
    id:7,
    image:LEARN4,
    title: 'Wall Clock',
    github: 'https://github.com/Adegokee/wallclock',
    demo: 'https://ornate-hotteok-7a6ad4.netlify.app/'
    
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {data.map(({id, image, title, github, demo})=>(
                  <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='-blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='-blank'>Live Demo</a>
                  </div>
                  </article>
      ) )}
    </div>
    </section>
  )
}

export default Portfolio