import React, { useRef, useEffect } from 'react';

const SVGCurveLine = () => {
  const path = useRef(null);
  let progress = 0;
  let time = Math.PI / 2;
  let reqId = null;
  let x = 0.5;

  useEffect(() => {
    setPath(progress);

    return () => {
      if (reqId) {
        window.cancelAnimationFrame(reqId);
      }
    };
  }, []);

  const setPath = (progress) => {
    if (path.current) {
      const { innerWidth } = window;
      const width = innerWidth * 0.90;
      path.current.setAttributeNS("", "d", `M0 50 Q${width * x} ${50 + progress} ${width} 50`);
    }
  };

  const manageMouseEnter = () => {
    if (reqId) {
      window.cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const { left, width } = path.current.getBoundingClientRect();
    x = (clientX - left) / width;
    progress = movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    time += 0.2;
    setPath(newProgress);
    progress = lerp(progress, 0, 0.025);
    if (Math.abs(progress) > 0.75) {
      reqId = window.requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className='line' onMouseEnter={manageMouseEnter}>
      <div className='box' onMouseMove={manageMouseMove} onMouseLeave={manageMouseLeave}></div>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
};

export default SVGCurveLine;
