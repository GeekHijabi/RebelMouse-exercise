let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

$(document).ready(() => {
  document.getElementById("#content-carousel").mouseover(() => {
    document.getElementById("#content-carousel .carousel-control").show();
  });

  document.getElementById("#content-carousel").mouseleave(() => {
    document.getElementById("#content-carousel .carousel-control").hide();
  });

  document.getElementById("#thumbnail-carousel .thumb").addEventListener("click", () => {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  document.getElementById('#content-carousel').on('slid.bs.carousel', () => {
    let index = document.getElementById('.carousel-inner .item.active').index();
    let thumbnailActive = document.getElementById('#thumbnail-carousel .thumb[data-slide-to="' + index + '"]');
    thumbnailActive.addClass('active');
    $(thumbnailActive).siblings().removeClass("active");
  });
});
