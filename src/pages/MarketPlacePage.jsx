import React, {useState, useEffect} from "react";
import {products} from "../data/products";
import MarketplaceMiniFilter from "../components/MarketplaceMiniFilter";
import Productlayout from "../components/ProductLayout";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import { DownArrowSvg, SearchIconSvg, ForwardArrowSvg, BackwardArrowSvg } from "../components/Svgs";


let categoriesArray = products.map(product => product.categories);
let featuredCategories = [...new Set(categoriesArray)].sort();
let artistsArray = products.map(product => product.artist);
let featuredArtists = [...new Set(artistsArray)].sort();
let yearArray = products.map(product => product.year);
let featuredYear = [...new Set(yearArray)].sort();

const maxPrice = Math.max(...products.map(({price}) => (price)));
const minPrice = Math.min(...products.map(({price}) => (price)));

function Marketplace(){

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  // const [mQuery, setMQuery] = React.useState({matches: window.innerWidth > 700 ? true : false});
  const [mQuery] = useState(window.innerWidth);
  // const [lolo] = useState({media: ("(min-width: 700px)"), onchange: logEffort});

  // useEffect(() => {
  //   let mediaQuery = window.matchMedia("(min-width: 700px)");
  //   mediaQuery.addEventListener(setMQuery);

  //   return () => mediaQuery.removeEventListener(setMQuery);
  // }, []);


  // const totalpages = Math.ceil(products.length/pageSize);
  // const setCurrentpageSize = () => {
  // if (window.matchMedia("(min-width: 700px)").matches) {
  //   console.log("Big screen");
  //   setPageSize(6);
  // } else {
  //   setPageSize(5);
  // }
  // }
  // window.addEventListener("load", setCurrentpageSize);
  // window.addEventListener("resize", setCurrentpageSize);

    useEffect(() => {
        if (window.matchMedia("(min-width: 700px)").matches) {
          setPageSize(6);
        } else {
          setPageSize(5);
        }
    }, [mQuery]);

  const handleNextPage = ()=> {
    if ((lastIndex + 1) < products.length) {
      setCurrentPage(currentPage + 1);
    } else {
      return null;
    } 
  };
  const handlePreviousPage = ()=> {
    setCurrentPage(currentPage - 1);
  };
  const currentPageItems = products.slice(pageSize * (currentPage - 1), pageSize * currentPage);
  const startIndex = (currentPage - 1) * pageSize;
  const lastIndex = startIndex + currentPageItems.length - 1;

  return <section id="MarketplacePage">
    <div className="marketplace-banner">
      <div className="searcher">
      <div className="Livebid-input">
            <input type="text" placeholder="Search"/>
              <SearchIconSvg />
          </div>
      </div>
      <div className="bar-display">
        <span>See {startIndex + 1}-{lastIndex + 1} of {products.length} results</span>
        <div className="bar-display-sort-by">
          <span>Sort by</span>
          <DownArrowSvg />
        </div>
      </div>
    </div>
    <section className="marketplace-wrapper">
      <MarketplaceMiniFilter
        featuredCategories={featuredCategories}
        featuredArtists={featuredArtists}
        featuredYear={featuredYear}
        firstIndex={startIndex + 1}
        lastIndex={lastIndex + 1}
        totalPage={products.length}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <Productlayout
        products={currentPageItems}
        Previous={handlePreviousPage}
        Next={handleNextPage}
        currentPage={currentPage}
      />
    </section>
    <div className="product-mini-seemore">
            {currentPage === 1 ? 
            <>
              <p onClick={handleNextPage}>Load more</p> 
              <ForwardArrowSvg
              Click={handleNextPage}/></>: 
            <> 
              <p onClick={handlePreviousPage}>Prev page</p> 
              <BackwardArrowSvg
              Click={handlePreviousPage}
              />
              <p onClick={handleNextPage}>Load more</p> 
              <ForwardArrowSvg
              Click={handleNextPage}/></>
            }    
      </div>

    <NewsLetter/>
    <Footer/>
    </section>
}

export default Marketplace;