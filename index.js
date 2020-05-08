$(document).on('scroll',function(){
  if ($(document).scrollTop()){
    $("nav").removeClass("semcima");
    $("nav").addClass("cima");
  }
else
  {
    $("nav").removeClass("cima");
    $("nav").addClass("semcima");
  }
})
