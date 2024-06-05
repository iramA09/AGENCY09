import { Routes, Route, useLocation } from 'react-router-dom'
import React from 'react'
import './Assets/Sass/Style.scss'
import Home from './Pages/Home'
import About from './Pages/About'
import Connect from './Pages/Connect'
import WorkWithUs from './Pages/WorkWithUs'
import JoinTheTeam from './Pages/JoinTheTeam'
import Careers from './Pages/Careers'
import Tech from './Pages/Solutions/Tech'
import Content from './Pages/Solutions/Content'
import Design from './Pages/Solutions/Design'
import Media from './Pages/Solutions/Media'
import Production from './Pages/Solutions/Production'
import Keyword from './Pages/Solutions/Keyword'
import Bitsom from './Pages/Work/CaseStudy/Bitsom'
import Demo from './Pages/Work/CaseStudy/Demo'
import MahindraTsubaki from './Pages/Work/CaseStudy/MahindraTsubaki'
import CaseStudies from './Pages/Work/CaseStudies'
import OurClients from './Pages/Work/OurClients'


import Error from './Pages/Error'
import Sitemap09 from './Pages/Sitemap09'


import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();
 
  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/connect' element={<Connect />} />
          <Route exact path='/service/design' element={<Design />} />
          <Route exact path='/work-with-us' element={<WorkWithUs />} />
          <Route exact path='/join-the-team' element={<JoinTheTeam />} />
          <Route exact path='/careers' element={<Careers />} />
          <Route exact path='/solutions/tech' element={<Tech />} />
          <Route exact path='/solutions/content' element={<Content />} />
          <Route exact path='/solutions/design' element={<Design />} />
          <Route exact path='/solutions/media' element={<Media />} />
          <Route exact path='/solutions/production' element={<Production />} />
          <Route exact path='/solutions/keyword' element={<Keyword />} />
          <Route exact path='/work/case-studys/bitsom' element={<Bitsom />} />
          <Route exact path='/work/case-studys/demo' element={<Demo />} />
          <Route exact path='/work/case-studys/mahindra-tsubaki' element={<MahindraTsubaki />} />
          <Route exact path='/work/case-studies' element={<CaseStudies />} />
          <Route exact path='/work/our-clients' element={<OurClients />} />
          
          <Route exact path='/sitemap' element={<Sitemap09 />} />
          <Route exact path='*' element={<Error />} />
        </Routes>
        </AnimatePresence>

    </div>
  );
}
export default App;