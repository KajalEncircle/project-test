// preloader
$(window).on("load", function() {
   $('#preloader').fadeOut('slow');
});


// toggle
$('#toggle').click(function() {
         $(this).toggleClass('active');
         $('#fullmenu-overlay').toggleClass('open');
      });

      $('#toggle1').click(function() {
         $(this).toggleClass('active');
         $('#fullmenu-overlay').toggleClass('open');
      });

  // back-to-top
 $(document).ready(function(){
  console.log($(this).scrollTop());
  jQuery(window).scroll(function(){
    if($(this).scrollTop() > 0){
      $('#back-to-top').fadeIn();
    }else{
      $('#back-to-top').fadeOut();
    }
  });
  $('#back-to-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 100);
    return false;
  });
});