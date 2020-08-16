$(document).ready(function() {
    console.log("hehe");

    $("#code").keyup(function(){
        var val = $("#code").val();
        if(val == "1234"){
            window.location.replace("page3.html");
        }
    })
});