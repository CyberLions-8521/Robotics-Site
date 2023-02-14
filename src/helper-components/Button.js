import React, {useRef, useEffect} from 'react'

// Wrap in {} to destructure the props object
export default function Button({content, hex, link}) {
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.style.background = hex;
  }, [hex]);

  // get :hover customization working

  return (
    <a href={link} className="button" ref={buttonRef}>{content}</a>
  )
}
