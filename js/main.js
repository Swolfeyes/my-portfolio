$(document).ready(function(){
  toggleNavigation();
  detectSection();
  scrollSmoothly();
});

function toggleNavigation() {

  $("#navigation-toggle").click(function(event){

    event.stopPropagation();

    $("#navigation-links").slideToggle();

    $("#navigation-links a span").on("click", function(){

      $("#navigation-links").hide();

    });

    $(document).click( function(){

        $('#navigation-links').hide();

    });
  });
}



function detectSection() {
	$(window).on("scroll", function(event){
    var scrollPos = $(document).scrollTop();

    $(".navigation-links a").each(function () {

    var currLink = $(this);
    var refElement = $(currLink.attr("href"));

    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {

       currLink.parent().addClass("active").siblings().removeClass("active");

       return;

     } else {

       currLink.parent().removeClass("active");
     }
    });
  });
}

function scrollSmoothly() {
$("a[href^='#']").on("click", function(event) {

    var target = $(this.getAttribute("href"));

    if (target.length) {

      event.preventDefault();

      $("html, body").stop().animate({

          scrollTop: target.offset().top

      }, 800);
    }
});
}
