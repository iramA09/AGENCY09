import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mahindra_tsubaki1 from '../../../Assets/Images/work/mahindra_tsubaki/mahindra_tsubaki1.png';

// Content
export const ContentData = [
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
        department: 'Content'
    }
];

// State for each tab

const Content = () => {
    const [visibleContentItems, setVisibleContentItems] = useState(5);
    const loadMoreContentItems = () => {
        setVisibleContentItems((prev) => prev + 5);
    };

  return (
    <>
        <section className='ourWork'>
        <div className='workGrid'>
            {ContentData.slice(0, visibleContentItems).map((item) => (
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
        {visibleContentItems < ContentData.length && (
            <div className='center btnSpaceEx'>
                <button onClick={loadMoreContentItems} className="loadMoreButton btnDark fontM ripple-button">See More Work</button>
            </div>
        )}
        </section>
    </>
  )
}

export default Content
