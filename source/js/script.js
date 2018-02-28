"use strict";

let sliderButton = document.querySelectorAll(".slider__button");

for ( let i = 0; i < sliderButton.length; i++ ) {
  sliderButton[i].addEventListener("click", function (event) {
    let slides = event.target.parentElement.nextElementSibling.querySelectorAll(".slider__item");

    if ( event.target.classList.contains("slider__prev") ) {
      for ( let k = 0; k < slides.length; k++ ) {
        if ( slides[k].classList.contains("slider__item--active") && k !== 0 ) {
          slides[k].classList.remove("slider__item--active");
          slides[k - 1].classList.add("slider__item--active");
        } else if ( slides[k].classList.contains("slider__item--active") && k == 0 ) {
          slides[k].classList.remove("slider__item--active");
          slides[slides.length - 1].classList.add("slider__item--active");
        }
      }
    } else if ( event.target.classList.contains("slider__next") ) {
      for ( let k = slides.length - 1; k >= 0; k-- ) {
        if ( slides[k].classList.contains("slider__item--active") && k !== (slides.length - 1) ) {
          slides[k].classList.remove("slider__item--active");
          slides[k + 1].classList.add("slider__item--active");
        } else if ( slides[k].classList.contains("slider__item--active") && k == (slides.length - 1) ) {
          slides[k].classList.remove("slider__item--active");
          slides[0].classList.add("slider__item--active");
        }
      }
    }
  });
}
