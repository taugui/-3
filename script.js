$(".login").click(function() {
    let save = $("input").val();
        $(".input-group").text(save);
        $(".login-text").text("恭喜你！登录成功");

});

$(".clear").click(function() {
    let save1 = $("input").val();
        $(":text").val("");
   
});
