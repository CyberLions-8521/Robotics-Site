import { React } from 'react'
import { Carousel } from 'react-bootstrap'

import Banner1 from '../assets/images/cyberlions-banner.jpg'
import Banner2 from '../assets/images/edgar.png'

export default function Home() {

  return (
    <>
      <Carousel className='home-carousel' interval={3000} onPause={"hover"}>
        <Carousel.Item>
          <img src={Banner1} className="d-block w-100 home-carousel-image" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Banner2} className="d-block w-100 home-carousel-image" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
