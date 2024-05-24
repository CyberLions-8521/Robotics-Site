import { React, useEffect } from 'react'

export default function Home() {

    /* Checks if elements are intersecting with view port, applies .show class on intersecting elements */
    // useEffect(() => { //Rechecks on page refresh
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             console.log(entry);
    //             if (entry.isIntersecting) {
    //               entry.target.classList.add('show');
    //             }
    //           });
    //       });
        
    //     const hiddenElements = document.querySelectorAll('.hidden');
    //     hiddenElements.forEach((el) => observer.observe(el));
    // }, []);

  return (
    <>
        <p>hi</p>
    </>
  )
}
