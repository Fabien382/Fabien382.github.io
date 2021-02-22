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
        easing: EASING
    });

    $(window).on("scroll", function(event) {

        var scroll = $(window).scrollTop();

        if (scroll >= $("#home").height()) {
            $navBar.addClass("fixed");
        } else {
            $navBar.removeClass("fixed");
        }
    }).trigger("scroll");

    $navExternal.click(function(e) {
        e.preventDefault();

        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - SCROLL_OFFSET
        }, SCROLL_SPEED, EASING);
    });
}

function initPortfolio() {

    var $portfolio = $("#portfolio");
    var $items = $portfolio.find(".items");
    var $filters = $portfolio.find(".filters li a");

    $items.imagesLoaded(function() {

        $items.isotope({
            itemSelector: ".item",
            layoutMode: "fitRows",
            transitionDuration: "0.7s"
        });
    });

    $filters.click(function() {

        var $el = $(this);

        $filters.removeClass("active");

        $el.addClass("active");

        var selector = $el.attr("data-filter");

        $items.isotope({
            filter: selector
        });

        return false;
    });

    $items.find(".item a").venobox({
        border: "2rem",
        closeBackground: "transparent"
    });
}

function initAnimations() {
    var $animated = $(".animated");

    $animated.appear({
        force_process: true
    });

    $animated.on("appear", function() {

        var $el = $(this);

        var animation = $el.data("animation");
        var delay = $el.data("delay");

        // Mofile fix
        if ($(window).width() < 768) {
            delay = 0;
        }

        if (delay) {

            setTimeout(function() {
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
    $(".icon").hover(function() {
        $("i", this).addClass("animated tada");
    }, function() {
        $("i", this).removeClass("animated tada");
    });
}

function ramdomImage(){
    var Theme = "computer";
    var AccessKey = "sB0PiOtHbWz3qyB9PtWRsfiiQ8ytCeKEKot1R2CieZU";
    const requestUrl = "https://api.unsplash.com/search/photos?query="+Theme+"&client_id="+AccessKey;
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

    $(document).ready(function() { 
        var imageUrl =  "";
        getNewImage().then((value) => {
            imageUrl = value;
            $("#home").css("background-image", "url(" + imageUrl + ")");
        });
        //alert(imageUrl);
    });
}

function textDefilant(){
    var typed = new Typed('#typed', {
        strings: ["Bienvenue sur mon Portfolio numérique","Je suis Développeur Web", "Je suis Développeur d'Applications ",'<a href="http://www.chien.fr" target="_blank" class="news">click moi</a>'],
        typeSpeed : 100,
        backSpeed : 50,
        delay:500,
        loop: true,
        showCursor: true
      
      })
}

$(document).ready(function() {

    initNavbar();
    initPortfolio();
    initAnimations();
    ramdomImage();
    textDefilant();
});

$(window).on("load", function() {

    var $loader = $(".loader");

    $loader.find(".loading").fadeOut();
    $loader.fadeOut("slow");
});

// TEXTE DYNAMIQUE
// ejs_box2_message = new Array;
// ejs_box2_message[0] = 'Bienvenue sur mon Portfolio numérique<br></a>';
// ejs_box2_message[1] = 'Je suis Fabien Nivon <br></a>';
// ejs_box2_message[2] = '<a href="http://www.chien.fr" target="_blank" class="news">click moi<br></a>';
// ejs_box2_message[3] = 'Bonjour<br></a>';
// ejs_box2_message[4] = 'Je suis du texte<br></a>';
// ejs_box2_message[5] = ' *texte...texte...*<br></a>';
// ejs_box2_actual = 0;
// ejs_box2_html_flag =0;
 
// function ejs_box2_go()
//  	{
//  	if(document.getElementById)
//  		{
//  		ejs_box2_char = 3;
//  		ejs_box2_affich(ejs_box2_actual)
//  		ejs_box2_actual++;
//  		if(ejs_box2_actual >= ejs_box2_message.length)
//  			ejs_box2_actual = 0;
//  		}		
//  	}
 
// function ejs_box2_affich(lactual)
//  	{
//  	var pix = ejs_box2_message[lactual].charAt(ejs_box2_char);
//  	if(pix == "<")
//  		ejs_box2_html_flag = 1;
//  	if(pix == ">")
//  		ejs_box2_html_flag = 0;
//  	var texte = ejs_box2_message[lactual].substring(0,ejs_box2_char);
//  	document.getElementById("ejs_box2_box").innerHTML = texte;
//  	if(ejs_box2_char < ejs_box2_message[lactual].length)
//  		{
//  		ejs_box2_char++;
//  		if(ejs_box2_html_flag == 1)	
//  			ejs_box2_affich(lactual);
//  		else
//  			setTimeout("ejs_box2_affich("+lactual+")",50)
//  		}
//  	else
//  		setTimeout("ejs_box2_go()",3000)
//  	}
 
// window.onload = ejs_box2_go; 


//ramdom image

//Affivher Perry
const getPerry = document.querySelector('.getPerry');
getPerry.addEventListener('click', async () => {
    const imageUrl = "https://image.freepik.com/vecteurs-libre/personnage-mascotte-libre-perry-ornithorynque_62-426.jpg"
    $("#home").css("background-image", "url(" + imageUrl + ")");
  });