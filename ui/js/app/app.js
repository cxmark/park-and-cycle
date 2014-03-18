$(function(){
  $('.nav-launch').on('click',function(){
    $('body').toggleClass('visible-header');
  });

  $('.wr__dropdown select').change( function () {
    var targetVal = $(this).val();
    var targetPosition = $(targetVal).offset().top;
    $('html,body').animate({ scrollTop: targetPosition}, 'slow');
    window.location.hash = targetVal;
  });
});
