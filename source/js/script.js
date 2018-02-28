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
var imageButton = document.querySelectorAll(".slider__item--image");
var videoButton = document.querySelectorAll(".slider__item--video");

for ( var i = 0; i < imageButton.length; i++ ) {
  imageButton[i].addEventListener("click", function (event) {
    var modal = event.target.querySelector(".slider__modal");
    var closeButton = modal.querySelector(".slider__modal-close");

    modal.classList.add("slider__modal--active");

    closeButton.addEventListener("click", function (event) {
      event.preventDefault();

      modal.classList.remove("slider__modal--active");
    });
  });
}

for ( var i = 0; i < videoButton.length; i++ ) {
  videoButton[i].addEventListener("click", function (event) {
    var modal = event.target.querySelector(".slider__modal");
    var closeButton = modal.querySelector(".slider__modal-close");

    modal.classList.add("slider__modal--active");

    closeButton.addEventListener("click", function (event) {
      event.preventDefault();

      modal.classList.remove("slider__modal--active");
    });
  });
}
