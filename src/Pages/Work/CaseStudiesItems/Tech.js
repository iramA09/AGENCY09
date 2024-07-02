import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TataMotors from '../../../Assets/Images/work/TataMotors.jpg';
import Ryan from '../../../Assets/Images/work/Ryan.jpg';
import GroupSoft from '../../../Assets/Images/work/GroupSoft.jpg';
import Siyarams from '../../../Assets/Images/work/siyarams.jpg';
import Bitspilani from '../../../Assets/Images/work/Bitspilani.jpg';
import godrejlaffaire from '../../../Assets/Images/logos/work/fashion_lifestyle/godrej-laffaire.png';
import barc from '../../../Assets/Images/logos/work/others/barci.png';
import Tribevibe from '../../../Assets/Images/logos/work/others/tribe-vibe.png';
import RGI from '../../../Assets/Images/logos/work/BFSI/rgi.png';
import lakme from '../../../Assets/Images/logos/work/fashion_lifestyle/lakme.png';
import americanTourister from '../../../Assets/Images/logos/work/retail_fmcg/american-tourister.png';



// Tech
export const techData = [
    {
        id: 1,
        title: "Driving Visibility and Engagement for Tata Motors' Commercial Vehicle Lineup",
        tags: [
            { name: 'Digital Strategy', link: '' },
            { name: 'Web Development', link: '' }
        ],
        image: TataMotors,
        link: '/work/case-studys/tata-trucks',
        brand: 'TATA Trucks',
        department: 'Tech'
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
        id: 5,
        title: 'Transforming Digital Presence: Modern Website for India’s #1 Non-Govt. Technical Institute, BITS Pilani',
        tags: [
            { name: 'Web Design', link: '' },
            { name: 'Web Development', link: '' },
            { name: 'UI/UX Design', link: '' }
        ],
        image: Bitspilani,
        link: '/work/case-studys/bits-pilani',
        brand: "Bits Pilani",
        department: 'Tech'
    },

    {
        id: 6,
        title: 'Unearthing India’s Next Big Content Creator with Godrej L’Affaire Select',
        tags: [
            { name: 'Digital Strategy', link: '' },
            { name: 'IP Building', link: '' },
            { name: 'Community Engagement', link: '' }
        ],
        image: godrejlaffaire,
        link: '/work/case-studys/godrej-laffaire',
        brand: "Godrej Laffaire",
        department: 'Tech'
    },

    {
        id: 7,
        title: 'Visualizing Insights: Award-Winning Yearbook for BARC India',
        tags: [
            { name: 'Data Visualization', link: '' },
            { name: 'Report Design', link: '' }
        ],
        image: barc,
        link: '/work/case-studys/barc-india-yearbook',
        brand: "BARC India Yearbook",
        department: 'Tech'
    },

    {
        id: 8,
        title: 'Empowering Campus Influencers: Tech-Driven Ambassador Program for TribeVibe',
        tags: [
            { name: 'Tech-Based Program Strategy', link: '' },
            { name: 'Development', link: '' }
        ],
        image: Tribevibe,
        link: '/work/case-studys/tribevibe',
        brand: "Tribevibe",
        department: 'Tech'
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
        department: 'Tech'
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
        department: 'Tech'
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
        department: 'Tech'
    },



];

// State for each tab

const Tech = () => {
    const [visibleTechItems, setVisibleTechItems] = useState(4);
    const loadMoreTechItems = () => {
        setVisibleTechItems((prev) => prev + 4);
    };

  return (
    <>
        <section className='ourWork'>
        <div className='workGrid'>
            {techData.slice(0, visibleTechItems).map((item) => (
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
        {visibleTechItems < techData.length && (
            <div className='center btnSpaceEx'>
                <button onClick={loadMoreTechItems} className="loadMoreButton btnDark fontM ripple-button">See More Work</button>
            </div>
        )}
        </section>
    </>
  )
}

export default Tech
