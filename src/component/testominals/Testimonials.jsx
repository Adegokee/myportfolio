import React from 'react'
import './testmonials.css'
import IMG from '../../assest/image2.jpg'
import IMG1 from '../../assest/Wizkid.png'
import IMG2 from '../../assest/olamide.png'
import IMG3 from '../../assest/patoranking.jpg'
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
const data =[
  {
    avatar:IMG,
    name: 'Adegoke Babatunde',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias, voluptates quod autem quasi commodi laudantium accusamus rerum? Tempore possimus reprehenderit, eaque optio deserunt nulla doloribus recusandae rerum nam quis?'
  },
  {
    avatar:IMG1,
    name: 'Adegoke Babatunde',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias, voluptates quod autem quasi commodi laudantium accusamus rerum? Tempore possimus reprehenderit, eaque optio deserunt nulla doloribus recusandae rerum nam quis?'
  },
  {
    avatar:IMG2,
    name: 'Adegoke Babatunde',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias, voluptates quod autem quasi commodi laudantium accusamus rerum? Tempore possimus reprehenderit, eaque optio deserunt nulla doloribus recusandae rerum nam quis?'
  },
  {
    avatar:IMG3,
    name: 'Adegoke Babatunde',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias, voluptates quod autem quasi commodi laudantium accusamus rerum? Tempore possimus reprehenderit, eaque optio deserunt nulla doloribus recusandae rerum nam quis?'
  }

]


  return (
    <section id="testmonials">
      <h5>Review from Clients</h5>
      <h2>Testominals</h2>
      <Swiper className="container testmonials__container"
          modules={[Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
       {
     data.map(({avatar, name, review},index)=>{
      return(

        <SwiperSlide key={index} className='testmonial'>
       <div className='client__avatar'>
         <img src={avatar} alt="" />
       </div>
       <h4 className='client__name'>{name}</h4>
         <small className='client__review'>{review}</small>
       </SwiperSlide>

      )
       
     })
     }
        
        
      </Swiper>
    </section>
  )
}

export default Testimonials