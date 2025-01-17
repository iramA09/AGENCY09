import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import barc from '../../../Assets/Images/work/BARC.webp';
import workoo from '../../../Assets/Images/work/oo.jpg';

// Tech
export const BrandDesignData = [
    {
        id: 7,
        title: 'Visualizing Insights: Award-Winning Yearbook for BARC India',
        tags: [
            { name: 'Annual Report', },
            { name: 'Book Design', },
            { name: 'Infographics', }
        ],
        image: barc,
        link: '/work/case-studies/barc-india-yearbook',
        brand: "BARC India Yearbook",
        department: 'Design'
    },
    {
        id: 11,
        title: "Octarine Organics: Enchanting Mushroom Magic Box with Innovative Packaging Design",
        tags: [
        ],
        image: workoo,
        link: '/work/case-studies/octarine-organics-enchanting-mushroom-magic-box-with-innovative-packaging-design',
        brand: "Octarine Organics",
        department: "Design"
    },

];

// State for each tab

const BrandDesign = () => {
    const [visibleBrandDesignItems, setVisibleBrandDesignItems] = useState(5);
    const loadMoreBrandDesignItems = () => {
        setVisibleBrandDesignItems((prev) => prev + 5);
    };

  return (
    <>
        <section className='ourWork'>
        <div className='workGrid'>
            {BrandDesignData.slice(0, visibleBrandDesignItems).map((item) => (
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
        {visibleBrandDesignItems < BrandDesignData.length && (
            <div className='center btnSpaceEx'>
                <button onClick={loadMoreBrandDesignItems} className="loadMoreButton btnDark fontM ripple-button">See More Work</button>
            </div>
        )}
        </section>
    </>
  )
}

export default BrandDesign
