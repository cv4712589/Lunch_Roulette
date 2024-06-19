$(document).ready(function() {
    // 添加选项
    $("#add-option").click(function() {
        var newOptionText = $("#new-option").val();
        if (newOptionText) {
            var newOption = $("<div class='option'></div>");
            newOption.text(newOptionText);
            newOption.css("background-color", getRandomColor());
            $("#wheel").append(newOption);
            $("#new-option").val("");
        }
    });

    // 开始抽奖
    $("#spin-wheel").click(function() {
        var degrees = 360 * 5 + Math.floor(Math.random() * 360);
        $("#wheel").css("transform", "rotate(" + degrees + "deg)");
    });

    // 随机颜色生成器
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});