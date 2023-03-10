import {useRef, useState, useEffect } from "react";
import heroImageSmallScreen from "../image/static-hero-image.png";
import { products, supportImageArray} from "../data/products";


const slidingImages = products.map(({image})=> image);

function HeroSection() {

  const [, setIntervalId] = useState(null);
  const myRef = useRef(null);
  const slideWrapper = document.querySelectorAll(".slide-one");
  const slideWrapperTwo = document.querySelectorAll(".slide-two");
  const slideWrapperThree = document.querySelectorAll(".slide-three");
  const slideWrapperFour = document.querySelectorAll(".slide-four");

  let currentSlide = 0;
  let maxSlide = slideWrapper.length - 1;
  
  const moveRight = () => {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    slideWrapper.forEach((slide, ind) => {
      slide.style.transform = `translateX(${100 * (ind - currentSlide)}%)`;
      setTimeout(() => {
        slideWrapperTwo[ind].style.transform = `translateX(${100 * (ind - currentSlide)}%)`;
      },0);
      slide.classList.add("slide");
      slideWrapperTwo[ind].classList.add("slide");
    })      
  } 

  let curSlide = 0;
  let maximumSlide = slideWrapperThree.length - 1;

  const moveLeft = () => {
    if (curSlide === 0) {
      curSlide = maximumSlide;
    } else {
      curSlide--;
    }

    slideWrapperThree.forEach((slide, ind) => {
      slide.style.transform = `translateX(${100 * (ind - curSlide)}%)`;
      setTimeout(() => {
        slideWrapperFour[ind].style.transform = `translateX(${100 * (ind - curSlide)}%)`;
      }, 1000);
      slide.classList.add("slide");
      slideWrapperFour[ind].classList.add("slide");
    })      
  } 
  
  useEffect(() => {
    const id = setInterval(() => {
       moveRight();
       moveLeft();
     }, 2000);
 
     setIntervalId(id);
     return () => clearInterval(id);
   }, []);
   
  setInterval(() => {
    moveRight();
    moveLeft();
  }, 2000);

  return <div className="hero-container">
    <div className="hero-text">
      <div className="hero-header">
        <h1>Photography is poetry and beautiful untold stories</h1> 
      </div>
      <div className="hero-content">
        <p>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. 
          Register to get top access.
        </p>
      </div>
    </div>
    <div className="hero-image">
      <div className="hero-image-mobile">
        <img src={heroImageSmallScreen} alt="hero" />
      </div>
      <div className="hero-image-largescreen" ref={myRef}>
        <div className="frame frame-one">
        {slidingImages.map((image, ind) => <div className="slide-one" key={ind}><img src={image} alt="hero" /></div>)}
        </div>
        <div className="frame frame-two">
        {supportImageArray.map((image, ind) => <div className="slide-two" key={(ind + 1)* 5}><img src={image} alt="hero" /></div>)}
        </div>
        <div className="frame frame-three">
        {slidingImages.map((image, ind) => <div className="slide-three" key={(ind + 1) * 60}><img src={image} alt="hero" /></div>)}
        </div>
        <div className="frame frame-four">
        {slidingImages.map((image, ind) => <div className="slide-four" key={(ind + 1) * 70}><img src={image} alt="hero" /></div>)}
        </div>  
      </div>
    </div>
  </div>
}

export default HeroSection;
