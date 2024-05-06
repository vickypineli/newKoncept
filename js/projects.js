$(document).ready(function()
{ 
  var desplegada = 0

  // --------------------------manu navegacion---------------
    $(".icon-menu").click(
        function(){
            $('.icon-cross').show()
            $('.icon-menu').hide()
            $('nav>ul').css({"top":"50px", "transition":"1s"})
            desplegada=1
        }
    )

    $('.icon-cross').click(
        function(){
            $('.icon-cross').hide()
            $('.icon-menu').show()
            $('nav>ul').css({"top":"-150px", "transition":"1s"})
            desplegada=0
        }
    )
    // -------para adaptar menu de navegacion--------
    // para adaptar el desplegable aparezca de izquierda a derecha.
    $(window).resize(
        function(){
            if(window.matchMedia('(min-width:740px').matches)
            {
                $("nav>ul").css({"display":"flex","top":"50px", "transition":"0s"})
                $(".icon-menu").hide()
                $(".icon-cross").hide()
            }
            else 
            {
                if (desplegada==1){
                    $("nav>ul").css({"display":"block", "top":"50px"})
                    $(".icon-cross").show()
                    $(".icon-menu").hide()
                }
                else 
                {
                    $("nav>ul").css({"display":"block", "top":"-100px"})
                    $(".icon-cross").hide()
                    $(".icon-menu").show()
                } 
            }
        }
    ),
    $('article').children('.menu-desplegable-description').hide();
    $('article').children('.menu-desplegable-descriptionVertical').show();



    $(".icon-plus, .icon-minus").click(function () {
        $(this).hide().siblings().show();
        $(this).closest('article').children('.menu-desplegable-description').slideToggle();
        $(this).closest('article').children('.menu-desplegable-descriptionVertical').slideToggle();

        // Ocultar otros párrafos y mostrar/ocultar el actual
        $('article').not($(this).closest('article')).children('.menu-desplegable-description').slideUp();
        $('article').not($(this).closest('article')).children('.menu-desplegable-descriptionVertical').slideUp();
    });

    $('div.overlay').hide()
    $(article).click(function(){
    $(this).children('.overlay').slideToggle()
    });

$(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('.scrollToTopBtn').fadeIn();
        } else {
          $('.scrollToTopBtn').fadeOut();
        }
      })

$('.scrollToTopBtn').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    })

})