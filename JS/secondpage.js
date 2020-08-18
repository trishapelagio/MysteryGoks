$(document).ready(function() {
    $("#code").keyup(function(){
        var val = $("#code").val();
        if(val == "1342"){
            window.location.replace("udklas.html");
        }
    })
});