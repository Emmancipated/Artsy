import { useRef, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddQuantity, RemoveProduct, RemoveQuantity } from "../redux/actions";
import CartPage from "../components/CartPage";
import ShippingDetails from "../components/ShippingDetails";
import PaymentDetails from "../components/PaymentDetails";
import SuccessPage from "../components/SuccessPage";

function Checkout() {
  // const [activeComponent, setActiveComponent] = useState(0);
  const [targetComponent, setTargetComponent] = useState(0);
  const [showSuccessPage, setShowSuccessPage] = useState(0);
  const wrapperRef = useRef(null);
  const targetComponentRef = useRef(null);
  const cartItemInState = useSelector(state => state.products);
  const dispatch = useDispatch();

  const increaseQuantity = (e) => {
    dispatch(AddQuantity(e));
  };
  
  const decreaseQuantity = (e) => {
      dispatch(RemoveQuantity(e));
  };

  const deleteItem = (e) => {
    dispatch(RemoveProduct(e));
  };

  const handleSuccessPage = () => {
    setShowSuccessPage(1);
  };

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

  const moveLeft = (e) => {
    setTargetComponent(e);
  };

  const moveRight = (e) => {
    setTargetComponent(e);
  };

  setTimeout(() => {
    const trackLongBar = document.querySelector(".Checkout-tracker-longbar");
    const runningBar = document.querySelector(".Checkout-tracker-running-bar");
    if (trackLongBar && runningBar && targetComponent === 0) {
      runningBar.style.left = "0";
    } else if (trackLongBar && runningBar && targetComponent === 1) {
      runningBar.style.left = "33%";
    } else {
      runningBar.style.left = "66.6%";
    }
  }, 5);

  useEffect(scrollToTargetComponent, [targetComponent, scrollToTargetComponent]);

  return cartItemInState.length > 0 ? <>
        <div className="text-container">
          <div className="Checkout-tracker-container">
            <div className="Checkout-tracker-wrapper">
              <div className="cartpage-block">CartPage</div>
              <div className="shipping-block">Shipping</div>
              <div className="payment-block">Payment</div>
            </div>
            <div className="Checkout-tracker-running-bar"></div>
            <div className="Checkout-tracker-longbar"></div>
          </div>

          <section id="Checkout" ref={wrapperRef}>
            {showSuccessPage === 0 ? 
            <div className="Checkout-wrapper">
              <CartPage
                cartItemInState={cartItemInState}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                deleteItem={deleteItem}
                setTargetComponentRight={()=> moveRight(1)}
                targetComponent={targetComponent}
                targetComponentRef={targetComponentRef}
              />

              <ShippingDetails
                cartItemInState={cartItemInState}
                setTargetComponentLeft={()=> moveLeft(0)}
                setTargetComponentRight={()=> moveRight(2)}
                targetComponent={targetComponent}
                targetComponentRef={targetComponentRef}
              />

              <PaymentDetails
                setTargetComponentLeft={()=> moveLeft(1)}
                targetComponent={targetComponent}
                targetComponentRef={targetComponentRef}
                handleSuccessPage={handleSuccessPage}
              />
            </div>
            :
            ""
            }
          </section>
        </div>
              <SuccessPage 
                showSuccessPage={showSuccessPage}
              />
        </>
        :
        <div className="please-add-items"> 
          <p>Please add items to cart</p>
          <div className="Drop-more-link">
            <a href="/marketplace">Go to products</a>
          </div>
        </div>
}

export default Checkout;
