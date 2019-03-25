$("img:first-of-type").attr("src","image/banner-1.jpg");  //change attribute using jQuery

$("img").last().attr("src","image.arrow_1.png");

$("input").val();   // taking value from input fields

$("h1").addClass("correct");              // add class
$("h1").removeClass("correct");           //remove class
$("li").addClass("wrong");
$("li").toggleClass("correct");         //toggle class
$("li").first().toggleClass("done");      //select first element using first()