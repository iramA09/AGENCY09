import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ourwork2 from '../../../Assets/Images/work/ourwork-2.jpg';
import ourwork3 from '../../../Assets/Images/work/ourwork-3.jpg';
import ourwork4 from '../../../Assets/Images/work/ourwork-4.jpg';
import mahindra_tsubaki1 from '../../../Assets/Images/work/mahindra_tsubaki/mahindra_tsubaki1.png';

// Tech
export const techData = [
    {
        id: 1,
        title: 'Making Complaint Management Simpler for Mahindra Tsubaki',
        tags: [
            { name: 'Software', link: '/' },
            { name: 'Digital Process Automation', link: '/' }
        ],
        image: mahindra_tsubaki1,
        link: '/work/case-studys/mahindra-tsubaki',
        brand: 'Mahindra Tsubaki',
        department: 'Tech'
    },
    {
        id: 2,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        tags: [
            { name: 'Brand Strategy', link: '/' },
            { name: 'Print AD', link: '/' },
            { name: 'Digital', link: '/' }
        ],
        image: ourwork2,
        link: '/work/case-studys/bitsom',
    },
    {
        id: 3,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        tags: [
            { name: 'Brand Strategy', link: '/' },
            { name: 'Print AD', link: '/' },
            { name: 'Digital', link: '/' }
        ],
        image: ourwork3,
        link: '/work/case-studys/demo'
    },
    {
        id: 4,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        tags: [
            { name: 'Brand Strategy', link: '/' },
            { name: 'Print AD', link: '/' },
            { name: 'Digital', link: '/' }
        ],
        image: ourwork4,
        link: '#'
    },
    {
        id: 5,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        tags: [
            { name: 'Brand Strategy', link: '/' },
            { name: 'Print AD', link: '/' },
            { name: 'Digital', link: '/' }
        ],
        image: ourwork4,
        link: '#'
    },
    {
        id: 6,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        tags: [
            { name: 'Brand Strategy', link: '/' },
            { name: 'Print AD', link: '/' },
            { name: 'Digital', link: '/' }
        ],
        image: ourwork4,
        link: '#'
    },
    {
        id: 7,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        tags: [
            { name: 'Brand Strategy', link: '/' },
            { name: 'Print AD', link: '/' },
            { name: 'Digital', link: '/' }
        ],
        image: ourwork4,
        link: '#'
    },
    {
        id: 8,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        tags: [
            { name: 'Brand Strategy', link: '/' },
            { name: 'Print AD', link: '/' },
            { name: 'Digital', link: '/' }
        ],
        image: ourwork4,
        link: '#'
    },
    {
        id: 9,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        tags: [
            { name: 'Brand Strategy', link: '/' },
            { name: 'Print AD', link: '/' },
            { name: 'Digital', link: '/' }
        ],
        image: ourwork4,
        link: '#'
    },
    {
        id: 10,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        tags: [
            { name: 'Brand Strategy', link: '/' },
            { name: 'Print AD', link: '/' },
            { name: 'Digital', link: '/' }
        ],
        image: ourwork4,
        link: '#'
    },
];

// State for each tab

const Tech = () => {
    const [visibleTechItems, setVisibleTechItems] = useState(5);
    const loadMoreTechItems = () => {
        setVisibleTechItems((prev) => prev + 5);
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
