// dice 1

//generating random number for dice 1
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1);
randomNumber1=randomNumber1 + 1;

//generating random image for dice 1
var random_img1="images/dice"+randomNumber1+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",random_img1);


//dice 2

//generating random number for dice 2
var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2);
randomNumber2=randomNumber2 + 1;

//generating random image for dice 1
var random_img2="images/dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",random_img2);

if(randomNumber1>randomNumber2){  // 1 wins
  document.querySelector("h1").innerHTML="player 1 wins";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="player 2 wins";
}else{
  document.querySelector("h1").innerHTML="Draw!";
}
