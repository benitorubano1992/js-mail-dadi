//prova collegamento
console.log("file js collegato")
const emailList=["benito.rubano@gmail.com","plutopippo@gmail.com","benito.r92@outlook.it","rubanobenito@gmail.com"];
const userEmail=prompt("Enter your email");
let isFound=false;
for(let i=0;i<emailList.length && !isFound ;i++){
    if(userEmail===emailList[i])
        isFound=true;
    }
if(isFound)
console.log(`l'email ${userEmail} è presente `)
else
console.log(`l'email ${userEmail}  non è presente,inserisci un email corretta  `)
