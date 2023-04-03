import React, { useRef } from 'react'
import exit from "../images/icons/cross-small.png"

// A modal is similar to a popup. This is particularly used in the mobile navigation bar
export default function Modal({content, check, checkFunction}) {

  const exitButton = useRef();

  function handleExit(){
    checkFunction();
  }

  if (check === true){
    return (
      <div className="modal">

        {/* Everything is wrapped inside modal-content so that all content is centered on the screen */}
        <section className="modal-content">
          <img alt="exit button" src={exit} ref={exitButton} onClick={(e) => handleExit()} />
          {content}
        </section>
      
      </div>
    )
  }

  return (
    // nothing (empty fragment) returned if check is false
    <></>
  )
}
