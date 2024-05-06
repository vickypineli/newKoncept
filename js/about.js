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
    )
$(".column-box").children("article").hover(function()
    {
        $(this).animate({"background-color":"#e7e7e7","color":"#111111"},1000)
        $(this).children(".line-fat").stop().animate({"left":"0"},1000)
    },

    function()
    {
        $(this).animate({"background-color":"#67676700","color":"#11111140"},1000)
        $(this).children(".line-fat").stop().animate({"left":"-100%"},1000)
    }),

    
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