
//var firebase = require('firebase');

//const { default: Axios } = require("axios");






let shottype = "hit";
let pp= localStorage["p1"];
let player1 = localStorage["p1"];
let player = "p1";


let p1shot = 0;
let p1hit = 0;
let p1miss = 0;
let p1catch = 0;
let p1point= 0;
let p1dink=0;
let p1drain = 0;
let bo = 0;
let by = 0;
let bl = 0;
let br = 0;







export function updateplayer(){
    
    player = this.id;
    pp= localStorage[player];
    
    $("#select").replaceWith(`<div id="select">Current Player: ${pp} | Current Shot Type: ${shottype}</div>`);
    
}

function updateshot(){
    shottype = this.id;
   $("#select").replaceWith(`<div id="select">Current Player: ${pp}  | Current Shot Type: ${shottype}</div>`);
}

function check(){

    $("#players").replaceWith(`
    Player Select
    <button class = "button3">${player1}</button><button id="${player2}" class = "button3">Player 2</button>
    <button id="${player3}" class = "button3">Player 3</button><button id="${player4}" class = "button3">Player 4</button>
`)
 }

function addnames(){
    
    localStorage['p1'] = $("#name1").val();
    
}

function updatestat(){
    
    if(player == "p1"){
        if(shottype == "hit"){
            
            p1hit++;
            p1shot++;
            p1point++;
            
        }
        if(shottype == "miss"){
            p1miss++;
            p1shot++;
        }
        if(shottype == "catch"){
            p1catch++;
            p1shot++;
        }
        if(shottype == "drain"){
            p1drain++;
            p1shot++;
            p1point= p1point+3;
        }
        if(shottype == "dink"){
            p1drain++;
            p1shot++;
            p1point = p1point+2;
        }
    
        $("#p1sc").replaceWith(`<div id="p1sc">
        Shots: ${p1shot} || Hits: ${p1hit}
        <br> Misses: ${p1miss} || Caught: ${p1catch}
        <br> Bounced right:${br} || Bounced left: ${bl}
        <br> Bounced other side: ${bo} || Bounced your side: ${by}
        <br> Drained: ${p1drain} || Dink: ${p1dink} || Points: ${p1point}
  </div>`)
    }
   
}

function cupdateo() {
    
    bo++;
    updatestat();

}
function cupdatey() {
    
    by++;
    updatestat();

}
function cupdater() {
    
    br++;
    updatestat();

}
function cupdatel() {
    
   bl++; 
    updatestat();

}


const rungame = function(){
$(".navbar").append(`<div id="select">Current Player: ${player1} | Current Shot Type: ${shottype}</div>`)
$("#players").replaceWith(`<div id="players">Player Select
<button id="p1" class="button3">${player1}</button>

</div>`);
$("#name1er").replaceWith(`<div class="pongname" id="name1er">${player1}
<br>
</div>`);

$("#shots").on("click", ".button3", updateshot);
$("#shots").on("click", "#miss", updatestat);
$("#shots").on("click", "#drain", updatestat);
$("#shots").on("click", "#catch", updatestat);
$("#shots").on("click", "#dink", updatestat);
$(".button44").on("click", ".button3", cupdatel);
$(".button33").on("click", ".button3", cupdater);
$(".button22").on("click", ".button3", cupdatey);
$(".button1").on("click", ".button3", cupdateo);



$(".mainpage").on("click", "#play", addnames);



      
}
//updateStats("testuser", 100, 1, 250);

//console.log("statsupdated");
$(function(){
    
    rungame();
    //updateStats("testuser", 5, 1, 12);
    
    
    
});