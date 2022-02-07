window.onscroll = function(){
    fixedMenuDmri();
}

var menuDmri = document.getElementById('dmri-menu');
var stickyDmri = menuDmri.offsetTop;

function fixedMenuDmri(){
    if (window.pageYOffset > stickyDmri){
        menuDmri.classList.add('stickyDmri');
    } else {
        menuDmri.classList.remove('stickyDmri');
    }
}

$(window).scroll(function() {

    var position = $(this).scrollTop();

    $('.section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');

        if (position >= target) {
            $('#dmri-menu li a').attr('href', id).addClass('active');
        }
    });
});

// https://codepen.io/eksch/pen/xwdOeK