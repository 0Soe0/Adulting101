var currentSlide = 1;
var startPosition = 0;
var endPosition = 0;
var distance = 0;
const info = document.getElementById("infoId");
const leftSliderDot = document.getElementById("leftSliderDot");
const rightSliderDot = document.getElementById("rightSliderDot");

info.addEventListener("touchstart", function(event) {
  startPosition = event.touches[0].clientX;
});

info.addEventListener("touchend", function(event) {
  endPosition = event.changedTouches[0].clientX;
  distance = endPosition - startPosition;
  if(distance < 50 && currentSlide === 1) {
    info.style.transform = "translateX(-50%)";
    currentSlide = 2;
    leftSliderDot.classList.add("inactiveSliderDot");
    rightSliderDot.classList.remove("inactiveSliderDot");
  } else if(distance > -50 && currentSlide === 2) {
    info.style.transform = "translateX(0%)";
    currentSlide = 1;
    leftSliderDot.classList.remove("inactiveSliderDot");
    rightSliderDot.classList.add("inactiveSliderDot");
  }
});

function slideInfoSections() {

  if(currentSlide === 1) {
    info.style.transform = "translateX(-50%)";
    currentSlide = 2;
    startPosition = 50;
    leftSliderDot.classList.add("inactiveSliderDot");
    rightSliderDot.classList.remove("inactiveSliderDot");
  } else {
    info.style.transform = "translateX(0%)";
    currentSlide = 1;
    startPosition = 0;
    leftSliderDot.classList.remove("inactiveSliderDot");
    rightSliderDot.classList.add("inactiveSliderDot");
  }

}

/*The idea here would be to have an infinite carousel, but for now it's just a carousel with a fixed number of cards*/

/*Getting the visible cards depending on the screen size*/
function getVisibleCards() {
  return [...document.querySelectorAll(".carouselCard")].filter(function(card) {
    return getComputedStyle(card).display !== "none";
  });
}

var visibleCards = getVisibleCards();

/*Adding the active class to the first card*/
visibleCards[0].classList.add("activeCarouselCard");

const carouselTrack = document.querySelector(".carouselTrack");

var currentReview = 0;

/*Getting the gap between the cards*/
function getGap() {
  return parseFloat(getComputedStyle(carouselTrack).gap) || 0;
}

/*Getting the translate value needed for the carousel track movement*/
function getTranslateValue(index) {
  var translateValue = 0;
  var gap = getGap();
  for(let i = 0; i < index; i++) {
    translateValue += visibleCards[i].offsetWidth;
    translateValue += gap;
  }
  return translateValue;
}


function updateCarousel() {
  /*Adding the active class to the current card and removing it from the others*/
  visibleCards.forEach(function(card, i) {
    if (i === currentReview) {
      card.classList.add("activeCarouselCard");
    } else {
      card.classList.remove("activeCarouselCard");
    }
  });
  /*Waiting for a frame to let the browser apply the new size*/
  requestAnimationFrame(function() {
    /*Getting the translate value needed for the carousel track movement and moving the track*/
    var movingValue = - (getTranslateValue(currentReview) - 45);
    carouselTrack.style.transform = "translateX(" + movingValue + "px)";
  });
}

/*Updating the carousel when the page is loaded*/
updateCarousel();

function nextReview() {
  if(currentReview >= visibleCards.length - 1) {
    return;
  }
  currentReview++;
  updateCarousel();
}

function previousReview() {
  if (currentReview <= 0) {
    return;
  }
  currentReview--;
  updateCarousel();
}

const carouselSec = document.getElementById("reviewsSectionId");
var startPositionCarousel = 0;

carouselSec.addEventListener("touchstart", function(event) {
  startPositionCarousel = event.touches[0].clientX;
});

carouselSec.addEventListener("touchend", function(event) {
  var endPositionCarousel = event.changedTouches[0].clientX;
  var distanceBetweenPositions = endPositionCarousel - startPositionCarousel;

  if (distanceBetweenPositions < -50) {
    nextReview();
  } else if (distanceBetweenPositions > 50) {
    previousReview();
  }
});