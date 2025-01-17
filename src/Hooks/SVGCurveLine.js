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


  return (
    <div className='line' >
      <div className='box'></div>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
};

export default SVGCurveLine;
