//Реализация слайдера
var sliderButton = document.querySelectorAll(".slider__button");

for ( var i = 0; i < sliderButton.length; i++ ) {
  sliderButton[i].addEventListener("click", function (event) {
    var slides = event.target.parentElement.parentElement.querySelectorAll(".slider__item");

    if ( event.target.classList.contains("slider__prev") ) {
      for ( var k = 0; k <= slides.length - 1; k++ ) {
        if ( slides[k].classList.contains("slider__item--active") && k !== 0 ) {
          slides[k].classList.remove("slider__item--active");
          slides[k - 1].classList.add("slider__item--active");
          break;
        } else if ( slides[k].classList.contains("slider__item--active") && k == 0 ) {
          slides[k].classList.remove("slider__item--active");
          slides[slides.length - 1].classList.add("slider__item--active");
          break;
        }
      }
    } else if ( event.target.classList.contains("slider__next") ) {
      for ( var k = slides.length - 1; k >= 0; k-- ) {
        if ( slides[k].classList.contains("slider__item--active") && k !== slides.length - 1 ) {
          slides[k].classList.remove("slider__item--active");
          slides[k + 1].classList.add("slider__item--active");
          break;
        } else if ( slides[k].classList.contains("slider__item--active") && k == slides.length - 1 ) {
          slides[k].classList.remove("slider__item--active");
          slides[0].classList.add("slider__item--active");
          break;
        }
      }
    }
  });
}

//Реализация модальных окон
var imageButtons = document.querySelectorAll(".slider__item--image");
var videoButtons = document.querySelectorAll(".slider__item--video");
var closeButtons = document.querySelectorAll(".slider__modal-close");

for ( var l = 0; l < imageButtons.length; l++ ) {
  imageButtons[l].addEventListener("click", function (event) {
    event.preventDefault();

    var modal = event.target.querySelector(".slider__modal");

    modal.classList.add("slider__modal--active");
  });
}

for ( var m = 0; m < videoButtons.length; m++ ) {
  videoButtons[m].addEventListener("click", function (event) {
    event.preventDefault();

    var modal = event.target.querySelector(".slider__modal");

    modal.classList.add("slider__modal--active");
  });
}

for ( var n = 0; n < closeButtons.length; n++ ) {
  closeButtons[n].addEventListener("click", function (event) {
    event.preventDefault();

    var modal = event.target.parentElement.parentElement;

    modal.classList.remove("slider__modal--active");
  });
}

