window.onscroll = function(){
    fixedMenuDmri();
    highlightMenu();

}

var menuDmri = document.getElementById('dmri-menu');
var body = document.body;
menuDmri.style.maxWidth = menuDmri.offsetWidth + "px";
menuDmri.style.minWidth = menuDmri.offsetWidth + "px";

function fixedMenuDmri(){
    if (window.pageYOffset > menuDmri.offsetTop){
        menuDmri.classList.add('stickyDmri');
        body.classList.add('fixedSpace');
    } else {
        menuDmri.classList.remove('stickyDmri');
        body.classList.remove('fixedSpace');
    }
}

function highlightMenu(){
    var position = document.documentElement.scrollTop;
    var sections = document.querySelectorAll('.section');
    sections.forEach( s => {

        var target = s.offsetTop;
        var id = s.id;
        
        var menu = document.querySelectorAll('.dmri-menu-link');

        if (position >= target){

            menu.forEach( (link,index) => {
                link.classList.remove('active');
                
                if(link.dataset.section == id){
                    link.classList.add('active');
                }

            });

        }

    });

}

var menu = document.querySelectorAll('.dmri-menu-link');
menu.forEach(link=>{

    link.addEventListener('click',function(){

        var id = link.dataset.section;
        var el = document.getElementById(id);
        document.documentElement.scrollTop = el.offsetTop;

        //window.location.hash = id;

        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?section=' + id;
        window.history.pushState({path:newurl},'',newurl);

    });

});