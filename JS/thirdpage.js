function triggerDialogue() {
    $(".msg").each(function(i, obj) {
        setTimeout(() => {
            $(this).removeClass("d-none");
        }, 2500 * i);
    });
    $("#code").prop("disabled", false);

}

$(document).ready(async function() {

    $("#callMessage").click(function() {
        $("#chatLog").removeClass("d-none");
        $("#badge").remove();
        triggerDialogue();
    });
    
    $("#code").keyup(function(){
        var val = $("#code").val().trim().toLowerCase();
        if (val == "mysteryy"){
            window.location.replace("orsfgu.html");
        }
    });
});