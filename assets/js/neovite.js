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

        // adicionando parâmetros dinamicamente
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?section=' + id;
        window.history.pushState({path:newurl},'',newurl);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200) {
                    //console.log(xmlhttp.responseText);
                    console.log('alright');
                }
                else if (xmlhttp.status == 400) {
                    //console.log('There was an error 400');
                }
                else {
                    //console.log('something else other than 200 was returned');
                }
            }
        };

        xmlhttp.open("GET", newurl, true);
        xmlhttp.send(); 

    });

});