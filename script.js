let dice1=document.querySelector('.dice1');
let dice2=document.querySelector('.dice2');
let result=document.querySelector('.result');
let button=document.querySelector('.shake');
console.log("yaha dekhe");
button.addEventListener('click',function(){
let diceNum=Math.floor(Math.random()*6)+1;
let diceNum2=Math.floor(Math.random()*6)+1;
result.innerHTML=diceNum+diceNum2;
dice1.innerHTML=diceNum;
dice2.innerHTML=diceNum2;



});

// Yay!. Ab last problem
// 6 se jyada kyu aa rha hai. yhi na?
//ha ji
// kyuki hamlog 2 dice ko le ke khel rhe hai. to 12 tak aa skta hai na kuchchu
//ha ji
// so not an error. and Yay!!!!!!
// waah
//love you//rukie ek ar change//ho gya
// dice 1 aur dice 2 me kya aaya ye bhi change kar do./ /ya achcha
//ho gya
// very good. want to upload it to github?
//yes but not today,
// i want to work on css
// okay, when you do tell me. And i will show you another important feature of github.
//achcha ji
// so what shall we do now? mithai is on my mind :)
// online on WA?whatsapp lightbulb?
//ha ji aa gye //na
