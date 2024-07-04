import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AGENCY09logo from '../Assets/Images/agency09.png';
import AGENCY09logoLight from '../Assets/Images/agency-light.png';

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import caseStudies from '../Assets/Images/case_studies.jpg'
import blog from '../Assets/Images/blog.jpg'

import ideasPerform from '../Assets/Images/growth/mediaA09.jpg';
import ideasPerform1 from '../Assets/Images/blog1.jpg';
import sportday from '../Assets/Images/blog2.jpg';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isHeaderFixed, setHeaderFixed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('menuOpen');
    } else {
      document.body.classList.remove('menuOpen');
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setHeaderFixed(currentScrollPos > 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('menuOpen');
    };
  }, [prevScrollPos]);
  const location = useLocation();
   

  return (
    <>
      <header className={`header ${visible ? 'visible' : 'hidden'} ${isHeaderFixed ? 'fixed' : ''} ${isMenuOpen ? 'MenuActive' : ''}`}>
        <div className='container'>
          <nav>
            <ul>
              <li>
                <Link to='/about'  className={location.pathname === '/about' ? 'active' : ''}>About</Link>
              </li>
              <li>
                <Link to='/work/case-studies'>Work</Link>
              </li>
              <li>
                <Link to='/solutions/tech'>Solutions</Link>
                <div className='subMenu'> 
                  <div className='subMenuInner'>
                    <span><Link className={location.pathname === '/solutions/tech' ? 'active' : ''} to='/solutions/tech'>Tech</Link></span>
                    <span><Link className={location.pathname === '/solutions/design' ? 'active' : ''} to='/solutions/design'>Design</Link></span>
                    <span><Link className={location.pathname === '/solutions/content' ? 'active' : ''} to='/solutions/content'>Content</Link></span>
                    <span><Link className={location.pathname === '/solutions/media' ? 'active' : ''} to='/solutions/media'>Media</Link></span>
                    <span><Link className={location.pathname === '/solutions/production' ? 'active' : ''} to='/solutions/production'>Production</Link></span>
                    <span><Link className={location.pathname === '/solutions/keyword' ? 'active' : ''} to='/solutions/keyword'>Keyword</Link></span>
                  </div>
                </div>
              </li>
              <li className='logo'>
                <Link to='/' ><img src={AGENCY09logo} alt='AGENCY09' /></Link>
              </li>
              <li>
                <Link to='/careers' className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link>
              </li>
              <li>
              <Link to='https://www.agency09.co/simplifyingtheweb/' target='_blank'>Blog</Link>
              </li>
              <li>
                <Link to='/connect' className={location.pathname === '/connect' ? 'active' : ''}>Connect</Link>
              </li>
            </ul>
          </nav>
          <div className='rightMenu'>
            <div className={`menuBtn ${isMenuOpen ? 'Open' : ''}`} onClick={toggleMenu}>
              <Link><span>Explore</span>  <HiOutlineMenuAlt3 className='mOpen' /></Link>
            </div>
          </div>
        </div>

      </header>

      <div className={`menu_row ${isMenuOpen ? 'Show' : ''}`}>
        <div className="menu09">
          
          
          
          
      <div className='menu09Header'>
          <div className='menu09HeaderLogo'>
            <Link to='/'><img src={AGENCY09logoLight} alt='AGENCY09' /></Link>
          </div>

          <div className='menu09HeaderRight'>

            <div className='menu09HeaderSos'>
              <Link to='https://www.linkedin.com/company/agency09/' target='_blank'>LinkedIn</Link>
              <Link to='https://www.instagram.com/agency09/' target='_blank'>Instagram</Link>
              <Link to='https://www.youtube.com/channel/UCT7wE543Vl0LSrpCmpMzZrg' target='_blank'>YouTube</Link>
              <Link to='https://twitter.com/AGENCY09' target='_blank'>X</Link>
            </div>

            <div className={`menuBtn ${isMenuOpen ? 'Open' : ''}`} onClick={toggleMenu}>
                  <Link><IoCloseOutline className='mClose' /></Link>
            </div>
          </div>

      </div>

          
          
          <div className='container'>
     
     

          <div className='menu09Content'>

            <div className='menu09Item menu09Item01'>
              <ul>
                <li><Link className={`minFont ${location.pathname === '/about' ? 'active' : ''}`} to='/about'  >About</Link></li>
                <li><Link className={`minFont ${location.pathname === '/work' ? 'active' : ''}`} to='/work/case-studies'>Work</Link></li>
                <li><Link className={`minFont ${location.pathname === '/careers' ? 'active' : ''}`} to='/careers'>Careers <span className='sideFont'>Hiring!</span></Link></li>
                <li><Link className='minFont' to='https://www.agency09.co/simplifyingtheweb/' target='_blank'>Simplifyingtheweb  <span className='sideFont'>Blog</span></Link></li>
                <li><Link className={`minFont ${location.pathname === '/connect' ? 'active' : ''}`} to='/connect'>Connect</Link></li>
              </ul>
            </div>

            <div className='menu09Item menu09Item02'>
              <h2 className='minFont'>Solutions</h2>
              <ul>
                <li><Link className={location.pathname === '/solutions/tech' ? 'active' : ''} to='/solutions/tech'>Tech</Link></li>
                <li><Link className={location.pathname === '/solutions/content' ? 'active' : ''} to='/solutions/content'>Content</Link></li>
                <li><Link className={location.pathname === '/solutions/design' ? 'active' : ''} to='/solutions/design'>Design</Link></li>
                <li><Link className={location.pathname === '/solutions/media' ? 'active' : ''} to='/solutions/media'>Media</Link></li>
                <li><Link className={location.pathname === '/solutions/production' ? 'active' : ''} to='/solutions/production'>Production</Link></li>
                <li><Link className={location.pathname === '/solutions/Keyword' ? 'active' : ''} to='/solutions/keyword'>Keyword</Link></li>
              </ul>
            </div>

            <div className='menu09Item menu09Item03'>
                <ul>
                  <li>
                      <div className='NBItemTitle'>
                        <span>Blog </span>  
                        <Link to='https://www.agency09.co/simplifyingtheweb/' target='_blank' ></Link>
                      </div>

                      <div className='NBItemContent'>
                      <Link>
                          <div className='NBItemImg'>
                            <img src={sportday} alt='{blog}' />
                          </div>
                          <div className='NBItemText'>
                            <p>Bat, Ball & Balle Balle</p>
                          </div>
                        </Link>
                      </div>
                  </li>

                  <li>
                      <div className='NBItemTitle'>
                        <span className='o0'>Blog</span> 
                        <Link to='/work'></Link>
                      </div>

                      <div className='NBItemContent'>
                        <Link>
                          <div className='NBItemImg'>
                            <img src={ideasPerform1} alt='{caseStudies}' />
                          </div>
                          <div className='NBItemText'>
                            <p>Tata Motors enlists A09 for their Smart City Project website</p>
                          </div>
                        </Link>
                      </div>
                  </li>
                </ul>
            </div>

          </div>


          <div className='menu09Content2'>

            <div className='menu09Item menu09Item01'>
              <ul>
              <li><Link to='/connect#form'>REQUEST A SERVICE</Link></li>
              <li><Link to='/connect#form'>JOIN THE TEAM</Link></li>
              <li><Link to='/connect#form'>PARTNER WITH US</Link></li>
              </ul>
            </div>

            <div className='menu09Item menu09Item02'>
              <div>
                <h4>Start a conversation</h4>
                <p><Link to='mailto:info@agency09.in'>info@agency09.in</Link></p>
              </div>
            </div>

            <div className='menu09Item menu09Item03'>
              <h4>Address</h4>
              <div className='addressTab'>
                <Tabs>
                  <TabList>
                    <Tab>Mumbai</Tab> | <Tab>Dubai</Tab> | <Tab>Australia</Tab>
                  </TabList>

                  <TabPanel>
                    <p>101, Meghdoot, Junction of Linking & Turner Rd., Above Bank of Baroda Bank, Opp HP Petrol Pump, Bandra West, Mumbai - 400 050</p>
                    <Link to='https://maps.google.com/maps?ll=19.059619,72.836396&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=718129958178962330' target='_blank'>View Map</Link>  
                  </TabPanel>

                  <TabPanel>
                    <p>Media City,<br/>Dubai </p>
                  </TabPanel>

                  <TabPanel>
                    <p>North Adelaide,<br/>Adelaide 5006</p>
                  </TabPanel>

                </Tabs>
              </div>
            </div>

          </div>

        </div></div>
      </div>

    </>
  )
}

export default Header;
