import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const anim = (variants) => {
    return {
        initial: 'initial',
        animate: 'enter',
        exit: 'exit',
        variants
    };
};


const customLocations  = {
    "/": ".Home",
    "/about": ".About",
    "/work": ".Work",
    "/service/design": ".Design",
    "/connect": ".Connect",
    "/work-with-us": ".WorkWithUs",
    "/join-the-team": ".JoinTheTeam",
    "/careers": ".Careers",
    "/solutions/tech": ".Tech",
    "/solutions/content": ".Content",
    "/solutions/brand-design": ".BrandDesign",
    "/solutions/media": ".Media",
    "/solutions/production": ".Production",
    "/solutions/logix": ".Logix",
    "/sitemap": ".Sitemap09",
    "/error": ".404",
}

export default function Transitions({ children }) {
    const location = useLocation(); 
    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0
    });

    useEffect(() => {
        const resize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    const text = {
        initial: {
            opacity: 1,
        },
        enter: {
            opacity: 1,
            top: -100,
            transition: {
                duration: .75,
                delay: .2,
                ease: [0.76, 0, 0.24, 1]
            },
            transitionEnd: {
                top: "-100%",
                opacity: 0
            }
        },
        exit: {
            opacity: 0,
            top: "50%",
            transition: {
                duration: .5,
                delay: .4,
                ease: [0.33, 1, 0.68, 1]
            },
        }
    }


    return (
        <div className='page curve'>
            <motion.div {...anim(text)} className='locationName'>{customLocations[location.pathname]}</motion.div>
            
            <div style={{ opacity: dimensions.width > 0 ? 0 : 1 }} className='backgroundSVG'/>
            {dimensions.width > 0 && <SVG {...dimensions}/> }
            {children}
          
        </div>
    );
}

const SVG = ({ width, height }) => {
    const initialPath = `
    M0 300
    Q${width/2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width/2} ${height + 600} 0 ${height + 300}
    L0 0
    `
    const targetPath = `
    M0 300
    Q${width/2} 0 ${width} 300
    L${width} ${height}
    Q${width/2} ${height} 0 ${height}
    L0 300
    `
    const curve = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: {
                duration: .75,
                delay: .3,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        exit: {
            d: initialPath,
            transition: {
                duration: .75,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }


    const slide = {
        initial: {
            top: "-300px",
        },
        enter: {
            top: "-100vh",
            transition: {
                duration: 0.75,
                delay: 0.7,
                ease: [0.76, 0, 0.24, 1]
            },
            transitionEnd: {
                top: "100vh"
            }
        },
        exit: {
            top: "-300px",
            transition: {
                duration: 0.75,
                ease: [0.76, 0, 0.24, 0.1]
            }
        }
    };

    return (
        <motion.svg className='curveSVG' {...anim(slide)}>
            <motion.path {...anim(curve)}></motion.path>
        </motion.svg>
    );
};
