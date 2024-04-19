$('.tab li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
    let num = $(this).index();
    // console.log(num);
    $('.on').hide();
    $('.on').eq(num).show()
})