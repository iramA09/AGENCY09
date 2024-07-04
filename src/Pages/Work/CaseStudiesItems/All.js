import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TataMotors from '../../../Assets/Images/work/TataMotors.jpg';
import Ryan from '../../../Assets/Images/work/Ryan.jpg';
import GroupSoft from '../../../Assets/Images/work/GroupSoft.jpg';
import Siyarams from '../../../Assets/Images/work/siyarams.jpg';
import Bitspilani from '../../../Assets/Images/work/Bitspilani.jpg';
import Tribevibe from '../../../Assets/Images/work/TribeVibe.jpg';
import americanTourister from '../../../Assets/Images/work/AmericanTourister.jpg';
import godrejlaffaire from '../../../Assets/Images/work/Laffaire.jpg';
import RGI from '../../../Assets/Images/work/rgi.jpg';
import lakme from '../../../Assets/Images/work/lakme.jpg';
import barc from '../../../Assets/Images/work/BARC.jpg';

// Tech
export const allData = [
    {
        id: 5,
        title: 'Transforming Digital Presence: Modern Website for India’s #1 Non-Govt. Technical Institute, BITS Pilani',
        tags: [
            { name: 'Digital Strategy', },
            { name: 'UI/UX', },
            { name: 'Web Development', }
        ],
        image: Bitspilani,
        link: '/work/case-studys/bits-pilani',
        brand: "Bits Pilani",
        department: 'Tech'
    }, {
        id: 6,
        title: 'Unearthing India’s Next Big Content Creator with Godrej L’Affaire Select',
        tags: [
            { name: 'Brand Strategy', },
            { name: 'Community Management', },
            { name: 'IP Creation', }
        ],
        image: godrejlaffaire,
        link: '/work/case-studys/godrej-laffaire',
        brand: "Godrej Laffaire",
        department: 'Content'
    },
   
    {
        id: 2,
        title: 'Streamlining Digital Presence: 100+ Websites & CMS for Ryan International School',
        tags: [
            { name: 'Web Design', link: '' },
            { name: 'Web Development', link: '' },
            { name: 'Content Management Systems', link: '' }
        ],
        image: Ryan,
        link: '/work/case-studys/ryangroup',
        brand: 'Ryan International Group of Institutions',
        department: 'Tech'
    },
    {
        id: 1,
        title: "Driving Visibility and Engagement for Tata Motors' Commercial Vehicle Lineup",
        tags: [
            { name: 'Digital Strategy', },
            { name: 'UI/UX', },
            { name: 'Web Development', }
        ],
        image: TataMotors,
        link: '/work/case-studys/tata-trucks',
        brand: 'TATA Trucks',
        department: 'Tech'
    },
    {
        id: 8,
        title: 'Empowering Campus Influencers: Tech-Driven Ambassador Program for TribeVibe',
        tags: [
            { name: 'Digital Strategy', },
            { name: 'UI/UX', },
            { name: 'Web Development', }
        ],
        image: Tribevibe,
        link: '/work/case-studys/tribevibe',
        brand: "Tribevibe",
        department: 'Tech'
    },
   
   
   
    {
        id: 3,
        title: 'Modernizing Digital Identity: Revamped Website for Global SaaS Company Groupsoft',
        tags: [
            { name: 'Web Design', link: '' },
            { name: 'Web Development', link: '' },
            { name: 'UI/UX Design', link: '' }
        ],
        image: GroupSoft,
        link: '/work/case-studys/groupsoft',
        brand: 'Groupsoft US Inc',
        department: 'Tech'

    },  
    
    
    {
        id: 4,
        title: "Elevating Men's Fashion: A Visually Captivating Website for Siyaram's",
        tags: [
            { name: 'Web Design', link: '' },
            { name: 'Web Development', link: '' },
            { name: 'UI/UX Design', link: '' }
        ],
        image: Siyarams,
        link: '/work/case-studys/siyaram',
        brand: "Siyaram's",
        department: 'Tech'
    },
  
  


    {
        id: 7,
        title: 'Visualizing Insights: Award-Winning Yearbook for BARC India',
        tags: [
            { name: 'Annual Report', },
            { name: 'Book Design', },
            { name: 'Infographics', }
        ],
        image: barc,
        link: '/work/case-studys/barc-india-yearbook',
        brand: "BARC India Yearbook",
        department: 'Design'
    },
  
   

    {
        id: 9,
        title: 'Innovative Product Communication for Enhanced Brand Visibility',
        tags: [
            { name: 'Product Development', link: '' },
            { name: 'Multi-Channel Communication', link: '' }
        ],
        image: RGI,
        link: '/work/case-studys/product-communication-for-reliance-general-insurance',
        brand: "Product Communication for Reliance General Insurance",
        department: 'Content'
    },
    {
        id: 10,
        title: 'Capturing the Glamour: Content Creation and Event Coverage for Lakme Fashion Week',
        tags: [
            { name: 'Content Creation', link: '' },
            { name: 'Event Coverage', link: '' }
        ],
        image: lakme,
        link: '/work/case-studys/lakme-fashionweek',
        brand: "Lakme Fashion Week",
        department: 'Content'
    },
    {
        id: 11,
        title: 'Showcasing Excellence: Captivating Product Films for American Tourister',
        tags: [
            { name: 'Product Film Production', link: '' },
            { name: 'Content Creation', link: '' }
        ],
        image: americanTourister,
        link: '/work/case-studys/american-tourister',
        brand: "American Tourister",
        department: 'Production'
    },

];

// State for each tab

const All = () => {
    const [visibleTechItems, setVisibleTechItems] = useState(20);
    const loadMoreTechItems = () => {
        setVisibleTechItems((prev) => prev + 20);
    };

  return (
    <>
        <section className='ourWork'>
        <div className='workGrid'>
            {allData.slice(0, visibleTechItems).map((item) => (
                <div className='workGridItem' key={item.id}>
                    <div className='workGridItemLink'>
                        <Link to={item.link} className='workGridItemLink'>
                            <div className='cursor09'></div>
                            <div className='workGridItemImg'>
                                <img src={item.image} alt={item.title} />
                                <div className='workGridItemHover'>
                                    <div className='workGridItemHoverIn'>
                                        <h3>{item.title}</h3>
                                        <h4>{item.brand}</h4>
                                        <p>{item.department}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='workGridItemText'>
                                <h3>{item.title}</h3>
                            </div>
                        </Link>
                        <div className='workGridItemTags'>
                            {item.tags.map((tag, index) => (
                                <Link to={tag.link} className='workGridItemTag' key={index}>{tag.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {visibleTechItems < allData.length && (
            <div className='center btnSpaceEx'>
                <button onClick={loadMoreTechItems} className="loadMoreButton btnDark fontM ripple-button">See More Work</button>
            </div>
        )}
        </section>
    </>
  )
}

export default All
