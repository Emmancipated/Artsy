import { useState, useEffect } from "react";
import auctionAndDrop from "../data/AuctionandDrop";
import Footer from "./Footer";
import Livebid from "./Livebid";
import NewsLetter from "./NewsLetter";

const date = new Date();

function Drops () {
  const auctionArray = auctionAndDrop.filter(auctionItem => auctionItem.type === 'drop');
  const [openLivebidIndex, setOpenLivebidIndex] = useState(null);
  const [openLivebidType, setOpenLivebidType] = useState(null);

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

  const EndedTimer = (time) => {
    return (
      <div className="timer-wrapper" >
        <div>Auction Ended</div>
        <span className="hour">{time} hours ago </span>
      </div>
    )
  };

  const convertDateToString = (date, hour) => {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    const monthIndex = date.getMonth();
    let day = date.getDate();
    let hours = hour;
    let ampm = 'am';
    if (hours >= 12) {
      ampm = 'pm';
      hours = hours % 12;
    }
    if (hours === 0) {
      hours = 12;
    }
    return `${monthNames[monthIndex]} ${day} at ${hours} ${ampm} WAT`;
  }
  
  const openModal = (index, type) => {
    setOpenLivebidIndex(index);
    setOpenLivebidType(type);
  }

  const closeModal = () => {
    setOpenLivebidIndex(null);
      // setMorebid(null);
  }

  const getbackgroundColor = (status) => {
    const backgroundColorByStatus = {
      live : '#3EA03B',
      upcoming: '#4693ED',
      ended: '#999EA5'
    }
    return backgroundColorByStatus[status];
  }

  return <section id="Drops">
          <div className="Drops-header-container">
            <h1 className="Drops-header">
              Upcoming drops
            </h1>
            <p>
              You may turn on notifications so that no drop will miss you.
            </p>
            <button>
              Notify me
            </button>
          </div>

          <div className="Drop-items">
              {auctionArray.map((auctionItem, i) => {
                
                if (auctionItem.statusUpdate === 'ended') {
                   return <div className="auction-image-wrapper"
                            key={`slide-${i}`}
                          > 
                            <div className="Drop-image-wrapper">
                            <img src={auctionItem.image} alt="slide" onClick={() => openModal(i, auctionItem.type)}/>
                            {EndedTimer(auctionItem.timeRemaining)}
                            <div className="Drops-status" style={ { 'backgroundColor': getbackgroundColor(auctionItem.statusUpdate) } }>{auctionItem.status}</div>
                            </div>

                            <div className="Drop-detail-wrapper">
                              <div className="Drop-date-time">
                                {convertDateToString(date, auctionItem.timeRemaining)}
                              </div>
                              <h2 className="Drop-tittle">
                                {auctionItem.name}
                              </h2>
                              <div className="Drop-content">
                                {auctionItem.description}
                              </div>
                              <h3 className="Drop-creator">
                                Creator : <span>{auctionItem.creator}</span>
                              </h3>
                              <div className="Drop-more-link">
                                <a href="/auctions">Get Notified</a>
                              </div>
                            </div>
                          </div>

                } else {
                   return <div className="auction-image-wrapper"
                            key={`slide-${i}`}
                          >
                            <div className="Drop-image-wrapper">
                            <img src={auctionItem.image} alt="slide" onClick={() => openModal(i, auctionItem.type)}/>
                            {CountdownTimer(auctionItem.timeRemaining, auctionItem.text)}
                            <div className="Drops-status" style={ { 'backgroundColor': getbackgroundColor(auctionItem.statusUpdate) } }>{auctionItem.status}</div>
                            </div>

                            <div className="Drop-detail-wrapper">
                              <div className="Drop-date-time">
                                {convertDateToString(date, auctionItem.timeRemaining)}
                              </div>
                              <h2 className="Drop-tittle">
                                {auctionItem.name}
                              </h2>
                              <div className="Drop-content">
                                {auctionItem.description}
                              </div>
                              <h3 className="Drop-creator">
                                Creator : <span>{auctionItem.creator}</span>
                              </h3>
                              <div className="Drop-more-link">
                                <a href="/auctions">Get Notified</a>
                              </div>
                            </div>
                          </div>
                  }
              })}
          </div>

          <NewsLetter />
          <Footer />
            
          <Livebid 
            openLivebidIndex={openLivebidIndex}
            openLivebidType={openLivebidType}
            closeModal={closeModal}
            openModal={openModal}
          />
        </section>
}

export default Drops;