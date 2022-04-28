
document.querySelector(".titulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++ ){

   var paciente = pacientes[i];
   console.log(pacientes[i]);
   var tdaltura = paciente.querySelector(".info-altura");
  var altura = tdaltura.textContent;
  var tdpeso = paciente.querySelector(".info-peso");
  var peso = tdpeso.textContent;
  var tdimc = paciente.querySelector(".info-imc")
   
  var alturavalida = true;
   var pesovalido = true;
   
   
   
    if (peso <= 0 || peso >= 500){
   console.log("peso inválido");
    pesovalido = false;
   tdpeso.textcontent = "valor inválido";
   tdimc.textContent = "Peso inválido"
   paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0.15 || altura >= 3.00 ){
        console.log("Altura inválida");
        alturavalida = false;
       tdaltura.textContent = "valor inválido";
       tdimc.textContent = "Altura inválida";
       paciente.classList.add("paciente-invalido");
       }
        if(alturavalida==true && pesovalido == true){
        
        var imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);

}

console.log(paciente);
console.log(imc);

      }

      
  
    
     

     