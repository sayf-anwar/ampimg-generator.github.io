$("#button_id").click(function(){
    var $temp = $("<textarea></textarea>");
    $("body").append($temp);
    $temp.val($("#textarea_source").val()).select();     <-- #textarea_source: id of textarea source to be copied to the clipboard
    document.execCommand("copy");
    $temp.remove();
})
