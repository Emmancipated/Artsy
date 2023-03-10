import React, { useState, useRef, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CircleBackwardSvg, CircleForwardSvg, CoinsymbolSvg, LessRedHeartSvg } from './Svgs';

function MoreCollections(props) {
  const { cleanedCollections } = props;
  const [targetComponent, setTargetComponent] = useState(0);
  const targetComponentRef = useRef(null);
  const wrapperRef = useRef(null);

  const scrollToTargetComponent = useCallback(() => {
    const targetComponent = targetComponentRef.current;
    const wrapper = wrapperRef.current;
    if (wrapper && targetComponent) {
      wrapper.scrollTo({
        top: 0,
        left: targetComponent.offsetLeft,
        behavior: "smooth"
      });
    }
  }, []);

  const handlePrev = () =>{
    if (targetComponent === 0) {
      return null;
    } else {
      setTargetComponent(targetComponent - 1);
    }
  };

  const handleNext = () => {
    if (targetComponent === cleanedCollections.length - 1) {
      return null;
    }
    else {
      setTargetComponent(targetComponent + 1);
    }
  };

  useEffect(scrollToTargetComponent, [targetComponent]);
  
  return <div id="MoreCollections">
          <div className="morefromcollection-text">More from this collection</div>
          {/* <div className="more-collections">More from this collection</div> */}
          <div className="productpage-slider-container">
          <div className="clickleft" onClick={handlePrev}> <CircleBackwardSvg/> </div>
          <div className="productpage-slider" ref={wrapperRef}>
          {cleanedCollections.map((item, i) => 
            <div className="top-bids-upper" key={item.key} ref={i === targetComponent ? targetComponentRef : null}>
              <div className="top-bids-like"> 
                <div><LessRedHeartSvg /></div>
              </div>
              <NavLink to={`/marketplace/${item.name}`}><img src={item.image} alt="topbid" /></NavLink>
              <div className="top-bids-pricing">
                <div className="out-of-box">{item.name}</div>
                <div className="top-bids-price"><CoinsymbolSvg/> {item.crypto}</div>
              </div>
            </div>
          )}
          </div>
          <div className="clickright" onClick={handleNext}> <CircleForwardSvg /> </div>
        </div>
  </div>
}

export default MoreCollections;
