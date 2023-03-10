import { DownArrowSvg, HeartSvg } from "./Svgs";


function ProductCard({product, decreaseCount, increaseCount, quantity, onSubmit }) {

return <>
    <div className="link-history">
      <span>Home/</span>
      <span>Marketplace/</span>
      <span>{product.categories}/</span>
      <span>{product.name}</span>
    </div>
    <div className="product-card-container">
      <div className="product-card-image"><img src={product.image} alt="product"/></div>
      <div className="product-card-details">
        <div className="product-details">
          <h4>{product.name}</h4>
          <h4>${product.price}</h4>
        </div>
        <div className="product-details-box">
          <h4>Creator : {product.artist}</h4>
          <div>Made in {product.country}</div>
          <div>Total views : {product.views}</div>
          <div className="count-control"> <span onClick={decreaseCount}>-</span> {quantity} <span onClick={increaseCount}>+</span></div>
          <div className="add-to-cart-container">
            <div><button onClick={onSubmit}>Add to cart</button></div>
            <div className="add-to-cart-heart"><input type="checkbox" id="favourite" /><HeartSvg/></div>
          </div>
        </div>  

            <aside className="product-wrapper">
              <div className="product-detail-headers">
                <h4>Description</h4><DownArrowSvg/>
              </div>
              <input type="checkbox" className="open-filter"/>
              <article className="displayed-filter">
                <div>{product.description}</div>
              </article>
            </aside>

            <aside className="product-wrapper">
              <div className="product-detail-headers">
                <h4>Listing</h4><DownArrowSvg/>
              </div>
              <input type="checkbox" className="open-filter"/>
              <article className="displayed-filter">
                <div>{product.listing}</div> 
              </article>
            </aside>

            <aside className="product-wrapper">
              <div className="product-detail-headers">
                <h4>Status</h4><DownArrowSvg/>
              </div>
              <input type="checkbox" className="open-filter"/>
              <article className="displayed-filter">
                <div>{product.status}</div> 
              </article>
            </aside>
      </div>
    </div>
  </>
}

export default ProductCard;