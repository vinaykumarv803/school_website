import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

import React from 'react'
import { CCarousel,CCarouselItem,CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'


function Carousel(){
  return (<>

    <CCarousel controls dark transition="crossfade" interval={2000}>

      <CCarouselItem style={{width:"100%",height:"600px"}}>
        <CImage className="d-block w-100" src={img1} alt="slide 1" />
      </CCarouselItem>

      <CCarouselItem style={{width:"100%",height:"600px"}}>
        <CImage className="d-block w-100" src={img2} alt="slide 2" />
      </CCarouselItem>

      <CCarouselItem style={{width:"100%",height:"600px"}}>
        <CImage className="d-block w-100" src={img3} alt="slide 3" />
      </CCarouselItem>

    </CCarousel>
    </>)}
export default Carousel;
