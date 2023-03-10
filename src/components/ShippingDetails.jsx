import { useState } from "react";
import {countriesAndCities, walletTypes} from "../data/countriesAndCities";
import { DownArrowSvg } from "./Svgs";
import {products} from "../data/products";


const ShippingDetails = ({ targetComponent, targetComponentRef, setTargetComponentLeft, setTargetComponentRight, cartItemInState}) => {
  const componentIndex = 1;
  const [selectedCountry, setSelectedCountry] = useState("");

  const countrySelect = (e) => {
    setSelectedCountry(e);
  };

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

  return<section id="ShippingDetails" ref={componentIndex === targetComponent ? targetComponentRef : null}>
          <div className="link-history">
            <span>Home/</span>
            <span>Marketplace/</span>
            <span>Shipping</span>
          </div>
          <div className="ShippingDetails-container">
            <div>
            <form>
              <aside className="ShippingDetails-email-wrapper">
                <label htmlFor="email"> Your email</label>
                <input type="email" id="email" name="email"/>
                <input type="checkbox" name="notify" id="notify" /> <span>Get updates about new drops & exclusive offers</span> 
              </aside>

              <aside className="ShippingDetails-wallet-wrapper">
                <label htmlFor="wallets">Choose a wallet</label>
                <div className="ShippingDetails-wallets ShippingDetails-select">
                  <select name="wallets" id="wallets" onChange={(e) => countrySelect(e.target.value)}>
                    <option value="">Select a wallet</option>
                    {walletTypes.map((wallet) => 
                      <option key={wallet.name} value={wallet.name}>{wallet.name}</option>
                    )}
                  </select>
                  <DownArrowSvg/>
                </div>
              </aside>

              <aside className="ShippingDetails-countries-wrapper">
                <label htmlFor="countries">Country</label>
                <div className="ShippingDetails-countries ShippingDetails-select">
                  <select name="countries" id="countries" onChange={(e) => countrySelect(e.target.value)}>
                    <option value="">Select a country</option>
                    {countriesAndCities.map((country) => 
                      <option key={country.country} value={country.country}>{country.country}</option>
                    )}
                  </select>
                  <DownArrowSvg/>
                </div>
              </aside>

              <aside className="ShippingDetails-cities-wrapper">
                <label htmlFor="cities">City</label>
                <div className="ShippingDetails-countries ShippingDetails-select">
                  <select name="cities" id="cities">
                    <option value="">Select a city</option>
                    {countriesAndCities.map((city) => {
                      if (city.country === selectedCountry) {
                        return city.cities.map((availableCity) => <option key={availableCity} value={availableCity} >{availableCity}</option>); 
                      }
                      return null;
                    })}
                  </select>
                  <DownArrowSvg/>
                </div>
              </aside>

              <aside className="ShippingDetails-post-wrapper">
                <label htmlFor="postal"> Postal code</label>
                <input type="number" id="postal" name="postal"/>
              </aside>

              <aside className="ShippingDetails-phone-wrapper">
                <label htmlFor="phone"> Phone number</label>
                <input type="number" id="phone" name="phone"/>
              </aside>
            </form>

            <div className="Checkout-total-links">
              <div className="top-bids-button">
                <button onClick={setTargetComponentRight}>Proceed to payment</button>
              </div>
              <div className="Drop-more-link">
                <div id="back-to-cart" onClick={setTargetComponentLeft}>Go back to cart</div>
              </div>
            </div>
            </div>

            <div id="extra-cart-container">
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
                    <div className="cartitem-controls decrease">-</div>
                    <div className="cartitem-controls item-count">{cartItem.quantity}</div>
                    <div className="cartitem-controls increase">+</div>
                  </div>
                </div>
              </div>

              <div className="cartitem-closure-price-container">
                <div className="cartitem-control-wrapper">
                  <div className="cartitem-closure-control">
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
          </aside>
            </div>
          </div>
        </section>
};

export default ShippingDetails;