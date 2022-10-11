//verifico collegamento
console.log("file js collegato")

const winLimit=10;
let count=0;
let userWin=0;
let pcWin=0;
let tieGame=0;
//generate two random number between 1 and 6
let numberUser=Math.floor(Math.random()*(6-1+1))+1;
let numberPc=Math.floor(Math.random()*(6-1+1))+1;
while(userWin <10){
console.log(numberUser);
console.log(numberPc);    
if(numberUser>numberPc)
userWin++;
else if(numberUser=== numberPc)
tieGame++;
else
pcWin++;

numberUser=Math.floor(Math.random()*(6-1+1))+1;
numberPc=Math.floor(Math.random()*(6-1+1))+1;
count++;

}
console.log(`Total games ${count}`)
console.log(`Total tie game :${tieGame}`)
console.log(`Total pcWin:${pcWin}`)
console.log(`Total userWin:${userWin}`)