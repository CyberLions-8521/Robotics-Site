import { React, useEffect } from 'react'
import cadding from './assets/images/cadding.jpg'
import kevilry from "./assets/images/kevilry.jpg"

import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';

export default function Home() {

    /* Checks if elements are intersecting with view port, applies .show class on intersecting elements */
    useEffect(() => { //Rechecks on page refresh
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                  entry.target.classList.add('show');
                }
              });
          });
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);

    const CustomNewsletter = () => {
        const newsletterTitle1 = "CYBERPRIDE";
        const newsletterTitle2 = "NEWSLETTER"

        return (
            <Newsletter
                title1={newsletterTitle1}
                title2={newsletterTitle2}
            />
        );
    };
   
  return (
    <>
        <div className='hero-container'>
            <section className='hero-container-content'>
                <article className='hero-content-text'>    
                    <h1 className='hidden'>
                        Lions Lead.
                    </h1>
                    <h1 className='hidden'>
                        Robots Reign.
                    </h1>
                </article>
                <article className="hero-content-image">
                    <span className="image-split" />
                    <span className="image-split" />
                    <span className="image-split" />
                </article>
            </section>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400">
                    <path fill="#c73737" fill-opacity="1" d="M0,160L80,181.3C160,203,400,245,480,245.3C640,245,800,203,960,154.7C1120,107,1280,53,1360,26.7L1440,0L1440,400L1360,400C1280,400,1120,400,960,400C800,400,640,400,480,400C400,400,160,400,80,400L0,400Z"></path>
                </svg>
        </div>
        <section className='section-divider'>
            <section className='section-container hidden'>
                <section className="section-container-background">
                    <img src={cadding} alt='cadding' />
                    <div className="section-container-text">    
                        <h1>We Are A High School Team Based in Westminster, CA</h1>
                        <p>Founded in 2020, Team 8521 is a robotics team aiming to provide our community with hands-on opportunities and mentorships. We want to empower our community and give them the chance to show their leader and innovator ability.</p>
                    </div>
                </section>
            </section>
            <section className='section-container horizontal-flip hidden'>
                <section className="section-container-background">
                    <img src={kevilry} alt='cadding' />
                    <div className="section-container-text">    
                        <h1>We Compete In The FIRST Robotics Competition</h1>
                        <p>FRC is an international competition where teams fundraise, design, build, and program a robot each year to compete in games involving various tasks, which change annually.</p>
                    </div>
                </section>
            </section>
            <Gallery />
            <CustomNewsletter />
        </section>
    </>
  )
}
