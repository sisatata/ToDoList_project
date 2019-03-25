// Direct events are only attached to elements at the time the .on() method is called.

$("ul").on("click", "li", function () {

    $(this).toggleClass("completed");
});

// Click on X to delet to-do

$("ul").on("click", "span", function (event) {
    // this represents span
    $(this).parent().fadeOut(500, function () {
        // this represents li
        $(this).remove();
    });
//doesn't bubble up
    event.stopPropagation();


});

$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + todoText + "</li>");

    }
});
$(".fa-plus").click(function () {
    $('input[type="text"]').fadeToggle();
});

