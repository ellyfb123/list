(function($){
    $.fn.myList = function(){
        $(".input-item").blur(function(){
            var inputItem = $(".input-item").val(); 
            $("ul").append("<li><i class='glyphicon glyphicon-ok'></i><span>"+inputItem+"</span>\
                <i class='glyphicon glyphicon-remove'></i></li>");
        }
        );
        $(".list-show").delegate(".glyphicon-ok", "click", function(){
        //$(".list-show").on("click",".glyphicon-ok",function(){
            $(this).siblings("span").css("text-decoration","line-through");
            $(this).css("color","black");
        });
        $(".list-show").delegate(".glyphicon-remove", "click", function(){
        // $(".list-show").on("click",".glyphicon-remove",function(){
            $(this).parents("li").remove();
        });
          
    }
}(jQuery));
