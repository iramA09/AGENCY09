import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import worksiyarmas from '../../../Assets/Images/work/siyarmas.jpg';
import workdhanvarsha from '../../../Assets/Images/work/dhanvarsha.jpg';
import workjpinfra from '../../../Assets/Images/work/jpinfra.jpg';
import workmchi from '../../../Assets/Images/work/mchi.jpg';
import workaldo from '../../../Assets/Images/work/aldo.jpg';
import workchineswok from '../../../Assets/Images/work/chineswok.jpg';

// Media
export const MediaData = [
    {
        id: 5,
        title: 'Successful Mobile App Download Campaign for Dhanvarsha',
        tags: [
        ],
        image: workdhanvarsha,
        link: '/work/case-studies/successful-mobile-app-download-campaign-for-dhanvarsha',
        brand: "Dhanvarsha",
        department: 'Performance Marketing'
    },
    {
        id: 6,
        title: 'Multichannel Lead Gen Campaign for JP Infra',
        tags: [
        ],
        image: workjpinfra,
        link: '/work/case-studies/multi-channel-lead-gen-campaign-for-jpinfa',
        brand: "JP Infra",
        department: 'Performance Marketing'
    },
    {
        id: 7,
        title: 'Promoting India’s Biggest Award Function for Real Estate: CREDAI MCHI Golden Pillar Awards',
        tags: [
        ],
        image: workmchi,
        link: '/work/case-studies/promoting-indias-biggest-award-function-for-real-estate-credai-mchi-golden-pillar-awards',
        brand: "CREDAI MCHI Golden Pillar Awards",
        department: 'Performance Marketing'
    },
    {
        id: 8,
        title: 'Leveraging Digital to Generate Online Registrations for an Event: MCHI Maha Property Expo',
        tags: [
        ],
        image: workmchi,
        link: '/work/case-studies/leveraging-digital-to-generate-online-registrations-for-an-event-mchi-maha-property-expo',
        brand: "MCHI Maha Property Expo",
        department: 'Performance Marketing'
    },
    {
        id: 9,
        title: "Promoting ALDO's SS'19 and Wedding Collections",
        tags: [
        ],
        image: workaldo,
        link: '/work/case-studies/promoting-aldos-ss19-and-wedding-collections',
        brand: "ALDO's",
        department: "Performance Marketing"
    },
   
    {
        id: 10,
        title: "New Year's Campaign Hits the Mark with Siyaram's: Leveraging Celebrity Power for Maximum Impact",
        tags: [
        ],
        image: worksiyarmas,
        link: '/work/case-studies/new-years-campaign-hits-the-mark-with-siyarams-leveraging-celebrity-power-for-maximum-impact',
        brand: "Siyaram's",
        department: "Performance Marketing"
    },
    {
        id: 10,
        title: "Chinese Wok's Post-Lockdown Revival: Influencer Campaign Boosts Starter Spread",
        tags: [
        ],
        image: workchineswok,
        link: '/work/case-studies/chinese-woks-post-lockdown-revival-influencer-campaign-boosts-starter-spread',
        brand: "Chinese Wok's",
        department: "Performance Marketing"
    },
];

// State for each tab

const Media = () => {
    const [visibleMediaItems, setVisibleMediaItems] = useState(5);
    const loadMoreMediaItems = () => {
        setVisibleMediaItems((prev) => prev + 5);
    };

  return (
    <>
        <section className='ourWork'>
        <div className='workGrid'>
            {MediaData.slice(0, visibleMediaItems).map((item) => (
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
        {visibleMediaItems < MediaData.length && (
            <div className='center btnSpaceEx'>
                <button onClick={loadMoreMediaItems} className="loadMoreButton btnDark fontM ripple-button">See More Work</button>
            </div>
        )}
        </section>
    </>
  )
}

export default Media
