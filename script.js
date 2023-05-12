var change = document.getElementById("changebg")

function changeColor(color){
    document.body.style.background = color;
}

function changebg_Run(){
    changeColor('green');
}

function goodvibesText(){
    document.getElementById("goodvibes").textContent = 'You can do it!';
}

function displayTime(){
    var time_now = new Date();
    document.getElementById('time').innerHTML = time_now
}

function changePicture(){
    document.getElementById('bild_calle').src = "lof.jpg"
}

function hidePicture(){
    document.getElementById('bild_calle').style.display = 'none';
}

function showPicture(){
    document.getElementById('bild_calle').style.display = 'initial';
}