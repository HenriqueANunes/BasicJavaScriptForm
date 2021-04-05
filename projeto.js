let permissoes = [
    {quemConvidou: "Hman", convidados: ["Lucão","Matheus"]},
    {quemConvidou: "Lima", convidados: ["Ramon", "Dylan"]}
];


function verificarPermissao(){
    let nome = document.getElementById("nome").value;
    let quemConvidou = document.getElementById("quemConvidou").value;

    for(obj of permissoes){
        if(obj.quemConvidou === quemConvidou){
            if(obj.convidados.includes(nome)){
                console.log("aprovado");
                document.getElementById("pesquisa").innerText = "aprovado"
                return
            }
        }
    }
    console.log("reprovado");
    document.getElementById("pesquisa").innerText = "reprovado"
}