import React, { useState } from "react";
import {products} from "../data/products";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddProduct } from "../redux/actions";
import ProductCard from "../components/ProductCard";
// import { CircleBackwardSvg, CircleForwardSvg, HeartSvg } from "../components/Svgs";
import MoreCollections from "../components/MoreCollections";


function ProductPage() {
  let {productName} = useParams();
  let [requestedProduct] = products.filter(product => product.name === productName);
  let moreCollectionsArray = products.filter(product => product.categories === requestedProduct.categories);
  let cleanedCollections = moreCollectionsArray.filter(product => product.name !== productName); 
  const [cartitem, setCartItem] = useState({id: requestedProduct.key, name: requestedProduct.name, quantity: 1});
  // const data = useSelector(state => state.products);
  const dispatch = useDispatch();
  let {quantity } = cartitem;

  const addToCart = () => {
    dispatch(AddProduct(cartitem));
  }

  const increaseQuantity = () => {
    setCartItem({...cartitem, quantity: cartitem.quantity + 1});
  }

  const decreaseQuantity = () => {
    if (quantity > 1 ) {
      setCartItem({...cartitem, quantity: cartitem.quantity - 1});
    }
  }

  return <>
    <section id="product-page">
      <ProductCard
        product={requestedProduct}
        increaseCount={increaseQuantity}
        decreaseCount={decreaseQuantity}
        quantity={cartitem.quantity}
        onSubmit={addToCart}
      />

    {cleanedCollections.length > 0 ? <MoreCollections
      cleanedCollections={cleanedCollections}
    /> :
    ""
    }
    </section>
    
  </>
}

export default ProductPage;