let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove',cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach( link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove('hovered-link');
    });
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add('hovered-link');
    });
})



//캐러셀

const carousel = document.querySelector('.carousel-container');
const wrapper = document.querySelector('.carousel-wrapper');
const images = wrapper.querySelectorAll('img');
const imageWidth = images[0].offsetWidth;
let position = -imageWidth;

wrapper.style.transform = `translateX(${position}px)`;

function moveSlides() {
  if (position === -imageWidth * 2) {
    position = 0;
  } else {
    position -= imageWidth;
  }
  wrapper.style.transform = `translateX(${position}px)`;
}

let slideInterval = setInterval(moveSlides, 3000);



//work페이지 캐러셀
const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let counter = 1;
const size = slides.clientWidth / 5;

slides.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener("click", () => {
  if (counter >= slides.children.length - 1) return;
  slides.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slides.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slides.style.transition = "transform 0.5s ease-in-out";
  counter--;
  slides.style.transform = `translateX(${-size * counter}px)`;
});

slides.addEventListener("transitionend", () => {
  if (slides.children[counter].id === "lastClone") {
    slides.style.transition = "none";
    counter = slides.children.length - 2;
    slides.style.transform = `translateX(${-size * counter}px)`;
  }
  if (slides.children[counter].id === "firstClone") {
    slides.style.transition = "none";
    counter = slides.children.length - counter;
    slides.style.transform = `translateX(${-size * counter}px)`;
  }
});
