var startcontainer = document.querySelector('.startcontainer');
var startbutton = document.querySelector('.startbutton');
var questioncontainer = document.querySelector('.questioncontainer');
var highscorecontainer = document.querySelector('.highscorecontainer');
var questiontext = document.querySelector ('.questiontext');
var time= 10; 

questioncontainer.style.display='none';
highscorecontainer.style.display='none';


startbutton.addEventListener('click', function(){
startcontainer.style.display='none';
//use style.display='block' to show first display='none' resembling a new page
questioncontainer.style.display='block';
controlTimer()

questiontext.textContent="Question #1"

})

function controlTimer(){
    var countDown= setInterval(function(){
        time--
        console.log(time)
        if (time == 0) {
            clearInterval(countDown)
        }
    },1000)
    


}