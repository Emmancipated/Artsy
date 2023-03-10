import React from "react";
import {featuredProducts} from "../data/featuredproducts";
import { ForwardArrowSvg } from "./Svgs";
import auctionLink from "../image/Rectangle 239.png"
import creatoranimeOne from "../image/Rectangle 300.png"
import creatoranimeTwo from "../image/Rectangle 299.png"
import creatoranimeThree from "../image/Rectangle 301.png"

function HomepageArticle() {
  
  return <>
    <section className="featured-products-container">
      <h2>Featured products</h2>
      {featuredProducts.map(product => 
      <article className="article-container" key={product.key}>
        <div className="featured-image"><img src={product.image} alt="featured" /></div>
        <div className="featured-article-conetent-container">
          <h2 className="featured-header">{product.name}</h2>
          <p>{product.description}</p>
          <div className="contributors-container">
            <div className="contributors" > {product.contributors.map(contributor=> <img key={contributor[0]} className="contributors-image" src={contributor[1]} alt="contributor" />)}</div>
            <p>{product.contributors.length} major contributors</p>
          </div>
          <div className="see-more"><ForwardArrowSvg/></div>
        </div>
      </article>)
      }
    </section>
    
    <section className="auction-link-container">
      <div className="auction-link-image"><img src={auctionLink} alt="auction-link-container" />
        <article className="auction-link-box">
          <div className="auction-link-group">
            <div className="auction-link-dot"></div>
            <div><h3>MONALISA REDEFINED IN STYLE.</h3></div>
            <div>01</div>
            <div>
              <h4>Start on : 08:00 GTS . Monday</h4>
              <p>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND 
                AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
              </p>
            </div>
          </div>
          <div className="auction-link-button-box">
            <a href="/auctions">See more</a>
            <button>Set a reminder</button>
          </div>
        </article>
      </div> 
    </section>

    <section className="explore-container">
      <div className="explore-wrapper">
        <div className="explore">
          <h3><a href="/marketplace">Explore marketplace</a></h3>
          <a href="/marketplace"><ForwardArrowSvg/></a>
        </div>
      </div>
      
      <div className="explore-wrapper">
        <div className="explore">
          <h3><a href="/auctions">See auctions</a></h3>
          <a href="/auctions"><ForwardArrowSvg/></a>
        </div>
      </div>
    </section>

    <section className="weekly-creators-container">
      <div className="weekly-creators-wrapper">
        <div className="weekly-creators-header">
          <h2>TOP CREATORS OF THE WEEK</h2>
          <div className="weekly-creators-side">
            <div>Editorials</div>
            <div><span></span> Fashion</div>
            <div><span></span> Life</div>
          </div>
        </div>
        <p>“Everything always looked better in black and white. 
          Everything always  as if it were the first time; 
          there’s always more people in a black and white photograph. 
          It just makes it seem that there were more people at a gig, 
          more people at a football match, than with colour photography. 
          Everything looks more exciting.”– Jack Lowden
        </p>
        <span className="circa">CIRCA</span>
        <span className="circa-number">1985</span>
      </div>
      <div className="creators-animation">
        <img src={creatoranimeOne} alt="creators" />
        <img src={creatoranimeTwo} alt="creators" />
        <img src={creatoranimeThree} alt="creators" />
      </div>
    </section>
  </>
}

export default HomepageArticle;