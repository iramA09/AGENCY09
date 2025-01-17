import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import worknahar from '../../../Assets/Images/work/nahar.jpg';
import workryan from '../../../Assets/Images/work/ryan.jpg';
import workmahindrasolariz from '../../../Assets/Images/work/mahindrasolariz.jpg';
import worksiyarmas from '../../../Assets/Images/work/siyarmas.jpg';

// Keyword
export const KeywordData = [

    {
        id: 1,
        title: 'Massive Organic Growth for Nahar Group’s Search Presence',
        tags: [
            { name: 'Digital Marketing', link: '' },
            { name: 'SEO', link: '' }
        ],
        image: worknahar,
        link: '/work/case-studies/massive-organic-growth-for-nahar-groups-search-presence',
        brand: "Nahar Group’s",
        department: 'Keyword'
    },
    {
        id: 2,
        title: 'Consolidation of 91+ Websites and Tremendous SEO Growth for Ryan Group',
        tags: [
            { name: 'Digital Marketing', link: '' },
            { name: 'SEO', link: '' },
            { name: 'Website Consolidation', link: '' }
        ],
        image: workryan,
        link: '/work/case-studies/consolidation-of-91-plus-websites-and-tremendous-seo-growth-for-ryan-group',
        brand: "Ryan Group",
        department: 'Keyword'
    }, 
    {
        id: 3,
        title: 'Industry Leading Organic Search Results from Scratch for Mahindra Solarize',
        tags: [
            { name: 'Digital Marketing', link: '' },
            { name: 'SEO', link: '' },
            { name: 'Website Launch', link: '' }
        ],
        image: workmahindrasolariz,
        link: '/work/case-studies/industry-leading-organic-search-results-from-scratch-for-mahindra-solarize',
        brand: "Mahindra Solarize",
        department: 'Keyword'
    },
    {
        id: 4,
        title: "Enhancing Organic User Engagement for Siyaram's",
        tags: [
            { name: 'Digital Marketing', link: '' },
            { name: 'SEO', link: '' },
        ],
        image: worksiyarmas,
        link: '/work/case-studies/enhancing-organic-users-engagement-for-siyarams',
        brand: "Siyaram's",
        department: 'Keyword'
    },

];

// State for each tab

const Keyword = () => {
    const [visibleKeywordItems, setVisibleKeywordItems] = useState(5);
    const loadMoreKeywordItems = () => {
        setVisibleKeywordItems((prev) => prev + 5);
    };

  return (
    <>
        <section className='ourWork'>
        <div className='workGrid'>
            {KeywordData.slice(0, visibleKeywordItems).map((item) => (
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
        {visibleKeywordItems < KeywordData.length && (
            <div className='center btnSpaceEx'>
                <button onClick={loadMoreKeywordItems} className="loadMoreButton btnDark fontM ripple-button">See More Work</button>
            </div>
        )}
        </section>
    </>
  )
}

export default Keyword
