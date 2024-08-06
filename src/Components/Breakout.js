import React, { useState, useEffect } from 'react';
import { IoCloseCircle } from "react-icons/io5";

const Breakout = ({ closeModal }) => {
  return (
    <>
         <div className='modalBackground Breakout09'>
        <div className='modalContainer'>
          <button className='modalClose' onClick={() => closeModal(false)}><IoCloseCircle /></button>
          <iframe src="https://www.agency09.in/breakout/" title="Game09" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      
    </>
  )
}

export default Breakout
