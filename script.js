const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let img = document.querySelector(".img");
let elements = document.querySelectorAll(".elem");

for (let element of elements){
    element.addEventListener("mouseenter", () => {
       let imgurl= element.getAttribute("url")
        console.log(imgurl)
        img.style.backgroundImage = `url(${imgurl})`; 
    img.style.display = "block";
});
}


for (let element of elements){
    element.addEventListener("mouseleave", () => {
    img.style.display = "none";
});
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });