import { NavLink } from "react-router-dom";

function Productlayout(props){
//  let {productName} = useParams();
  return <>
    <section>
      <div id="product-layout-container">
        <div className="main-filter"></div>
        <div className="product-layout">
          { props.products.map(product =>
              <div className="product" key={product.key}>
                <div> <NavLink to={`/marketplace/${product.name}`}><img src={product.image} alt="product"/></NavLink> </div>
                <div className="product-details">
                  <h4>{product.name}</h4>
                  <h4>${product.price}</h4>
                </div> 
              </div>
            )
          }
        </div>
      </div>
    </section>
  </>  
}

export default Productlayout;