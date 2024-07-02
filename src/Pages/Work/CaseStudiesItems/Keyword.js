import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mahindra_tsubaki1 from '../../../Assets/Images/work/mahindra_tsubaki/mahindra_tsubaki1.png';
import Ryan from '../../../Assets/Images/work/Ryan.jpg';

// Keyword
export const KeywordData = [
    {
        id: 1,
        title: 'Streamlining Digital Presence: 100+ Websites & CMS for Ryan International School',
        tags: [
            { name: 'Web Design', link: '' },
            { name: 'Web Development', link: '' },
            { name: 'Content Management Systems', link: '' }
        ],
        image: Ryan,
        link: '/work/case-studys/ryangroup',
        brand: 'Ryan International Group of Institutions',
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
