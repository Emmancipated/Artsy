// const slider = document.querySelector(".shop-schedule");
// const barr = document.querySelector(".barr");

// slider.addEventListener("click", (event) => {
//   let sliderRect = slider.getBoundingClientRect();
//   let clickX = event.clientX;
//   let newLeft = clickX - sliderRect.left - (barr.offsetWidth / 2);
//   barr.style.left = `${newLeft}px`;
// });

// import { useState } from "react";
import {products} from "../data/products";

function CartPage({cartItemInState, increaseQuantity, decreaseQuantity, deleteItem, setTargetComponentRight, targetComponent, targetComponentRef}) {
  const componentIndex = 0;

  const handleTransition = () => {
    const container = document.querySelector(".shop-schedule-wrapper");
    const shop = document.querySelector(".shop-schedule-shop");
    const schedule = document.querySelector(".shop-schedule-schedule");
    const barr = document.querySelector(".barr");

    if (container && barr && shop && schedule) {
      container.addEventListener("click", (event) => {
        let target = event.target;
        if (target === shop) {
          shop.classList.add("activee");
          schedule.classList.remove("activee");
          barr.style.left = "0";
          barr.innerHTML = "Shop";
        } else if (target === schedule) {
          shop.classList.remove("activee");
          schedule.classList.add("activee");
          barr.style.left = "51%";
          barr.innerHTML = "Scheduled";
        }
      });
    } else {
      console.log("failed");
    }
  }

  const getCartItemId = cartItemInState.map((item) => {
    return item.id; 
  })

  const getProduct = products.filter(({ key }) => {
    return getCartItemId.includes(key);                  
  }); 

  const itemCost = getProduct.map((product, i) => {
      return product.price * cartItemInState[i].quantity;
  })

  let totalPrice = itemCost.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  return <section id="CartPage" ref={componentIndex === targetComponent ? targetComponentRef : null}>
          <div className="link-history">
            <span>Home/</span>
            <span>Marketplace/</span>
            <span>Cartpage</span>
          </div>

          <div className="shop-schedule-container">
            <div className="shop-schedule-wrapper">
                <div className="shop-schedule" onClick={() => handleTransition()}>
                  <div className="shop-schedule-shop">
                    Shop
                  </div>
                  <div className="shop-schedule-schedule">
                    Scheduled
                  </div>
                  <div className="barr">Shop</div>
                </div>
              </div>
            </div>

          <main className="CartPage-items">
            {cartItemInState.map((cartItem) => {
              let [currentProduct] = products.filter(product => product.key === cartItem.id);
    return  <div className="cartitem-container" key={cartItem.id}>
              <div className="cartitem-detail-container">
                <div className="cartitem-image">
                  <img src={currentProduct.image} alt="cart-item" />
                </div>
                <div className="cartitem-detail">
                  <h4>{currentProduct.categories}</h4>
                  <h2>{currentProduct.name}</h2>
                  <div className="cartitem-count">
                    <div className="cartitem-controls decrease" onClick={() => decreaseQuantity(currentProduct.key)}>-</div>
                    <div className="cartitem-controls item-count">{cartItem.quantity}</div>
                    <div className="cartitem-controls increase" onClick={() => increaseQuantity(currentProduct.key)}>+</div>
                  </div>
                </div>
              </div>

              <div className="cartitem-closure-price-container">
                <div className="cartitem-control-wrapper">
                  <div className="cartitem-closure-control" onClick={() => deleteItem(currentProduct.key)}>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                  <h3 className="cartitem-price">
                    ${(currentProduct.price * cartItem.quantity).toFixed(2)}
                  </h3>
              </div>
            </div>
            })}
          </main>

          <aside className="Checkout-total">
            <div className="Checkout-total-pricing">
              <div className="Checkout-total-pricing-item">
                <div className="Checkout-total-pricing-name">Products in cart: </div>
                <h4 className="Checkout-total-pricing-value">{cartItemInState.length} items</h4>
              </div>
              <div className="Checkout-total-pricing-item">
                <div className="Checkout-total-pricing-name">Shipping: </div>
                <h4 className="Checkout-total-pricing-value">${ (totalPrice * 0.05).toFixed(2) }</h4>
              </div>
              <div className="Checkout-total-pricing-item">
                <div className="Checkout-total-pricing-name">Total: </div>
                <h4 className="Checkout-total-pricing-value">${totalPrice.toFixed(2)}</h4>
              </div>
              <div className="Checkout-total-pricing-item">
                <h3 className="Checkout-total-pricing-name">Grand Total: </h3>
                <h3 className="Checkout-total-pricing-value">${(totalPrice + (totalPrice * 0.05)).toFixed(2) }</h3>
              </div>
            </div>

            <div className="Checkout-total-links">
              <div className="top-bids-button">
                <button onClick={setTargetComponentRight}>Proceed to shipping</button>
              </div>
              <div className="Drop-more-link">
                <a href="/marketplace">Continue shopping</a>
              </div>
            </div>
          </aside>
        </section>

        
}

export default CartPage;