var a= (Math.random()*5)+1;
var b= (Math.random()*5)+1;

var DiceRollOne= Math.round(a);


if ( DiceRollOne===1){
  document.querySelector("div.five").classList.add("colorWhite");
}
else if( DiceRollOne===2){
  document.querySelector("div.three").classList.add("colorWhite");
  document.querySelector("div.seven").classList.add("colorWhite");

}
else if(DiceRollOne===3){
  document.querySelector("div.three").classList.add("colorWhite");
  document.querySelector("div.five").classList.add("colorWhite");
  document.querySelector("div.seven").classList.add("colorWhite");
}
else if (DiceRollOne===4){
  document.querySelector("div.one").classList.add("colorWhite");
  document.querySelector("div.three").classList.add("colorWhite");
  document.querySelector("div.seven").classList.add("colorWhite");
  document.querySelector("div.nine").classList.add("colorWhite");
}
else if( DiceRollOne===5){
  document.querySelector("div.three").classList.add("colorWhite");
  document.querySelector("div.one").classList.add("colorWhite");
  document.querySelector("div.five").classList.add("colorWhite");
  document.querySelector("div.seven").classList.add("colorWhite");
  document.querySelector("div.nine").classList.add("colorWhite");
}
else if( DiceRollOne===6){
  document.querySelector("div.one").classList.add("colorWhite");
  document.querySelector("div.three").classList.add("colorWhite");
  document.querySelector("div.four").classList.add("colorWhite");
  document.querySelector("div.six").classList.add("colorWhite");
  document.querySelector("div.seven").classList.add("colorWhite");
  document.querySelector("div.nine").classList.add("colorWhite");

}


var DiceRollTwo= Math.round(b);

if ( DiceRollTwo===1){
  document.querySelector("div.five5").classList.add("colorWhite");
}
else if( DiceRollTwo===2){
  document.querySelector("div.three3").classList.add("colorWhite");
  document.querySelector("div.seven7").classList.add("colorWhite");

}
else if(DiceRollTwo===3){
  document.querySelector("div.three3").classList.add("colorWhite");
  document.querySelector("div.five5").classList.add("colorWhite");
  document.querySelector("div.seven7").classList.add("colorWhite");
}
else if (DiceRollTwo===4){
  document.querySelector("div.one1").classList.add("colorWhite");
  document.querySelector("div.three3").classList.add("colorWhite");
  document.querySelector("div.seven7").classList.add("colorWhite");
  document.querySelector("div.nine9").classList.add("colorWhite");
}
else if( DiceRollTwo===5){
  document.querySelector("div.three3").classList.add("colorWhite");
  document.querySelector("div.one1").classList.add("colorWhite");
  document.querySelector("div.five5").classList.add("colorWhite");
  document.querySelector("div.seven7").classList.add("colorWhite");
  document.querySelector("div.nine9").classList.add("colorWhite");
}
else if( DiceRollTwo===6){
  document.querySelector("div.one1").classList.add("colorWhite");
  document.querySelector("div.three3").classList.add("colorWhite");
  document.querySelector("div.four4").classList.add("colorWhite");
  document.querySelector("div.six6").classList.add("colorWhite");
  document.querySelector("div.seven7").classList.add("colorWhite");
  document.querySelector("div.nine9").classList.add("colorWhite");

}