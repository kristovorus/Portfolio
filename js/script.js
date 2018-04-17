//event pada saat link

$('.page-scroll').on('click', function(e){
    //console.log('ok'); untuk test kalo jalan klik kanan inspect browser
    
    //ambil isi href
    var tujuan = $(this).attr('href');
    //console.log(href); test
    //tangkap elemen

    var elemenTujuan = $(tujuan);
    //console.log(elemenTujuan.offset().top);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();
});

// parallax
//about
$(window).on('load', function(){
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
});

$(window).scroll(function() {
    var wScroll = $ (this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    //portfolio

    if( wScroll > $('.portfolio').offset().top - 200 ) {
        //console.log('ok');
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul'); 
            }, 300 * (i+1));
        }); 
    }
}); 