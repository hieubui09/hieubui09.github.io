$(document).ready(function(){
   $('#show-btn').click(function(){

    $('.click-here').toggleClass('active');
    $('.light').toggleClass('on');
   })
   const typed = new Typed(".auto-input",{
      strings: ["Bùi Đức Hiếu","Web Developer","UI Designer"],
      typedSpeed: 100,
      backSpeed: 100,
      loop:true,
   })
})

