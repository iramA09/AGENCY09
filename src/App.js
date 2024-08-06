import { Routes, Route, useLocation } from 'react-router-dom'
import React from 'react'
import './Assets/Sass/Style.scss'
import Home from './Pages/Home'
import About from './Pages/About'
import Connect from './Pages/Connect'
import WorkWithUs from './Pages/WorkWithUs'
import JoinTheTeam from './Pages/JoinTheTeam'
import Careers from './Pages/Careers'
import Testimonials from './Pages/Testimonials'
import Tech from './Pages/Solutions/Tech'
import Content from './Pages/Solutions/Content'
import Design from './Pages/Solutions/Design'
import Media from './Pages/Solutions/Media'
import Production from './Pages/Solutions/Production'
import Keyword from './Pages/Solutions/Keyword'
import CaseStudies from './Pages/Work/CaseStudies'
import OurClients from './Pages/Work/OurClients'
import Ryangroup from './Pages/Work/CaseStudy/Ryangroup'
import TataTrucks from './Pages/Work/CaseStudy/TataTrucks'
import Siyaram from './Pages/Work/CaseStudy/Siyaram'
import Groupsoft from './Pages/Work/CaseStudy/Groupsoft'
import Bitspilani from './Pages/Work/CaseStudy/Bitspilani'
import GodrejLaffaire from './Pages/Work/CaseStudy/GodrejLaffaire'
import BARCIndiaYearbook from './Pages/Work/CaseStudy/BARCIndiaYearbook'
import Tribevibe from './Pages/Work/CaseStudy/Tribevibe'
import ProductCommunicationforRelianceGeneralInsurance from './Pages/Work/CaseStudy/ProductCommunicationforRelianceGeneralInsurance'
import LakmeFashionWeek from './Pages/Work/CaseStudy/LakmeFashionWeek'
import AmericanTourister from './Pages/Work/CaseStudy/AmericanTourister'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import BlogDetail from './Pages/Blog/BlogDetail'
import Blog from './Pages/Blog/Blog'
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
          <Route exact path='/testimonials' element={<Testimonials />} />
          <Route exact path='/solutions/tech' element={<Tech />} />
          <Route exact path='/solutions/content' element={<Content />} />
          <Route exact path='/solutions/design' element={<Design />} />
          <Route exact path='/solutions/media' element={<Media />} />
          <Route exact path='/solutions/production' element={<Production />} />
          <Route exact path='/solutions/keyword' element={<Keyword />} />
          <Route exact path='/work/case-studies/tata-trucks' element={<TataTrucks />} />
          <Route exact path='/work/case-studies/ryangroup' element={<Ryangroup />} />
          <Route exact path='/work/case-studies/groupsoft' element={<Groupsoft />} />
          <Route exact path='/work/case-studies/siyaram' element={<Siyaram />} />
          <Route exact path='/work/case-studies/bits-pilani' element={<Bitspilani />} />
          <Route exact path='/work/case-studies/godrej-laffaire' element={<GodrejLaffaire />} />
          <Route exact path='/work/case-studies/barc-india-yearbook' element={<BARCIndiaYearbook />} />
          <Route exact path='/work/case-studies/tribevibe' element={<Tribevibe />} />
          <Route exact path='/work/case-studies/product-communication-for-reliance-general-insurance' element={<ProductCommunicationforRelianceGeneralInsurance />} />
          <Route exact path='/work/case-studies/lakme-fashionweek' element={<LakmeFashionWeek />} />
          <Route exact path='/work/case-studies/american-tourister' element={<AmericanTourister />} />
          <Route exact path='/work/case-studies' element={<CaseStudies />} />
          <Route exact path='/work/our-clients' element={<OurClients />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/sitemap' element={<Sitemap09 />} />
          <Route exact path='*' element={<Error />} />
          <Route exact path='/blog/' element={<Blog />} />
          <Route exact path='/blog/:cat_slug' element={<Blog />} />
          <Route exact path='/blog/blog-detail' element={<BlogDetail />} />
          <Route exact path="/blog/:cat_slug/:post_id" element={<BlogDetail />} /> {/* Dynamic blog detail route */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default App;