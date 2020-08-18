$(document).ready(function() {
    $("#inputUsername").keyup(function(){
        var val1 = $("#inputUsername").val();
        var val2 = $("#inputPassword").val();
        if(val1.length != 0 && val2.length != 0)
            $("#submitbtn").prop('disabled', false)
    })

    $("#inputPassword").keyup(function(){
        var val1 = $("#inputUsername").val();
        var val2 = $("#inputPassword").val();
        if(val1.length != 0 && val2.length != 0)
            $("#submitbtn").prop('disabled', false)
    })
});