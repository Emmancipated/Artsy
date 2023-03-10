import { useState } from "react";
import { SendSvg } from "./Svgs";
import { RedHeartSvg, LessRedHeartSvg, LikeBubbles } from "./Svgs";
import auctionAndDrop from "../data/AuctionandDrop";

function Morebid(props) {
  const topBids = auctionAndDrop.filter(auctionItem => auctionItem.views > 240);
  const [isLikede, setIsLikede] = useState(0);

  const likeAnimation = ()=>{
    const likesDisplay = document.querySelectorAll('.hearted svg');
    setIsLikede(1);
    for (let i = likesDisplay.length - 1; i >= 0; i--) {
      const like = likesDisplay[i];
      setTimeout(() => {
        like.classList.add("activeV");
        setTimeout(() => {
          like.classList.remove("activeV");
        }, 500)   
      }, 50 * (likesDisplay.length - 1 - i));
    }
  }

  let currentMorebid = topBids[props.moreBid];

  return <>{(currentMorebid === undefined ? "" :
    <section id="Livebid">
    <div className="Livebid-container">
      <div className="Livebid-image-container" style={{backgroundImage: `url('${currentMorebid.image}')`}}>
        <div className="Livebid-image-header">
          <div className="Livebid-tag">Tag : {currentMorebid.tag}</div>
          <div className="Livebid-view-wrapper">
            <div className="Livebid-status">{currentMorebid.statusUpdate}</div>
            <div className="Livebid-view">{currentMorebid.views}</div>
            <div className="Livebid-control" onClick={props.closeModal}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="Livebid-current-bid">Current bid : {currentMorebid.currentPrice}</div>
        <div className="Livebid-mobile-commenters">
        {currentMorebid.commenters.map((commenter) =><div className="Livebid-commenter" key={commenter.key}>
            <div className="Livebid-commenter-image">
              <img src={commenter.image} alt="commenter" onClick={props.openModal}/>
            </div>
            <div className="Livebid-commenter-name-comment">
              <p>{commenter.name}</p>
              <p>{commenter.biding}</p>
            </div>
          </div>)}
        </div>
        <div className="Livebid-comment-like">
          <div className="Livebid-input">
            <input type="text" placeholder="Join the conversation"/>
            {/* <div className="Livebid-send-icon"> */}
              <SendSvg />
            {/* </div> */}
          </div>
          <div className="Livebid-like" onClick={likeAnimation}>
          {isLikede === 1 ? <div className="Livebid-like-wrapper"><RedHeartSvg /></div > : <div className="Livebid-like-wrapper"><LessRedHeartSvg /></div>}
          <div className="hearted">
            <LikeBubbles/>
          </div>
          </div>
        </div>
      </div>

      <div className="Livebid-content-container">
        <div className="Livebid-mobile-commenters">
        {currentMorebid.commenters.map((commenter) =><div className="Livebid-commenter" key={commenter.key}>
            <div className="Livebid-commenter-image">
              <img src={commenter.image} alt="commenter" onClick={props.openModal}/>
            </div>
            <div className="Livebid-commenter-name-comment">
              <p>{commenter.name}</p>
              <p>{commenter.biding}</p>
            </div>
          </div>)}
        </div>
        <div className="Livebid-comment-like">
          <div className="Livebid-input">
            <input type="text" placeholder="Join the conversation"/>
            {/* <div className="Livebid-send-icon"> */}
              <SendSvg />
            {/* </div> */}
          </div>
          <div className="Livebid-like" onClick={likeAnimation}>
          {isLikede === 1 ? <div className="Livebid-like-wrapper"><RedHeartSvg /></div > : <div className="Livebid-like-wrapper"><LessRedHeartSvg /></div>}
          <div className="hearted">
            <LikeBubbles/>
          </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )}</>  
  
}

export default Morebid;