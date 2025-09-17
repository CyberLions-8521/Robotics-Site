import { React } from 'react'
import { Carousel } from 'react-bootstrap'
import CarouselImage from '../components/CarouselImage'

import Banner1 from '../assets/images/cyberlions-banner.jpg'
import Banner2 from '../assets/images/edgar.png'
import Banner3 from '../assets/images/cyberlions-veteran.png'

export default function Home() {

  return (
    <>
      <Carousel className='home-carousel' interval={3000} onPause={"hover"}>
        <Carousel.Item>
          <CarouselImage 
            imageSrc={Banner1} 
            altText="First slide" 
            captionHeader="First slide label" 
            captionText="Nulla vitae elit libero, a pharetra augue mollis interdum." 
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage 
            imageSrc={Banner2} 
            altText="Second slide" 
            captionHeader="Second slide label" 
            captionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage 
            imageSrc={Banner3} 
            altText="Third slide" 
            captionHeader="Third slide label" 
            captionText="Praesent commodo cursus magna, vel scelerisque nisl consectetur." 
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}
