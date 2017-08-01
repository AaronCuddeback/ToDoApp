// Check Off Specific Todos by Clicking (long code way)

 // $("li").click(function(){
    // if li is gray
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//       // turn it black
//       $(this).css({
//           // turn it gray
//       color: "black",
//       textDecoration: "none"
//     });
//     }
//     // else
//       else {
//        $(this).css({
//           // turn it gray
//       color: "gray",
//       textDecoration: "line-through"
//     });
//    }
//  }); 

// Toggle specific Todos (short code way)
//first create class in styles, .completed...
//then write function code:

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// click on x to delete todos:
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation(); // will stop the event from firing on all the elements and stop at a span only.
});



$("input[type='text']").keypress(function(event){
  if(event.which === 13){ // 13 is the number assigned to the enter key so this keypress works when enter is hit.
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
