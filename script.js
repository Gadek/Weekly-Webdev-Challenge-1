$(document).ready(function() {
   
    
    $(".input-line select, .input-line input").focus(function(){
        $(this).parent().addClass("focused-parent");
        $(this).addClass("focused-input");
    });
    
    $(".input-line input, .input-line select").focusout(function(){
        $(this).parent().removeClass("focused-parent");
        $(this).removeClass("focused-input");
    }); 
   
})
