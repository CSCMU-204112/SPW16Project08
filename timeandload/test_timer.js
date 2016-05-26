
    // การเรียกใช้  
    $(document).ready( function() {

     function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    jQuery(function ($) {
        var fiveMinutes = 60 * 2  ,
        display = $('.time');
        startTimer(fiveMinutes, display);
    });    

    $('#post').click(function() {
        $(this).after("<span class='time'></span>");
        var fiveMinutes = 60 * 2  ,
            display = $('.time');
        startTimer(fiveMinutes, display);
    })
})
    