import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Sitemap09 = () => {
  return (
    <div className='sitemap'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/work'>Work</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/service/design'>Service - Design</Link></li>
        </ul>
    </div>
  )
}

export default Sitemap09
