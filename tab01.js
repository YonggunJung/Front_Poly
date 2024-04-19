$('.tab p').click(function(){
    // $(this).parent().addClass('active');
    // $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active').siblings().removeClass('active');
})
