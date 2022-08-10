const botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function (){
    console.log("Buscando pacientes...");

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();

    xhr.addEventListener("load", function() {

        const erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            const resposta = xhr.responseText;
            const pacientes = JSON.parse(resposta);
    
            pacientes.forEach(e => {
                adicionaPacienteNaTabela(e);
            });
            
        }else{
            erroAjax.classList.remove("invisivel");
        }

    });





});