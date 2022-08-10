const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

const pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i];

    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector(".info-altura");    
    const altura = tdAltura.textContent;

    const tdImc = paciente.querySelector(".info-imc");

    let pesoEhValido = validaPeso(peso);
    let alturaEhValido = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaEhValido){
        console.log("Altura inválida!")
        alturaEhValido = false;
        tdImc.textContent = "Altura inválido!";
        paciente.classList.add("paciente-invalido");        
    }

    if(pesoEhValido && alturaEhValido){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){

    if(peso >= 0 && peso < 1000) {
        return true;
    }else{
        return false;
    }

}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    let imc = peso / (altura * altura);

    return imc.toFixed(2);
}

