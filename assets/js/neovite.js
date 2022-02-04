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