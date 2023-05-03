$(document).ready(function () {
  $(".testimonial-carousel").slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".testimonial-carousel-forma").slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".realisation-carousel").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".cards-carousel").slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".cards-carousel-chantier").slick({
    dots: false,
    nextArrow:
      '<i id="arrow-right" class="slick-arrow-right fas fa-chevron-right"></i>',
    prevArrow:
      '<i id="arrow-left" class="slick-arrow-left fas fa-chevron-left"></i>',
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  if (window.location.pathname === "/apichantiers/") {
    let services = document.getElementsByClassName("service");
    let arrowRight = document.getElementById("arrow-right");
    let arrowLeft = document.getElementById("arrow-left");
    let slides = [];
    for (let i = 0; i < services.length; i++) {
      const element = services[i];
      if (!element.classList.contains("slick-cloned")) {
        slides.push(element);
      }
    }
    let last = slides.length - 1;
    arrowRight.onclick = () => {
      if (slides[1].classList.contains("slick-current")) {
        arrowLeft.style.visibility = "visible";
      }
      if (slides[last].classList.contains("slick-active")) {
        arrowRight.style.visibility = "hidden";
      }
    };
    arrowLeft.onclick = () => {
      if (slides[0].classList.contains("slick-current")) {
        arrowLeft.style.visibility = "hidden";
        arrowRight.style.visibility = "visible";
      }
      if (!slides[last].classList.contains("slick-active")) {
        arrowRight.style.visibility = "visible";
      }
    };
  }
});

let currentUrl = window.location.pathname;
let navLinks = document.querySelectorAll(".nav-link-single");
switch (currentUrl) {
  case "/":
    navLinks[0].classList.add("hvr-underline-from-left");
    break;
  case "/quisommesnous/":
    navLinks[1].classList.add("hvr-underline-from-left");
    break;
  case "/apientreprises/":
    navLinks[2].classList.add("hvr-underline-from-left");
    break;
  case "/apichantiers/":
    navLinks[3].classList.add("hvr-underline-from-left");
    break;
  case "/apiformation/":
    navLinks[4].classList.add("hvr-underline-from-left");
    break;

  default:
    break;
}

let hamburger = document.getElementById("menu-icon");
let navbar = document.getElementById("navbar");
hamburger.onclick = () => {
  navbar.classList.toggle("nav-height");
};

let base =document.getElementById('reasons')
let reasons= [...base.querySelector('ul').children]
if (reasons) {
  reasons.forEach(e=>{
    e.classList.add("reason-item")
    const node = document.createElement("div")
    node.classList.add('icon-reason-absolute')
    const icon = document.createElement("i")
    icon.classList.add('far')
    icon.classList.add('fa-check-circle')    
    icon.style.color = base.attributes.color.nodeValue
    node.appendChild(icon)
    e.appendChild(node)
  })
}