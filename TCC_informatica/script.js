//var nome = batata (em outras linguagens)
let raca = "Raca" //definindo a variavel em java script 
let idade =" --- meses"
let status_dele ="Buscando um Lar"
let lugar = "Lugar"
let ONG = "ONG..."
//Foto do animal:
let imagem = document.getElementById("Imagemface");
//let imagem = document.getElementById("Imagemface"+""+valor+""); testar depois


function Encaminhar(){//troca as informações do animal.
    //dentro do documento.procure o id de nome "". atribua o texto = "texto escolhido" + variavel
    document.getElementById("cabeçalho").textContent = "Titulo"
    document.getElementById("raca do animal").textContent = "Raça do pet: " + raca
    document.getElementById("idade do animal").textContent = "Idade: " + idade
    document.getElementById("status do animal").textContent = "Satus: " + status_dele
    document.getElementById("lugar do animal").textContent = "Local: " + lugar
    document.getElementById("ong do animal").textContent = "Atual responsavel: " + ONG
}

function procurar(){
    //limpa a variavel ao selecionar... (não gosto muito, as vezes o usuário vai escrever errado e quer corrijir), mas caso ele coloque espaço vazio remove evitando erros inesperados.
    
    //O código abaixo realiza o input do usuario e substituição do campo de busca.
    //variavel "nome" = dentro do documento.busque o id "nome do id"
    let inputBarraPesquisa =document.getElementById("inputBarraPesquisa") //pegar as informações do objeto
    //console.log(inputBarraPesquisa), apenas verificar se o objeto inteiro foi pego...
    let textopesquisa = inputBarraPesquisa.value.trim() //.trim remove os espaços do começo e fim
    //let textopesquisa = inputBarraPesquisa.value //se deixa-se sem o .trim se o ususario colocar espaço repetidas vezes vai pesquisar vazio... (mini bug)
    //verifica se a pessoa digitou alguma coisa
        if (textopesquisa != ""){
        //console.log(inputBarraPesquisa)
        document.getElementById("nome pesquisado").textContent = textopesquisa
        }
    //limpa a variavel ao selecionar... (não gosto muito, as vezes o usuário vai escrever errado e quer corrijir), mas caso ele coloque espaço vazio remove evitando erros inesperados.
    banco()
    inputBarraPesquisa.value =""
}

function banco(){
    //variavel "nome" = dentro do documento.busque o id "nome do id"
    let inputBarraPesquisa =document.getElementById("inputBarraPesquisa") //pegar as informações do objeto
    //console.log(inputBarraPesquisa), apenas verificar se o objeto inteiro foi pego...
    let textopesquisa = inputBarraPesquisa.value.trim() //.trim remove os espaços do começo e fim
    //let textopesquisa = inputBarraPesquisa.value //se deixa-se sem o .trim se o ususario colocar espaço repetidas vezes vai pesquisar vazio... (mini bug)
    //verifica se a pessoa digitou alguma coisa
    document.getElementById("nome pesquisado").textContent = textopesquisa
    switch (textopesquisa){
        case "dog":
            raca = "Dog" //definindo a variavel em java script 
            idade ="2 mês"
            status_dele ="Lar encontrado"
            lugar = "Santos"
            ONG = "ONG: Solaria"
            imagem.src ="https://cdn-icons-png.freepik.com/512/1887/1887523.png";
            Encaminhar()
            break;
        case "gato":
            //var nome = batata (em outras linguagens)
            raca = "Gato" //definindo a variavel em java script 
            idade ="1 mês"
            status_dele ="Buscando um Lar"
            lugar = "São Paulo"
            ONG = "ONG: Silvas"
            imagem.src ="https://cdn-icons-png.freepik.com/256/3529/3529317.png";
            Encaminhar()
            break;
        }
}
//https://s3.amazonaws.com/petz-cdm-stg/94d3341e-1a48-416e-b6ea-f07018db6f1e.jpeg