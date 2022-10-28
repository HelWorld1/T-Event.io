$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    console.log('test')
    e.preventDefault();
    let target = $(this.hash);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top
    }, 1000);
  });
});
