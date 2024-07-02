import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import useLenisScroll from '../Hooks/useLenisScroll';
import { PiArrowCircleRightThin } from "react-icons/pi";
import tatamotors from '../Assets/Images/logos/work/automative/tatamotors.png';

const filteredData = [
    {
        category: 'Tech', 
        logo: tatamotors, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat .”', 
        name: 'Vinay Dholakia', 
        role: 'Head - Digital Marketing & Media'
    },

    {
        category: 'Tech', 
        logo: tatamotors, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat .”', 
        name: 'Vinay Dholakia', 
        role: 'Head - Digital Marketing & Media'
    },
    {
        category: 'Tech', 
        logo: tatamotors, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat .”', 
        name: 'Vinay Dholakia', 
        role: 'Head - Digital Marketing & Media'
    },
    {
        category: 'Tech', 
        logo: tatamotors, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat .”', 
        name: 'Vinay Dholakia', 
        role: 'Head - Digital Marketing & Media'
    },

  ];
const Testimonials = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    
    const filteredMin = filteredData.filter(data => selectedCategory === 'All' || data.category === selectedCategory);

    const [visibleTechItems, setVisibleTechItems] = useState(6);
    const loadMoreTechItems = () => {
        setVisibleTechItems((prev) => prev + 6);
    };

    useLenisScroll();
    return (
        <>
            <Header />
            <div className="spacer"></div>

            <section><div className='container'>
                <div className='aboutS'>  
                <div className='aboutScol'>
                <h1 className='sizeH1 uppercase'>Testimonials</h1>  
                <div className='arrowRightH'><PiArrowCircleRightThin /></div>
                </div>      
                <div className='aboutScol'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries creators of Logix </p>
                </div> 
                </div> 
            </div></section>


            <section><div className='container'>

            <div className='testimonialsPg'>
            <div className='ourClientsLnav'>
                <ul>
                    <li><span className={selectedCategory === 'All' ? 'active' : ''} onClick={() => handleCategoryClick('All')}>All</span></li>
                    <li><span className={selectedCategory === 'Tech' ? 'active' : ''} onClick={() => handleCategoryClick('Tech')}>Tech</span></li>
                    <li><span className={selectedCategory === 'Design' ? 'active' : ''} onClick={() => handleCategoryClick('Design')}>Design</span></li>
                    <li><span className={selectedCategory === 'Content' ? 'active' : ''} onClick={() => handleCategoryClick('Content')}>Content</span></li>
                    <li><span className={selectedCategory === 'Media' ? 'active' : ''} onClick={() => handleCategoryClick('Media')}>Media</span></li>
                    <li><span className={selectedCategory === 'Production' ? 'active' : ''} onClick={() => handleCategoryClick('Production')}>Production</span></li>
                </ul>
            </div>

            <div className='testimonialsPgRow'>
                {filteredMin.slice(0, visibleTechItems).map((data, index) => (
                <div key={index} className={`testimonialsPgCol ${selectedCategory === 'All' || data.category === selectedCategory ? 'show' : ''} ${data.category}`}>
                    <span className="testimonial-logo">
                        <img src={data.logo} alt="" />
                    </span>
                    <span className='testimonialsPgColText'>
                        <p>{data.description}</p>
                        <h3>{data.name}</h3>
                        <h5>{data.role}</h5>
                    </span>
                </div>
                ))}
            </div>

            {visibleTechItems < filteredMin.length && (
                <div className='center btnSpaceEx'>
                    <button onClick={loadMoreTechItems} className="loadMoreButton btnDark fontM ripple-button">LOAD MORE</button>
                </div>
            )}
            
            </div>

        </div></section>

            <Footer />
        </>
    )
}
export default Testimonials
