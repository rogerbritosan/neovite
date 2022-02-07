window.onscroll = function(){
    fixedMenuDmri();
    highlightMenu();
}

var menuDmri = document.getElementById('dmri-menu');
menuDmri.style.maxWidth = menuDmri.offsetWidth + "px";
menuDmri.style.minWidth = menuDmri.offsetWidth + "px";

function fixedMenuDmri(){
    if (window.pageYOffset > menuDmri.offsetTop){
        menuDmri.classList.add('stickyDmri');
    } else {
        menuDmri.classList.remove('stickyDmri');
    }
}

function highlightMenu(){
    var position = document.documentElement.scrollTop;
    //console.log('position',position);

    var sections = document.querySelectorAll('.section');
    sections.forEach( s => {

        var target = s.offsetTop;
        var id = s.id;
        //console.log('target',target)

        if (position >= target){
            var menu = document.querySelectorAll('.dmri-menu-link');

            menu.forEach(link => {
                if(link.dataset.section == id){
                    link.classList.add('active');
                }
            })

        }

    });

}

// https://codepen.io/eksch/pen/xwdOeK