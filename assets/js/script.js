 
let stars = document.getElementById('stars');

let moon = document.getElementById('moon');

let mountains_behind = document.getElementById('mountains_behind');

let text = document.getElementById('text');

let btn = document.getElementById('btn');

let mountains_front = document.getElementById('mountains_front');

let header = document.querySelector('header');

window.addEventListener('scroll',move);

function move(){
    let value = window.scrollY;

    stars.style.left = value * 0.25 + 'px';
   
    moon.style.top = value * 1.05 + 'px';
    
    mountains_behind.style.top = value * 0.5 + 'px';
    
    mountains_front.style.top = value * 0 + 'px';
    
    text.style.marginRight = value * 4 + 'px';

    text.style.marginTop = value * 1.5 + 'px';
    
    btn.style.marginTop = value * 1.5 + 'px';
    
    header.style.top = value * 0.5 + 'px';

}

var navigation = document.getElementById('navigation');
 

var content = document.getElementById('section');


 var showSidebar = false;

 function toggleSideBar(){
     showSidebar = !showSidebar;

    if(showSidebar){
        navigation.style.marginLeft ='-20vw';
        navigation.style.animationName = 'showSidebar';
        content.style.filter = 'blur(10px)';


    }
    else{
        navigation.style.marginLeft ='-100vw';
        navigation.style.animationName = '';
        content.style.filter = '';
    }
    

 }

 function closeSidebar(){
     if(showSidebar){
         toggleSideBar();
     }
 }

 window.addEventListener('resize',function(event){
     if(this.window.innerWidth > 768 && showSidebar){
         toggleSideBar();
     }
 });
