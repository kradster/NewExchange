$(document).ready(function () {
    var mynav = $("nav");
    //var mynav2 = $("mywalletnav");
    var tb = $('#total-balance');
    $('#ribbon').hide();



    $(window).scroll(function () {
        var hight = $(this).scrollTop();
        //console.log('hi');
        //console.log(hight);


        if (hight > 0) {
            $(".nav-content").hide(300);
            $("#anim-row").hide(300);
            $('#ribbon').hide();
            tb.css({
                "left": "0px",
                "opacity": "1"
            });



        } else {
            $(".nav-content").show(300);
            $("#anim-row").show(300);
            tb.css({
                "left": "-100px",
                "opacity": "0"
            });

        }


        if (hight > 0) {
            //mynav.addClass("blue darken-4");
            mynav.css("background", "linear-gradient(-90deg,rgb(46,49,146) 0%,rgb(41,171,226) 100%)");
            mynav2.css("background", "linear-gradient(-90deg,rgb(46,49,146) 0%,rgb(41,171,226) 100%)");
            $('#br').hide(300);
        }else{
            $('#br').show(300);

        }
        


    });
});