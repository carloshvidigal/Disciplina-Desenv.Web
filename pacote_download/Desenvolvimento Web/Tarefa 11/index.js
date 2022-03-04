var a = "";
var b = "";
var c = "";
var delta = "";
var raiz1 = "";
var raiz2 = "";
var X1 = "";
var X2 = "";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function geraEq(){

  a = getRandomIntInclusive(-9,9);
  b = getRandomIntInclusive(-9,9);
  c = getRandomIntInclusive(-9,9);

if(b<0 && c<0){
msg1.innerHTML = a + "x² - " + Math.abs(b) + "x - " + Math.abs(c); 
}
else if(b>0 && c<0){
  msg1.innerHTML = a + "x² + " + b + "x - " + Math.abs(c);   
}
else if(b<0 && c>0){
  msg1.innerHTML = a + "x² - " + Math.abs(b) + "x + " + c;   
}
else if(b>0 && c>0){
  msg1.innerHTML = a + "x² + " + b + "x + " + c;   
}
}
function calculaEq(){

  delta = b*b - 4*a*c;
  raiz1 = (-b + Math.sqrt(delta))/(2*a);
  raiz2 = (-b - Math.sqrt(delta))/(2*a);

if(delta < 0){
raiz1 = null;
raiz2 = null;
}

if(raiz1>0){
raiz1 = raiz1*100;
raiz1 = Math.floor(raiz1);
raiz1 = raiz1/100;
}

if(raiz2>0){
raiz2 = raiz2*100;
raiz2 = Math.floor(raiz2);
raiz2 = raiz2/100;
}

if(raiz1<0){
  raiz1 = raiz1*100;
  raiz1 = Math.ceil(raiz1);
  raiz1 = raiz1/100;
}

  if(raiz2<0){
    raiz2 = raiz2*100;
    raiz2 = Math.ceil(raiz2);
    raiz2 = raiz2/100;
}
  

dlta.innerHTML = "Delta = " + delta;  
r1.innerHTML = "Raiz 1 = " + raiz1;  
r2.innerHTML = "Raiz 2 = " + raiz2;

  X1 = document.getElementById('x1').value;
  X2 = document.getElementById('x2').value;
  
  document.body.style.backgroundColor = 'red';  
  
  if(delta<0){
    r1.innerHTML = "Não possui raíz real";
    r2.innerHTML = "" 
  }
  
  if((X1==raiz1) && (X2==raiz2)){
    document.body.style.backgroundColor = 'green';
  }

  else if((delta<0) && (X1 == '' && X2 == '')){
    r1.innerHTML = "Não possui raíz real";
    r2.innerHTML = "" 
    document.body.style.backgroundColor = 'green';    
  }

  if((delta==0)&&(((X1==raiz1)&&(X2==''))||((X2==raiz2)&&(X1==''))||((X1==raiz2)&&(X2==raiz2)))){
    document.body.style.backgroundColor = 'green';
  }
    
  }

