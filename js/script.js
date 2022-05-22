function initNavbar() {
  var SCROLL_SPEED = 950;
  var SCROLL_OFFSET = 50;
  var EASING = "swing";

  var $navTop = $("#navbar-top");
  var $navBar = $(".navbar");
  var $navExternal = $(".nav-external");

  $navBar.onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: SCROLL_SPEED,
    scrollOffset: SCROLL_OFFSET,
    scrollThreshold: 0.5,
    filter: ":not(.external)",
    easing: EASING,
  });

  $(window)
    .on("scroll", function (event) {
      var scroll = $(window).scrollTop();

      if (scroll >= $("#home").height()) {
        $navBar.addClass("fixed");
      } else {
        $navBar.removeClass("fixed");
      }
    })
    .trigger("scroll");

  $navExternal.click(function (e) {
    e.preventDefault();

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - SCROLL_OFFSET,
        },
        SCROLL_SPEED,
        EASING
      );
  });
}

function initPortfolio() {
  var $portfolio = $("#portfolio");
  var $items = $portfolio.find(".items");
  var $filters = $portfolio.find(".filters li a");

  $items.imagesLoaded(function () {
    $items.isotope({
      itemSelector: ".item",
      layoutMode: "fitRows",
      transitionDuration: "1s",
    });
  });

  $filters.click(function () {
    var $el = $(this);

    $filters.removeClass("active");

    $el.addClass("active");

    var selector = $el.attr("data-filter");

    $items.isotope({
      filter: selector,
    });

    return false;
  });
}

function initAnimations() {
  var $animated = $(".animated");

  $animated.appear({
    force_process: true,
  });

  $animated.on("appear", function () {
    var $el = $(this);

    var animation = $el.data("animation");
    var delay = $el.data("delay");

    // Mofile fix
    if ($(window).width() < 768) {
      delay = 0;
    }

    if (delay) {
      setTimeout(function () {
        $el.addClass(animation);
        $el.addClass("showing");
        $el.removeClass("hiding");
      }, delay);
    } else {
      $el.addClass(animation);
      $el.addClass("showing");
      $el.removeClass("hiding");
    }
  });

  // icon hover animation
  $(".icon").hover(
    function () {
      $("i", this).addClass("animated tada");
    },
    function () {
      $("i", this).removeClass("animated tada");
    }
  );
}
function printPerry(){
  const imageUrl = "https://image.freepik.com/vecteurs-libre/personnage-mascotte-libre-perry-ornithorynque_62-426.jpg";
  $("#home").css("background-image", "url(" + imageUrl + ")");
}
function egg(){
  var egg = new Egg();
  egg
    .addCode("p,e,r,r,y", function() {printPerry()})
    .addHook(function(){
      console.log("Hook called for: " + this.activeEgg.keys);
      console.log(this.activeEgg.metadata);
    }).listen();
}
function ramdomImage() {
  var Theme = "computer";
  var AccessKey = "sB0PiOtHbWz3qyB9PtWRsfiiQ8ytCeKEKot1R2CieZU";
  const requestUrl =
    "https://api.unsplash.com/search/photos?query=" +
    Theme +
    "&client_id=" +
    AccessKey;
  //alert(requestUrl);
  async function getNewImage() {
    let randomNumber = Math.floor(Math.random() * 10);
    return fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => {
        let allImages = data.results[randomNumber];
        return allImages.urls.regular;
      });
  }

  $(document).ready(function () {
    var imageUrl = "";
    getNewImage().then((value) => {
      imageUrl = value;
      $("#home").css("background-image", "url(" + imageUrl + ")");
    });
    //alert(imageUrl);
  });
}

function textDefilant() {
  var typed = new Typed("#typed", {
    strings: [
      "Bienvenue sur mon Portfolio numérique",
      "Je suis Développeur Web",
      "Je suis Développeur d'Applications ",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    delay: 500,
    loop: true,
    showCursor: true,
  });
}
function filtersIsotope() {
  var $grid = $(".grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows",
  });

  $("#filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");

    filterValue = filterValue;
    $grid.isotope({ filter: filterValue });
  });
}

$(document).ready(function () {
  initNavbar();
  initPortfolio();
  initAnimations();
  //ramdomImage();
  textDefilant();
  filtersIsotope();
  egg();
});

$(window).on("load", function () {
  var $loader = $(".loader");

  $loader.find(".loading").fadeOut();
  $loader.fadeOut("slow");
});

//Affivher Perry
// const getPerry = document.querySelector(".getPerry");
// getPerry.addEventListener("click", async () => {
//   const imageUrl =
//     "https://image.freepik.com/vecteurs-libre/personnage-mascotte-libre-perry-ornithorynque_62-426.jpg";
//   $("#home").css("background-image", "url(" + imageUrl + ")");
// });
