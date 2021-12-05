if(document.addEventListener){
    document.addEventListener("DOMContentLoaded", function(){
        loaded();
    });
} else if(document.attachEvent){
    document.attachEvent("onreadystatechange", function(){
        loaded();
    });
}

function loaded(){

    setInterval(loop, 350);

}

var x = 0;

var titleText = [ "h", "ha", "hal", "half", "half g", "half ge", "half gen", "10% loading", "25% loading", "50% loading", "75% loading", "100% loading", "welcome", "to", "half.ml"];

function loop(){

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
