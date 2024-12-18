import React from "react";
import { useState } from "react";
import Contact from "./Contact";
import Open from "/assets/hamburger.svg"
import Close from "/assets/close.svg"

function header() {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open)
  }

  return (
    <div className=" sticky top-0 z-[5] ">
      <nav className="flex flex-row lg:mx-10 mx-4 lg:py-2 justify-between">

        <a href="/" className="font-bebasNeue font-extrabold lg:text-3xl text-2xl ">
          HelmyHeiry
        </a>

        <button onClick={onClick} className="grow-[0.03] lg:grow-[0.01] z-[4]">
          {setOpen ? <img src={Open} alt="" /> : <img src={Close} alt="" />}
        </button>

        {open && (
          <div className="fixed bg-[#282828af] top-0 right-[0]">
          <div className="mt-[10rem] h-[100vh] mx-8 lg:mx-[3.7rem] flex flex-col lg:justify-start text-2xl [&>*]:mb-[5rem]">
            <p className="text-right">Wanna colaborate? Find me below!</p>
            <a href="https://telegram.me/HelmyHeiry"> Telegram </a>
            <a href="mailto: HelmyHeiry1104@gmail.com">Send Email</a>
          </div>
        </div>
        )}
      </nav>
    </div>
  )
}

export default header;