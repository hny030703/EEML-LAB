const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slider-dot");

let currentSlide = 0;

function showSlide(index){

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}


/* DOT CLICK */

dots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    showSlide(index);

  });

});


/* AUTO SLIDE */

setInterval(() => {

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);

}, 5000);

// =====================
// MEMBER FILTER
// =====================

const filterButtons = document.querySelectorAll(".filter-btn");

const categories = document.querySelectorAll(".member-category");


filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    // active 버튼 변경

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;


    categories.forEach(category => {

      // ALL
      if(filter === "all"){

        category.style.display = "block";
      }

      // M.S
      else if(
        filter === "ms" &&
        category.classList.contains("ms-group")
      ){

        category.style.display = "block";
      }

      // UG
      else if(
        filter === "ug" &&
        category.classList.contains("ug-group")
      ){

        category.style.display = "block";
      }

      // hide
      else{

        category.style.display = "none";
      }

    });

  });

});