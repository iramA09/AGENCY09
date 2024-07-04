import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import godrejlaffaire from '../../../Assets/Images/work/Laffaire.jpg';
import RGI from '../../../Assets/Images/work/rgi.jpg';
import lakme from '../../../Assets/Images/work/lakme.jpg';
// Content
export const ContentData = [
    {
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
