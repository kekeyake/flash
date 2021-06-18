$(function(){

    //main thumb list img toggle 
    $(".thumb_list img").on('mouseenter', function() {
        $(this).attr("src", $(this).attr("src").replace(".jpg","_on.jpg"));        
    }).on('mouseleave', function() {
        $(this).attr("src", $(this).attr("src").replace("_on.jpg", ".jpg"));
    });

    $('#menu1').on('mouseenter', function(){
        $("#menu01").css('visibility','visible');
        $(this).attr("src", $(this).attr("src").replace("menu1.gif","menu1r.gif"));      
    }).on('mouseleave',function() {
        $("#menu01").css('visibility','hidden');
        $(this).attr("src", $(this).attr("src").replace("menu1r.gif","menu1.gif"));      
    });

    $('#menu2').on('mouseenter', function(){
        $("#menu02").css('visibility','visible');
        $(this).attr("src", $(this).attr("src").replace("menu2.gif","menu2r.gif"));      
    }).on('mouseleave',function() {        
        $("#menu02").css('visibility','hidden');
        $(this).attr("src", $(this).attr("src").replace("menu2r.gif","menu2.gif"));      
    });

    $('#menu01').on('mouseenter', function(){
        $(this).css('visibility','visible');
        $('#menu1').attr("src", $('#menu1').attr("src").replace("menu1.gif","menu1r.gif"));      
    }).on('mouseleave',function() {
        $(this).css('visibility','hidden');
        $('#menu1').attr("src", $('#menu1').attr("src").replace("menu1r.gif","menu1.gif"));      
    });

    $('#menu02').on('mouseenter', function(){
        $(this).css('visibility','visible');
        $('#menu2').attr("src", $('#menu2').attr("src").replace("menu2.gif","menu2r.gif"));      
    }).on('mouseleave',function() {
        $(this).css('visibility','hidden');
        $('#menu2').attr("src", $('#menu2').attr("src").replace("menu2r.gif","menu2.gif"));      
    });

    $('.d_sub_menu li').on('mouseenter',function(){
        $(this).find('.sub_m').show();
    }).on('mouseleave',function(){
        $(this).find('.sub_m').hide();
    });

});
