$(document).ready(function(){
    $('.fas').eq(0).click(function(){
        $('.fas').eq(0).css("color", "yellow");
        $('.fas').eq(1).css("color", "#e4e4e4");
        $('.fas').eq(2).css("color", "#e4e4e4");
        $('.fas').eq(3).css("color", "#e4e4e4");
        $('.fas').eq(4).css("color", "#e4e4e4");
        $('#emoji').css("transform", "translateX(0px)")
       
     })
     $('.fas').eq(1).click(function(){
        $('.fas').eq(0).css("color", "yellow");
        $('.fas').eq(1).css("color", "yellow");
        $('.fas').eq(2).css("color", "#e4e4e4");
        $('.fas').eq(3).css("color", "#e4e4e4");
        $('.fas').eq(4).css("color", "#e4e4e4");
        $('#emoji').css("transform", "translateX(-100px)")
     })
     $('.fas').eq(2).click(function(){
        $('.fas').eq(0).css("color", "yellow");
        $('.fas').eq(1).css("color", "yellow");
        $('.fas').eq(2).css("color", "yellow");
        $('.fas').eq(3).css("color", "#e4e4e4");
        $('.fas').eq(4).css("color", "#e4e4e4");
        $('#emoji').css("transform", "translateX(-200px)")
     })
     $('.fas').eq(3).click(function(){
        $('.fas').eq(0).css("color", "yellow");
        $('.fas').eq(1).css("color", "yellow");
        $('.fas').eq(2).css("color", "yellow");
        $('.fas').eq(3).css("color", "yellow");
        $('.fas').eq(4).css("color", "#e4e4e4");
        $('#emoji').css("transform", "translateX(-300px)")
     })
     $('.fas').eq(4).click(function(){
        $('.fas').eq(0).css("color", "yellow");
        $('.fas').eq(1).css("color", "yellow");
        $('.fas').eq(2).css("color", "yellow");
        $('.fas').eq(3).css("color", "yellow");
        $('.fas').eq(4).css("color", "yellow");
        $('#emoji').css("transform", "translateX(-400px)")
     })
})



