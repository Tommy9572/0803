$(function () {
    // JQ ui 頁籤效果
    $("#tabs").tabs();

    // 滑鼠變換影像
    $('.hover-img').hover(
        function () {
            // 滑鼠移入時更換圖片
            var hoverSrc = $(this).data('hover');
            $(this).attr('data-default', $(this).attr('src')); // 儲存原始圖片
            $(this).attr('src', hoverSrc);
        },
        function () {
            // 滑鼠移出時還原圖片
            var hoverSrc = $(this).attr('data-default');
            $(this).attr('src', hoverSrc);
        });
});

/* 控制light box */
lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'disableScrolling': true
})