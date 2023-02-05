let n=0;
let n1=3;
n=Math.floor(Math.random()*3+1)

//lista nomi random
function Saluta(nome){
if(n==1){
  console.log("Hi "+nome)
}
if(n==2){
  console.log("ciao "+nome)
}
if(n==3){
  console.log("hola "+nome)
}
}


function ReverseString(str)
  {  // funzione che restituisce 
    //una stringa al contrario
   
    console.log("ciao:"+str);

    str=str.split("").reverse().join("").split(" ").reverse().join(" ");
     console.log(str);
    return str; 
  }


function trovaDispari(){
if(n1%2==1){
console.log("questo numero e dispari"+n1)    
}else{
console.log("questo numero e pari"+n1)  
}
}

module.exports = {saluta: Saluta, inverti: ReverseString, primoDispari: trovaDispari}
