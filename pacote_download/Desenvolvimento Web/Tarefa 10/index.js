function forcaSenha(){
   
        var senha = document.getElementById("senha").value;
        var forca = 0;
        document.getElementById("imprimirForca").innerHTML = "Senha Fraca ";
        
   if(senha.length >= 6){

        forca += 10;
   }
   
   if(senha.match(/[a-z]+/)) {

       forca +=10;
   }
   
   if(senha.match(/[!@#$%¨&*]/)){

       forca +=10;
   } 
   
   if(senha.match(/[123456789]/)){

     forca +=10;
   }

   if(forca==40){
   document.getElementById("imprimirForca").innerHTML = "Ok!Senha válida ";
}
   

}