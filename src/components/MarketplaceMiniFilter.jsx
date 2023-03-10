import { DownArrowSvg } from "./Svgs";

function MarketplaceMiniFilter(props) {
  let {minPrice, maxPrice} = props;
  // const rangeInput = document.querySelector('#rangeInput');
  // const output1 = document.querySelector('#output1');
  // const output2 = document.querySelector('#output2');

  // rangeInput.addEventListener("input", () => {
  //   const value = parseInt(rangeInput.value);
  //   output1.innerHTML = value;
  //   output2.value = 200 - value;
  //   // console.log(output1, rangeInput.value);
  // });

  // console.log(rangeInput, output1, output2);
// const rangeSlider = document.getElementById('myRange');

// rangeSlider.addEventListener('input', () => {
//   const thumb1 = rangeSlider.querySelector('::-webkit-slider-thumb');
//   const thumb2 = rangeSlider.querySelector('::-webkit-slider-thumb:last-of-type');

//   const thumb1Value = Number(thumb1.style.left.split('%')[0]);
//   const thumb2Value = Number(thumb2.style.left.split('%')[0]);

//   if (thumb1Value > thumb2Value) {
//     [thumb1.style.left, thumb2.style.left] = [thumb2.style.left, thumb1.style.left];
//   }
// });


// const outputer = document.querySelectorAll("output");
  const handlePriceFilter = () => {
    const parent = document.querySelector(".range-slider");

  	if (!parent) return;

    let rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  	rangeS.forEach( (el) => {
  		el.oninput = () => {
  			let slide1 = parseFloat(rangeS[0].value),
  				slide2 = parseFloat(rangeS[1].value);

  			if (slide1 > slide2) {
  				[slide1, slide2] = [slide2, slide1];
  				let tmp = slide2;
  				slide2 = slide1;
  				slide1 = tmp;
  			}

  			numberS[0].value = slide1;
  			numberS[1].value = slide2;
  		};
    });

	  numberS.forEach( (el) => {
	  	el.oninput = () => {
	  		let number1 = parseFloat(numberS[0].value),
	  			number2 = parseFloat(numberS[1].value);

	  		if (number1 > number2) {
	  			let tmp = number1;
	  			numberS[0].value = number2;
	  			numberS[1].value = tmp;
	  		}

	  		rangeS[0].value = number1;
	  		rangeS[1].value = number2;
	  	};
	  });
  };

  return <>
  <section>
    <div id="marketplace-filter-mini">
      <div className="link-history"><span>Home/</span><span>Marketplace</span></div>
      <p className="shown-results">Showing {props.firstIndex}-{props.lastIndex}  of {props.totalPage} results</p>
      <div className="filter-container-mini">
        <div className="filter-sort"><span>Filters</span><input className="filter head-filter" type="checkbox"/> <span className="head-filter"><DownArrowSvg/></span>
          <div className="filter-list-mini">
            <div className="filter-list-mini-wrapper">
              <h3>By category</h3><input type="checkbox" className="open-filter" defaultChecked={true}/><DownArrowSvg/>
              <div className="displayed-filter">{props.featuredCategories.map(category =><div key={category}><input type="checkbox" name="" id="" /><p>{category}</p></div>)}</div>
            </div>

            <div className="filter-list-mini-wrapper">
              <h3>By price</h3><input type="checkbox" className="open-filter"/><DownArrowSvg/>
              <div className="displayed-filter range-input">
                <div className="range-slider">
                  <span>
                    $<input type="number" value={minPrice} min={minPrice} max={maxPrice} onChange={handlePriceFilter}/> 
                    
                    $<input type="number" value={maxPrice/2} min={minPrice} max={maxPrice} onChange={handlePriceFilter}/>
                  </span>
                  <input  min={minPrice} max={maxPrice} step="1" type="range" id="range1" defaultValue={minPrice} onChange={handlePriceFilter}/>
                  <input  min={minPrice} max={maxPrice} step="1" type="range"id="range2" defaultValue={maxPrice/2} onChange={handlePriceFilter} />
                </div>
              </div> 
            </div>
        
            <div className="filter-list-mini-wrapper">
              <h3>By artist</h3><input type="checkbox" className="open-filter"/><DownArrowSvg/>
              <div className="displayed-filter">{props.featuredArtists.map(category =><div key={category}><input type="checkbox" name="" id="" /><p>{category}</p></div>)}</div>
            </div>
        
            <div className="filter-list-mini-wrapper">
              <h3>Collection year</h3><input type="checkbox" className="open-filter"/><DownArrowSvg/>
              <div className="displayed-filter">{props.featuredYear.map(category =><div key={category}><input type="checkbox" name="" id="" /><p>{category}</p></div>)}</div>
            </div>
          </div>
        </div>

        <div className="filter-sort"><span>Sort by</span> <input className="filter head-filter" type="checkbox"/> <span className="head-filter"><DownArrowSvg/></span>
          <div className="filter-list-mini">
            <div className="filter-list-mini-wrapper">
              <h3>By price</h3><input type="checkbox" className="open-filter" defaultChecked={true}/><DownArrowSvg/>
              <div className="displayed-filter">
                <div><input type="checkbox" name="" id="" /><p>High to low</p></div>
                <div><input type="checkbox" name="" id="" /><p>Low to high</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </section>
</>
}

export default MarketplaceMiniFilter;
