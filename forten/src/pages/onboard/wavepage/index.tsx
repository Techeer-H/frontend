import React, { useRef, useEffect } from 'react';
import './styles.css'; // Assuming the CSS file is in the same directory as the component

const WavesComponent: React.FC = () => {
  const starsRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      applyScrollEffect(starsRef, scrollValue);
      function applyScrollEffect(starsRef: any, scrollValue: any) {
        if (starsRef.current) {
          starsRef.current.style.transform = `translateX(${scrollValue * 0.25}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="header">
      {/* Content before waves */}
      <div className="inner-header flex">
        {/* Just the logo.. Don't mind this */}
        <h1>For:Ten</h1>
      </div>

      {/* Waves Container */}
      <div>
        <svg
          className="waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="1" fill="rgba(255,255,255,0.7)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      {/* Waves end */}

      <div className="content flex">
        <p>아래로 스크롤</p>
      </div>
    </div>
  );
};

export default WavesComponent;
