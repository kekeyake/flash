$(function(){
    
    //main thumb list img toggle 
    $(".thumb_list img").on('mouseenter', function() {
        $(this).attr("src", $(this).attr("src").replace(".jpg","_on.jpg"));        
    }).on('mouseleave', function() {
        $(this).attr("src", $(this).attr("src").replace("_on.jpg", ".jpg"));
    });
});
