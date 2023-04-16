let beat1= new Audio('sounds/crash.mp3');
let beat2= new Audio('sounds/kick-bass.mp3');
let beat3= new Audio('sounds/snare.mp3');
let beat4= new Audio('sounds/tom-1.mp3');
let beat5= new Audio('sounds/tom-2.mp3');
let beat6= new Audio('sounds/tom-3.mp3');
let beat7= new Audio('sounds/tom-4.mp3');



document.addEventListener("keydown",function(event){
    var currKey=event.key;
    makeSound(currKey);
});

var totalButton=document.querySelectorAll("button").length;

for(var i=0;i<totalButton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonText=this.innerHTML;
        makeSound(buttonText);
    });
}

function makeSound(currKey){
switch(currKey){
    case 'w':beat1.play();
    break;
    case 'a':beat2.play();
    break;
    case 's':beat3.play();
    break;
    case 'd':beat4.play();
    break;
    case 'j':beat5.play();
    break;
    case 'k':beat6.play();
    break;
    case 'l':beat7.play();
    break;
}
}
