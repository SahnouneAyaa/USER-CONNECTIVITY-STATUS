let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload=function(){
    if(window.navigator.onLine){
        online()
    }else{
        offline()
    }
}

window.addEventListener("online",function(){
    online();
})

window.addEventListener("offline",function(){
    offline();
})

reload.onclick=function(){
    window.location.reload();
}

function online(){
 title.innerHTML='online now';
 title.style.color='green';
 ul.classList.add('hide');
 reload.classList.add('hide');
}

function offline(){
title.innerHTML='offline now';
ul.classList.remove('hide')
reload.classList.remove('hide');
}