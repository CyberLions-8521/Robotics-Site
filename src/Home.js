import { React, useEffect } from 'react'
import cadding from './assets/cadding.jpg'
import kevilry from "./assets/kevilry.jpg"

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

  return (
    <>
        <div className='hero-container'>
            <section className='hero-container-content'>
                <article className='hero-content-text'>    
                    <h1 className='hidden'>
                        CYBERLIONS 8521
                    </h1>
                    <p className='hidden'>
                        Lions Lead. Robots Reign.
                    </p>
                </article>
                <article className="hero-content-image">
                    <span className="image-split" />
                    <span className="image-split" />
                    <span className="image-split" />
                </article>
            </section>
            <div className='hero-section-divider'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#c73737" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,154.7C1120,107,1280,53,1360,26.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
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
        </section>
    </>
  )
}
