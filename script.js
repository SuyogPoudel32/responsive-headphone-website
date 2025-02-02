let show = document.getElementById("show");
let hidden = document.getElementById("hidden");
let portion = document.getElementById("portion");
let container = document.getElementById("container")

show.addEventListener("click", () => {
show_bar()
}
)
hidden.addEventListener("click", () => {
   hide()
}
)

function hide() {
    portion.style.opacity = 0;
    show.setAttribute("style", "display: block !important;");
    hidden.style.display = "none";
}

function show_bar() {
        // portion.style.display="flex";
        portion.style.opacity = 1;
        show.setAttribute("style", "display: none !important;");
        hidden.style.display = "block";
        portion.style.transition = "0.8s ease-in-out"
}






const swiper = new Swiper('.mySwiper', {
  loop: true, 
  spaceBetween: 20,  
  centeredSlides: true,
  grabCursor: true,  
  pagination: {
      el: '.swiper-pagination',
      clickable: true,  
  },
  breakpoints: {
      1024: {
          slidesPerView: 3, 
      },
      820:{
        slidesPerView:2,
      },

      768: {
          slidesPerView: 2,  
      },
      
      480: {
          slidesPerView: 1,  
      },
  },
});
