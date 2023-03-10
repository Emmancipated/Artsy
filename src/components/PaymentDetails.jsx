import { useState } from "react";
import { walletTypes } from "../data/featuredproducts";
import { SecureLockSvg } from "./Svgs";

function PaymentDetails ({targetComponent, targetComponentRef, handleSuccessPage}) {
  const [selectedWallet, setSelectedWallet] = useState(0);
  const componentIndex = 2;

  const setWallet = (e) => {
    setSelectedWallet(e);
  }

  return<section id="PaymentDetails" ref={componentIndex === targetComponent ? targetComponentRef : null}>
          <div className="link-history">Home/ Marketplace/</div>
          <section className="payment-form-container">

            <aside className="payment-wallet-container">
              <SecureLockSvg/> <span>Secure server</span>
              <div></div>
            </aside>
            <div className="payment-wallet-wrapper">
              <div>
                <input type="radio" name="secure-wallet" id="secure-wallet" />
                <span>Select your wallet</span>
              </div>

              <p className="payment-wallet-text">
              Connect with one of our available wallet providers or add and connect a new wallet.
              </p>

              <div className="payment-wallet-images">
                {walletTypes.map((walletType, index) => <img key={walletType.name} src={walletType.image} alt="wallet-type"  onClick={() => setWallet(index)}/>)}
                <div className="payment-wallet-adder-wrapper">
                  <div className="payment-wallet-adder-control">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>

            <section className="payment-wallet-form-container">
              <aside className="ShippingDetails-post-wrapper">
                <label htmlFor="wallet-type"> Wallet type</label>
                <input type="text" id="wallet-type" name="wallet-type"/>
              </aside>

              <aside className="ShippingDetails-post-wrapper wallet-key-select">
                <div>
                  <label htmlFor="wallet-key"> Key</label>
                  <input type="text" id="wallet-key" name="wallet-key"/>
                </div>
                  <div className="selected-wallet"><img src={walletTypes[selectedWallet].image} alt="" /> </div>
              </aside>

              <aside className="ShippingDetails-post-wrapper">
                <label htmlFor="wallet-expiry-date"> Expiry date</label>
                <input type="text" id="wallet-expiry-date" name="wallet-expiry-date"/>
              </aside>

              <aside className="ShippingDetails-post-wrapper">
                <label htmlFor="wallet-safe-code"> Safe code</label>
                <input type="text" id="wallet-safe-code" name="wallet-safe-code"/>
              </aside>

              <aside className="ShippingDetails-email-wrapper">
                <label htmlFor="email"> Your email</label>
                <input type="email" id="email" name="email"/>
                <input type="checkbox" name="notify" id="notify" /> <span>Save my wallet details & information for future transactions</span> 
              </aside>
            </section>

            <div className="Checkout-total-links">
              <div className="top-bids-button">
                <button onClick={handleSuccessPage}>Checkout</button>
              </div>
            </div>
          </section>
        </section>
}

export default PaymentDetails;