$(function(){
    $('.images p:nth-child(1)').mouseover(function(){
        $(this).children('strong').css({'opacity':'1'});
        $(this).children('span').css({'opacity':'1'});
    })
    $('.images p:nth-child(1)').mouseout(function(){
        $(this).children('strong').css({'opacity':'0'});
        $(this).children('span').css({'opacity':'0'});
    })

    $('.images p:nth-child(2)').mouseover(function(){
        $(this).find('strong', 'span').stop().animate({'left':'0%', 'opacity':'1'}, 1000);
        $(this).find('span').stop().animate({'opacity':'1'}, 1000);
    }).mouseout(function(){
        $(this).find('strong', 'span').stop().animate({'left':'-100%', 'opacity':'0'}, 1000);
        $(this).find('span').stop().animate({'opacity':'0'}, 1000);
    })

    $('.images p:nth-child(3)').mouseover(function(){
        $(this).find('strong').stop().animate({'bottom':'60px', 'opacity':'1'}, 1000);
        $(this).find('span').stop().animate({'opacity':'1'}, 1000);
        $(this).find('img').stop().animate({'top':'-60px'}, 1000);
    }).mouseout(function(){
        $(this).find('strong', 'span').stop().animate({'bottom':'60px', 'opacity':'0'}, 1000);
        $(this).find('span').stop().animate({'opacity':'0'}, 1000);
        $(this).find('img').stop().animate({'top':'0px'}, 1000);
    })
    

    
})
