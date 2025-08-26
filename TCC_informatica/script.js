//var nome = batata (em outras linguagens)
let raca = "Raca" //definindo a variavel em java script 
let idade =" --- meses"
let status_dele ="Buscando um Lar"
let lugar = "Lugar"
let ONG = "ONG..."
//Foto do animal:
let imagem = document.getElementById("Imagemface");
//let imagem = document.getElementById("Imagemface"+""+valor+""); testar depois

//Informações adicionadas.
let Novo_perfil = "Imagem"




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



function CriandoPerfis(){ //UniaoDados - Cria-se novos elementos com seus respectivos filhos.
    let Mestre = document.getElementById("FichaAnimal")//Definimos o lugar que irá ser adicionado de id "FichaAnimal"
    //variaveis locais teste (pai e filha) - //classe pai é do tipo <ul>
    let Pai = document.createElement("ul") //poderiamos definir pelo tipo getElementById (ul) ou getElementById ("nome da classe")classe do elemento
    let filho = document.createElement("li") //informa qual o tipo de elemento criado (do tipo html)
    
    //variaveis filhas.
    let raca = document.createElement("p")
    let idade = document.createElement("p") 
    let status_dele = document.createElement("p") 
    let lugar = document.createElement("p") 
    let ONG = document.createElement("p") 
//    let imagem = document.createElement("p")
    
    filho.textContent = Novo_perfil //texto externo
    filho.id = "ong do animal" //id da classe filho.
    Mestre.appendChild(Pai)
    Pai.appendChild(filho)
    
    //Atribuindo valor provisorio as variaveis teste
    raca.textContent = "Dog" //definindo a variavel em java script 
    idade.textContent ="2 mês"
    status_dele.textContent ="Lar encontrado"
    lugar.textContent = "Santos"
    ONG.textContent = "ONG: Solaria"

    //Estamos criando um laço de repetição para criar o perfil automaticamente. Uma mera adição experimental.
    let valor = 0 //definimos uma valor limitar eventualmente o looping.
    let lista = [raca,idade,status_dele,lugar,ONG]; //lista de elemntos que serão adicionado (Nota: anteriormente criados)
    while(valor < lista.length){  // compara o valor inicial ao tamanho da nossa lista (5 elementos)
        Pai.appendChild(lista[valor]) //Adiciona os filhos um por um.
        valor+=1; //soma até ter o tamanho final da lista.
    }
}

let verificacao = document.getElementById("Label")

function Cadastro(){
    
    let inputCadastro = document.getElementById("inputCadastro")
    let valor = inputCadastro.value
    
    let informacoes = []
    informacoes.push(valor)
        if (informacoes.length >0 && valor !=0){
            verificacao.textContent = informacoes[0]
        }
}
