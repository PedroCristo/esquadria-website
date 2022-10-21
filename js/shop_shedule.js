// Shop Hours

function checkDate(){

    var dt = new Date();
    var th = dt.getHours();
    var td = dt.getDay();
    var tm = dt.getMonth();
    var tda = dt.getDate();
    var fy = dt.getFullYear();

      //Shows the year on the footer

  document.getElementById("output_3").innerHTML = fy ;

    // Check the time and alert the users that the shop is open.
    //PT
    

    if (th >= 8.30 && th < 18.30){

        document.getElementById("output").innerHTML = "Estamos Abertos";
        document.getElementById("output").style.color = "#15EB07";

    // Alert the users that the shop is closed
    } else  {

      document.getElementById("output").innerHTML = "Estamos Encerrados";
      document.getElementById("output").style.color ="#CE3333";
 
    } 

    // Check and alert the users for the shop day off
     if ( td == 0){

        document.getElementById("output").innerHTML = "Estamos encerrados ao domingo";
        document.getElementById("output").style.color = "#CE3333";
    
    } 

     //Check for some time of the year and shows an message to alert the user. Like the CHristmas or something else
     //PT
    if (tm == 11 && tda > 8 || tm == 0 & tda < 6){

        document.getElementById("output_2").innerHTML = "Desejamos a todos os nossos clientes um Feliz Natal e um próspero Ano Novo!!";
        document.getElementById("output_2").style.padding ="5px";
        document.getElementById("output_2").style.color = "white";
        document.getElementById("santa_img").style.display = "block";
      
 
      } else {
 
        document.getElementById("output_2").style.display ="none";
        document.getElementById("santa_img").style.display = "none";
      
    }

      //Check the date and alert the user for an exceptional day off
      //PT
      if (tm == 11 && tda ==25){
		
        document.getElementById("output_1").innerHTML ="Estamos Encerrados! ";
        document.getElementById("output").style.display ="none";
        document.getElementById("output_1").style.padding ="5px";
        document.getElementById("output_1").style.color = "#CE3333";
     
    } else {

        document.getElementById("output_1").style.display ="none";

    } 
    
  
}
