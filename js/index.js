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
                    $("nav>ul").css({"display":"block", "top":"-150px"})
                    $(".icon-cross").hide()
                    $(".icon-menu").show()
                } 
            }
        }
    )
  $(".images-fade").children("article").hover(function()
  {
      $(this).children(".image1").stop().animate({"opacity":"0"},1000)
      $(this).children(".image2").stop().animate({"opacity":"1"},1000)
  },
  function()
  {
    $(this).children(".image1").stop().animate({"opacity":"1"},1000)
    $(this).children(".image2").stop().animate({"opacity":"0"},1000)
  }),

  $(".projects-gallery").children("article").hover(function()
  {
      $(this).children(".overlay").stop().animate({"bottom":"0"},1000)
    }
    ,
    function() {
      $(this).children(".overlay").stop().animate({"bottom":"-100%"},1000)
  }),

  //----------------PROYECTOS PAGINA-------------------
$('article').children('.menu-desplegable-description').hide();
$('article').children('.menu-desplegable-descriptionVertical').show();
$('.article1').children('.menu-desplegable-titulo').children('.icon-minus').show().siblings('.icon-plus').hide();


$('.icon-plus, .icon-minus').click(function () {
    $(this).hide().siblings().show();
    $(this).closest('article').children('.menu-desplegable-description').slideToggle();
    $(this).closest('article').children('.menu-desplegable-descriptionVertical').slideToggle();

    // Ocultar otros párrafos y mostrar/ocultar el actual
    $('article').not($(this).closest('article')).children('.menu-desplegable-description').slideUp();
    $('article').not($(this).closest('article')).children('.menu-desplegable-descriptionVertical').slideUp();
    $('article').not($(this).closest('article')).find('.icon-minus').hide();
    $('article').not($(this).closest('article')).find('.icon-plus').show();
}),

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
// ------------pagina proyectos menu desplegable----------
$(".house-card").hover(function(){
  $(this).children("div").stop().animate({"opacity":"0"},1000)
}
,
function()
{
  $(this).children("div").stop().animate({"opacity":"1"},1000)
})

$(".house-card-h").hover(function(){
  $(this).children("div").stop().animate({"opacity":"0"},1000)
}
,
function()
{
  $(this).children("div").stop().animate({"opacity":"1"},1000)
})



// ------------Botón desplazamiento suave hacia arriba----------
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $('.scrollToTopBtn').fadeIn();
  } else {
    $('.scrollToTopBtn').fadeOut();
  }
}),

// Desplazamiento suave hacia arriba cuando se hace clic en el botón
$('.scrollToTopBtn').click(function() {
  $('html, body').animate({scrollTop : 0}, 800);
  return false;
})

})