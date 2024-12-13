import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TataMotors from '../../../Assets/Images/work/TataMotors.webp';
import Ryan from '../../../Assets/Images/work/Ryan.webp';
import GroupSoft from '../../../Assets/Images/work/GroupSoft.webp';
import Siyarams from '../../../Assets/Images/work/siyarams.webp';
import Bitspilani from '../../../Assets/Images/work/Bitspilani.webp';
import Tribevibe from '../../../Assets/Images/work/TribeVibe.webp';

// Tech
export const techData = [
    {
        id: 1,
        title: "Driving Visibility and Engagement for Tata Motors' Commercial Vehicle Lineup",
        tags: [
            { name: 'Digital Strategy', },
            { name: 'UI/UX', },
            { name: 'Web Development', }
        ],
        image: TataMotors,
        link: '/work/case-studies/tata-trucks',
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
        link: '/work/case-studies/ryangroup',
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
        link: '/work/case-studies/groupsoft',
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
        link: '/work/case-studies/siyaram',
        brand: "Siyaram's",
        department: 'Tech'
    },
    {
        id: 5,
        title: 'Transforming Digital Presence: Modern Website for India’s #1 Non-Govt. Technical Institute, BITS Pilani',
        tags: [
            { name: 'Digital Strategy', },
            { name: 'UI/UX', },
            { name: 'Web Development', }
        ],
        image: Bitspilani,
        link: '/work/case-studies/bits-pilani',
        brand: "Bits Pilani",
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
        link: '/work/case-studies/tribevibe',
        brand: "Tribevibe",
        department: 'Tech'
    },
   


];

// State for each tab

const Tech = () => {
    const [visibleTechItems, setVisibleTechItems] = useState(20);
    const loadMoreTechItems = () => {
        setVisibleTechItems((prev) => prev + 20);
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
                                <img src={item.image} alt={item.title} loading='lazy' />
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
