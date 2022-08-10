const paciente = document.querySelectorAll(".paciente");

const tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    // const alvoEvento = event.target;
    // const paiDoAlvo = alvoEvento.parentNode;
    // paiDoAlvo.remove();

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});
