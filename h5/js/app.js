var swiper1 = new Swiper('.swiper1', {
    direction: 'vertical',
    // effect:'coverflow'
});
var logos = $('.logo span');
var pics = $('.onlyone');
var swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    speed: 300,
    // effect:'cube',
    // onSlideNextEnd:function(){
    // 	var index=swiper2&&(swiper2.activeIndex-1)||0;
    // 	index=index==5?0:index;
    // 	console.log(index)
    // 	logos.removeClass('active');
    // 	pics.removeClass('active');
    // 	logos.eq(index).addClass('active');
    // 	pics.eq(index).addClass('active');
    // },
    // onSlidePrevEnd:function(){
    // 	var index=swiper2&&(swiper2.activeIndex-1)||0;
    // 	index=index==5?0:index;
    // 	console.log(index)
    // 	logos.removeClass('active');
    // 	pics.removeClass('active');
    // 	logos.eq(index).addClass('active');
    // 	pics.eq(index).addClass('active');
    // },
    onSlideChangeEnd: function() {
        var index = swiper2 && (swiper2.activeIndex - 1) || 0;
        index = index == 5 ? 0 : index;
        logos.removeClass('active');
        pics.removeClass('active');
        logos.eq(index).addClass('active');
        pics.eq(index).addClass('active');
    }

});
music.init('buybuybuy.mp3');
$('body').addClass('begin');