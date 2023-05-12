var change = document.getElementById("changebg")

function changeColor(color){
    document.body.style.background = color;
}

function changebg_Run(){
    changeColor('green');
}

/* Allt ovan ^ är för att ändra bakgrundsfärgen. Jag använder här document.getElementById("changebg") för att den ska ändra rätt div. Sedan ändrar den bakgrunden till grön. */

function goodvibesText(){
    /* Sätter texten 'You can do it!' vid diven med id:t goodvibes. */
    document.getElementById("goodvibes").textContent = 'You can do it!';
}

function displayTime(){
    /* Använder Date för att få tiden när knappen klickas. Detta värde sätts sedan in vid diven med id:t time. */
    var time_now = new Date();
    document.getElementById('time').innerHTML = time_now
}

function changePicture(){
    /* Ersätter bilden img tagen med id:t bild_calle med en annan bild. */
    document.getElementById('bild_calle').src = "lof.jpg"
}

function hidePicture(){
    /* Sätter värdet på img tagen med id:t bild_calle till noll. Detta gör att bilden försvinner. */
    document.getElementById('bild_calle').style.display = 'none';
}

function showPicture(){
    /* Samma princip som hidePicture med skillnaden att den visar det så som det var ursprungligen. Initial används istället för none för att uppnå detta. */
    document.getElementById('bild_calle').style.display = 'initial';
}