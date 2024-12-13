import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TataMotors from '../../../Assets/Images/work/TataMotors.webp';
import Ryan from '../../../Assets/Images/work/Ryan.webp';
import GroupSoft from '../../../Assets/Images/work/GroupSoft.webp';
import Siyarams from '../../../Assets/Images/work/siyarams.webp';
import Bitspilani from '../../../Assets/Images/work/Bitspilani.webp';
import Tribevibe from '../../../Assets/Images/work/TribeVibe.webp';
import americanTourister from '../../../Assets/Images/work/AmericanTourister.webp';
import godrejlaffaire from '../../../Assets/Images/work/Laffaire.webp';
import RGI from '../../../Assets/Images/work/rgi.webp';
import lakme from '../../../Assets/Images/work/lakme.webp';
import barc from '../../../Assets/Images/work/BARC.webp';
import box from '../../../Assets/Images/work/box.jpg';


import worknahar from '../../../Assets/Images/work/nahar.jpg';
import workryan from '../../../Assets/Images/work/ryan.jpg';
import workmahindrasolariz from '../../../Assets/Images/work/mahindrasolariz.jpg';
import worksiyarmas from '../../../Assets/Images/work/siyarmas.jpg';
import workdhanvarsha from '../../../Assets/Images/work/dhanvarsha.jpg';
import workjpinfra from '../../../Assets/Images/work/jpinfra.jpg';
import workmchi from '../../../Assets/Images/work/mchi.jpg';
import workaldo from '../../../Assets/Images/work/aldo-tmb.jpg';
import workoo from '../../../Assets/Images/work/oo.jpg';
import workcodashop from '../../../Assets/Images/work/codashop/codaShoptm.jpg';
import workchineswok from '../../../Assets/Images/work/chineseWok/chineseWok-tm.jpg';
import worksiyaramedia from '../../../Assets/Images/work/siyaram-tmb.jpg';



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
        link: '/work/case-studies/bits-pilani',
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
        link: '/work/case-studies/godrej-laffaire',
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
        link: '/work/case-studies/ryangroup',
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
        link: '/work/case-studies/tata-trucks',
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
        link: '/work/case-studies/tribevibe',
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
        id: 9,
        title: 'Innovative Product Communication for Enhanced Brand Visibility',
        tags: [
            { name: 'Product Development', link: '' },
            { name: 'Multi-Channel Communication', link: '' }
        ],
        image: RGI,
        link: '/work/case-studies/product-communication-for-reliance-general-insurance',
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
        link: '/work/case-studies/lakme-fashionweek',
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
        link: '/work/case-studies/american-tourister',
        brand: "American Tourister",
        department: 'Production'
    },



    // New

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

    {
        id: 5,
        title: 'Successful Mobile App Download Campaign for Dhanvarsha',
        tags: [
        ],
        image: workdhanvarsha,
        link: '/work/case-studies/successful-mobile-app-download-campaign-for-dhanvarsha',
        brand: "Dhanvarsha",
        department: 'Media'
    },
    {
        id: 6,
        title: 'Multichannel Lead Gen Campaign for JP Infra',
        tags: [
        ],
        image: workjpinfra,
        link: '/work/case-studies/multi-channel-lead-gen-campaign-for-jpinfa',
        brand: "JP Infra",
        department: 'Media'
    },
    {
        id: 7,
        title: 'Promoting India’s Biggest Award Function for Real Estate: CREDAI MCHI Golden Pillar Awards',
        tags: [
        ],
        image: workmchi,
        link: '/work/case-studies/promoting-indias-biggest-award-function-for-real-estate-credai-mchi-golden-pillar-awards',
        brand: "CREDAI MCHI Golden Pillar Awards",
        department: 'Media'
    },
    {
        id: 8,
        title: 'Leveraging Digital to Generate Online Registrations for an Event: MCHI Maha Property Expo',
        tags: [
        ],
        image: workmchi,
        link: '/work/case-studies/leveraging-digital-to-generate-online-registrations-for-an-event-mchi-maha-property-expo',
        brand: "MCHI Maha Property Expo",
        department: 'Media'
    },
    {
        id: 9,
        title: "Promoting ALDO's SS'19 and Wedding Collections",
        tags: [
        ],
        image: workaldo,
        link: '/work/case-studies/promoting-aldos-ss19-and-wedding-collections',
        brand: "ALDO's",
        department: "Media"
    },
   
    {
        id: 10,
        title: "New Year's Campaign Hits the Mark with Siyaram's: Leveraging Celebrity Power for Maximum Impact",
        tags: [
        ],
        image: worksiyaramedia,
        link: '/work/case-studies/new-years-campaign-hits-the-mark-with-siyarams-leveraging-celebrity-power-for-maximum-impact',
        brand: "Siyaram's",
        department: "Media"
    },
    {
        id: 10,
        title: "Chinese Wok's Post-Lockdown Revival: Influencer Campaign Boosts Starter Spread",
        tags: [
        ],
        image: workchineswok,
        link: '/work/case-studies/chinese-woks-post-lockdown-revival-influencer-campaign-boosts-starter-spread',
        brand: "Chinese Wok's",
        department: "Media"
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

    {
        id: 12,
        title: "Codashop Gets Gamers Grooving: Engaging BGMI Players with a Unique Rap Song and Dance Contest",
        tags: [
        ],
        image: workcodashop,
        link: '/work/case-studies/codashop-gets-gamers-grooving-engaging-bgmi-players-with-a-unique-rap-song-and-dance-contest',
        brand: "Codashop Gets Gamers Grooving",
        department: "Content"
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
