import { useEffect, useCallback, useRef, useState } from "react";
import auctionAndDrop from "../data/AuctionandDrop";
import { SlideForwardSvg, SlideBackwardSvg, RedHeartSvg, LessRedHeartSvg } from "../components/Svgs";
import Livebid from "../components/Livebid";
import Morebid from "../components/Morebid";

function AuctionsPage() {
  const auctionArray = auctionAndDrop.filter(auctionItem => auctionItem.type === 'auction');
  const topBids = auctionAndDrop.filter(auctionItem => auctionItem.views > 240);
  const [isLiked, setIsLiked] = useState(null);
  const [moreBid, setMorebid] = useState(null);
  const [openLivebidIndex, setOpenLivebidIndex] = useState(null);
  const [openLivebidType, setOpenLivebidType] = useState(null);
  const [visibleSlide, setVisibleSlide] = useState(0);
  const [targetSlide, setTargetSlide] = useState(0);
  const wrapperRef = useRef(null);
  const targetSlideRef = useRef(null);

 
  const scrollToTargetSlide = useCallback(() => {
    const targetSlide = targetSlideRef.current;
    const wrapper = wrapperRef.current;
    if (wrapper && targetSlide) {
      wrapper.scrollTo({
        top: 0,
        left: targetSlide.offsetLeft,
        behavior: "smooth"
      });
    }
  }, []);

  const useIdle = ({timeout, onIdle}) => {
    const [state, setState] = useState(Object.create(null));
    useEffect(() => {
      const t = setTimeout(onIdle, timeout);
      return () => clearTimeout(t);
        }, [onIdle, timeout, state]);

    const touch = useCallback(() => setState(Object.create(null)), []);
    return touch;
  }

  const finishScrolling = useCallback(() => {
    setTargetSlide(visibleSlide);
    scrollToTargetSlide();
  }, [visibleSlide, scrollToTargetSlide]);

  const touchScroll = useIdle({ timeout: 500, onIdle :finishScrolling});

  const moveLeft = useCallback(targetSlide => Math.max(0, targetSlide - 1), []);

  // const moveRight = useCallback(
  //   targetSlide => Math.min(targetSlide + 1, auctionArray.length - 1),
  //   [auctionArray]
  // );
  const moveRight = useCallback(
    targetSlide => (targetSlide + 1) % auctionArray.length,
    [auctionArray]
  );

  const CountdownTimer = (hours, text) => {
  const [timeLeft, setTimeleft] = useState(hours * 3600);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setInterval(() => {
      setTimeleft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const hoursLeft = Math.floor(timeLeft / 3600);
  const minutesLeft = Math.floor((timeLeft % 3600) / 60);
  const secondsLeft = timeLeft % 60;

  return (
    <div className="timer-wrapper" >
      <div>{text}</div>
      <span className="hour">{hoursLeft} hr : </span>
      <span className="minute">{minutesLeft} mins : </span>
      <span className="second">{secondsLeft}s</span>
    </div>
  )
  };

  const handleScroll = useCallback(() => {
    let { width } = wrapperRef.current.getBoundingClientRect();
    let { scrollLeft } = wrapperRef.current;
    setVisibleSlide(Math.ceil(scrollLeft / width));
    touchScroll();
  }, [touchScroll]);

  useEffect(scrollToTargetSlide, [targetSlide, scrollToTargetSlide]);

  const openModal = (index, type) => {
    setOpenLivebidIndex(index);
    setOpenLivebidType(type);
  }
  const openMorebid = (index) => {
    setMorebid(index);
  }
  const closeModal = () => {
    setOpenLivebidIndex(null);
    setMorebid(null);
  }

  const renderTopBids = () => {
    const handleLike = index => {
      if (isLiked === index) {
        setIsLiked(null);
      } else {
        setIsLiked(index);
      }
    }

    return  topBids.map((topBidsItem, index) => {
      return     <div className="top-bids" key={topBidsItem.key}>
      <div className="top-bids-upper">
        <div className="top-bids-like" key={topBidsItem.key} onClick={() => handleLike(index)}> 
          {index === isLiked ? <div><RedHeartSvg /></div> : <div><LessRedHeartSvg /></div>}
        </div>
        <img src={topBidsItem.image} alt="topbid" onClick={() => openMorebid(index)}/>
        <div className="top-bids-pricing">
          <div className="out-of-box">{topBidsItem.boxIssue}</div>
          <div className="top-bids-price">{topBidsItem.crypto} {topBidsItem.cryptoSign}</div>
        </div>
      </div>
      <div className="top-bids-details">
        <div className="top-bids-creator">Creator: {topBidsItem.creator}</div>
        <div className="top-bids-date">Date: {topBidsItem.date}</div>
      </div>
      <div className="top-bids-bidding-info">
        <div>
          <div className="top-bids-current-bid">Current Bid</div>
          <div className="top-bids-current-price">{topBidsItem.currentCrypto} {topBidsItem.cryptoSign}</div>
        </div>
        <div className="top-bids-button">
          <button>Place bid</button>
        </div>
      </div>
    </div> 
    })
  }

  return <>
    <section id="auctions-page">
      <div className="link-history">
        <span>Home/</span>
        <span>Auctions</span>
      </div>

      <div>
        Here's an overview of products actively on auction, explore!
      </div>
      
      <div className="auction-slide-container">
          <div id="auction-slide-wrapper" tabIndex="0">
            <button className="slide-button slide-left" onClick={() => setTargetSlide(moveLeft)}><SlideBackwardSvg /></button>

            <button className="slide-button slide-right" onClick={() => setTargetSlide(moveRight)}><SlideForwardSvg /></button>
            {/* onScroll={handleScroll} */}
            <div className="auction-image" ref={wrapperRef} onScroll={handleScroll}>
              {auctionArray.map((auctionItem, i) => (
              <div className="auction-image-wrapper"
                key={`slide-${i}`}
                ref={i === targetSlide ? targetSlideRef : null}
              >
                <img src={auctionItem.image} alt="slide" onClick={() => openModal(i, auctionItem.type)}/>
                {CountdownTimer(auctionItem.timeRemaining, auctionItem.text)}
              </div>
              ))}
            </div>
          </div>

          <div className="slider-tracking-wrapper">
          {auctionArray.map((_, i) => {
              return (
                <div
                  key={`slideLink-${i}`}
                  // isActive={visibleSlide === i}
                  onClick={() => setTargetSlide(i)}
                  className={`slider-tracking ${visibleSlide === i ? "Active-slide" : ""}`}
                >
                </div>
              );
            })}
          </div>
      </div>

      <div className="top-bids-container">
        <h3>Top bids from popular creators</h3>

        <div className="top-bids-wrapper">
          {renderTopBids()}
        </div>
      </div>
      {/* <div className="hearted">
      </div> */}
      <Livebid 
        openLivebidIndex={openLivebidIndex}
        openLivebidType={openLivebidType}
        closeModal={closeModal}
        openModal={openModal}
      />

      <Morebid
        moreBid={moreBid}
        closeModal={closeModal}
        openModal={openMorebid}
       />
    </section>
  </>
}

export default AuctionsPage;
