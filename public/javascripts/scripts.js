// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    
    if (st > lastScrollTop && st > navbarHeight){
        
        $('div').removeClass('nav-down').addClass('nav-up');
    } else {
        
        if(st + $(window).height() < $(document).height()) {
            $('div').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$(function() {
$('#button').on('click', function() {
    
    console.log('i clicked');
    $('div').removeClass('nav-down').addClass('nav-up');
});

});
