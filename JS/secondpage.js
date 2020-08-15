$(document).ready(function() {
    console.log("hehe");

    $("#video_1").click(function() {
        $("#video_1").play();
        console.log("hehe");
    });


    $("#video1-tab").click(function(){
        $("#video_1").play()
        $("#video_2").pause()
        $("#video_3").pause()
        $("#video_4").pause()
    })
    $("#video2-tab").click(function(){
        $("#video_2").play()
        $("#video_1").pause()
        $("#video_3").pause()
        $("#video_4").pause()
    })
    $("#video3-tab").click(function(){
        $("#video_3").play()
        $("#video_2").pause()
        $("#video_1").pause()
        $("#video_4").pause()
    })
    $("#video4-tab").click(function(){
        $("#video_4").play()
        $("#video_2").pause()
        $("#video_3").pause()
        $("#video_1").pause()
    })

    $("#code").keyup(function(){
        var val = $("#code").val();
        if(val == "1234"){
            window.location.replace("page3.html");
        }
    })
});