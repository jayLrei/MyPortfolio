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
const wrapper = carousel.querySelector('.carousel-wrapper');
const prevBtn = carousel.querySelector('.prev-btn');
const nextBtn = carousel.querySelector('.next-btn');
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

prevBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  if (position === 0) {
    position = -imageWidth * 2;
  } else {
    position += imageWidth;
  }
  wrapper.style.transform = `translateX(${position}px)`;
  slideInterval = setInterval(moveSlides, 3000);
});

nextBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  if (position === -imageWidth * 2) {
    position = 0;
  } else {
    position -= imageWidth;
  }
  wrapper.style.transform = `translateX(${position}px)`;
  slideInterval = setInterval(moveSlides, 3000);
});
