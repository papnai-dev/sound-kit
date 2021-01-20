const body=document.querySelector(`body`);
const topkeys=document.querySelector('.topkeys');
const midkeys=document.querySelector('.midkeys');
const botkeys=document.querySelector('.botkeys');
const midrow=[65,83,68,70,71,72,74,75,76];
const toprow=[81,87,69,82,84,89];
const botrow=[90,88,67,86,66,78];

function playSound(){
    changeBackground(event.keyCode);
    const key=document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(key)
key.classList.add('playing');    
    const audio=document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio)return;//stop the function from running altogether
    audio.currentTime=0;//rewind audio to the start
    audio.play();
};

function removeTransition(e){
if(e.propertyName!=='transform') return;//skip it if it is not a transform
this.classList.remove("playing");
};

const changeBackground=(e)=>{
   if(toprow.includes(e)){
        body.style.background="url(https://images.unsplash.com/photo-1444146085469-2a4ef5a7e5fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) bottom center";
        body.style.backgroundSize="cover";    
        body.style.transition="background 2s ease-in-out";
        
    }
    else if(midrow.includes(e)){
        body.style.background="url(https://images.unsplash.com/photo-1526933893123-220ba506e809?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) bottom center";
        body.style.backgroundSize="cover";    
        body.style.transition="background 2s out";
        }
    else if(botrow.includes(e)){
        body.style.background="url(https://images.unsplash.com/photo-1540200882611-31297ad57e00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) bottom center ";
        body.style.backgroundSize="contain";    
        body.style.transition="background 2s ease-in";
    }
    
        
}

const keys=document.querySelectorAll('.key');
keys.forEach((key)=>key.addEventListener('transitionend',removeTransition));


window.addEventListener("keydown",playSound);

