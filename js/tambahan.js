$(document).ready(function(){
    var isFlipped = false;

    $("#flip").click(function(){
        if (!isFlipped) {
            $("#materi").fadeOut(1000);
            $("#flip").css("margin","auto");
            $("#parent-flip").animate({
                top: '-130px',
                left: '0px',
                width: '100%'
            },{
                duration: 2000
            });

            $("#panel1").fadeIn(4000);
            $("#panel2").fadeIn(4500);
            $("#panel3").fadeIn(5000);

            isFlipped = true;
        } else {
            $("#parent-flip").animate({
                top: '80px',
                left: '550px',
                width :'50%'
            },{
                duration: 2000,
                complete: function() {
                    $("#materi").fadeIn(3000);
                }
            });
            $("#panel1").fadeOut(300);
            $("#panel2").fadeOut(300);
            $("#panel3").fadeOut(300);

            isFlipped = false;
        }
    });
});
