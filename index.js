
var randomNumber1 = Math.floor(Math.random()*6+1); //generating random numbers between 1 and 6

var randomNumber2 = Math.floor(Math.random()*6+1); //generating random numbers between 1 and 6

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png"); // changing img1 source based on randomNumber1

document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png"); // changing img1 source based on randomNumber2

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}
