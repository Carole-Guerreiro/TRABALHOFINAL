function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Elementos - declarar e selecionar

// elementos para lista hobby
let myList = document.getElementById("listaHobby");
let AdicionarHobby = document.getElementById("AdicionarHobby");
// elementos para trocar imagem
let TrocarImagem = document.getElementById("TrocarImagem");
let img = document.getElementById('imgPrincipal');
// elementos para mudar tema
let MudarTema = document.getElementById("MudarTema");
let mudarBackgroundColor = document.querySelector("html");//selecionar o elemento primeiro elemento de html, que é tb o único, // poderia usar tb o documentElement que é um atalho para o elemento html
// elementos para selecionar o botão e onde colocar a frase da API
let chuckBtn = document.getElementById('norrisBtn');
let CNfact = document.getElementById('chuckNorris');
// elementos para selecionar formulário
let myFormulario = document.querySelector("form");
let botaoFormulario = document.getElementById("SubmeterPortf");
let myName= document.querySelector("#NomePerfil");
let myPhrase = document.querySelector("#FraseApresentacao");
let myImg = document.querySelector("#imagemPerfil");
myImg.style.width = "250px";
myImg.style.borderRadius="2%";
let mudarBgColor = document.querySelector("#cardPerfil");
// elementos para mudar a cor do background ddo body
let randomBgColor = document.querySelector("body");
let randomColorBtn = document.getElementById("randomColorBg");
// selecionar elemento botão reset
let resetBtn = document.getElementById("resetBtn");

// constante com os valores e keys iniciais do estado inicial da página
const estadoInicial = {
    temaOriginal: "light",
    imagemPrincipal: img.src,
    nome: myName.innerText,
    frase: myPhrase.innerText,
    myList : myList.innerHTML,
    imagemPerfil: myImg.src,
    corCard: ""
};


AdicionarHobby.addEventListener("click", function(event){
    //antes de avançar para o servidor eu quero fazer uma coisa
    event.preventDefault();

    //variável que guarda a resposta do prompt
    let hobby = prompt("Escreve um hobby");

    //cria um novo ponto de lista por cada hobby colocado 
    let newLi = document.createElement('li');
    newLi.innerText = hobby;
    
    //coloca o novo input por baixo o filho anterior do id onde está ul
    myList.appendChild(newLi);

})


TrocarImagem.addEventListener("click", function(event){
    //antes de avançar para o servidor eu quero fazer uma coisa
    event.preventDefault();
  
    if (
        img.getAttribute("src") ==
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRaaw3MgsDAIPxhovsaxoFogi9W11hj0J6g&s"
    ) {
        img.setAttribute(
            "src",
            "https://www.vetsobrerodas.pt/uploads/submenus/chegada-novo-cao-a-casa[1].jpg"
        );
    } else {
        img.setAttribute(
            "src",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRaaw3MgsDAIPxhovsaxoFogi9W11hj0J6g&s"
        );
    }
})


MudarTema.addEventListener("click", function(event){
//antes de avançar para o servidor eu quero fazer uma coisa
    event.preventDefault();

// se o tema estiver claro mudar para escuro, altera a cor do texto automaticamento
    if (mudarBackgroundColor.getAttribute("data-bs-theme")=="dark"){
        
        mudarBackgroundColor.setAttribute("data-bs-theme", "light")
        
    } else {
        mudarBackgroundColor.setAttribute("data-bs-theme", "dark") 
    }
})


chuckBtn.addEventListener('click', function(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        //a data que quero está guardada em value
    CNfact.innerText = data.value 
  })
})


myFormulario.addEventListener("submit", function(event){
    //antes de avançar para o servidor eu quero fazer uma coisa
    event.preventDefault();

    //variavel convertida para número para contabilizar no localstorage, (era devolvida uma string)
    let contarFormulario = Number(localStorage.getItem("contador_Formulario"));

    //se não exitir um valor válido na variável contarFormulario
    if(!contarFormulario){
        contarFormulario=1;
    }else{
        contarFormulario++;
    }

    //coloca o novo valor do contador no local storage
    localStorage.setItem("contador_Formulario", contarFormulario);

    //traz um objeto com TODOS os inputs do formulário
    let FormularioData = new FormData(this);
    
    //acede ao input do name do formulário do nome, frase, foto e cor
    let nome = FormularioData.get("nameInput");
    let frase = FormularioData.get("floatingTextarea");
    let foto = FormularioData.get("photoInput");
    let corCard = FormularioData.get("foreground");
    
    //associa o campo a atualizar ao input 
    myName.innerText = nome;
    myPhrase.innerText = frase;
    myImg.src = foto;
    mudarBgColor.style.backgroundColor = corCard;
    
    //limpa todos os dados dos inputs
    this.reset();
         
})


//colocar o documento à escuta do evento pressionar tecla enter
//e faz um alert
document.addEventListener("keydown", function(event){
    if(event.key == 'enter' || event.key == "Enter"){
        alert("Tem a certeza que acabou o exercício?");
    }
});


randomColorBtn.addEventListener("click", function(event){
//antes de avançar para o servidor eu quero fazer uma coisa
    event.preventDefault();

    //muda a cor do background usando a função getRandomInt para gerar um rgb
    randomBgColor.style.backgroundColor = "rgb("+getRandomInt(255)+","+getRandomInt(255)+","+getRandomInt(255)+")";

})

resetBtn.addEventListener("click", function(){

    //Reset tema original
    mudarBackgroundColor.setAttribute("data-bs-theme", estadoInicial.temaOriginal);

    //Reset imagem principal
    img.src = estadoInicial.imagemPrincipal;

    //Reset perfil
    myName.innerText = estadoInicial.nome;
    myPhrase.innerText = estadoInicial.frase;
    myImg.src = estadoInicial.imagemPerfil;
    mudarBgColor.style.backgroundColor = estadoInicial.corCard;

    //Reset hobbies
    myList.innerHTML = estadoInicial.myList;

    //Reset formulário
    myFormulario.reset();

    //Reset contador
    localStorage.removeItem("contador_Formulario");

    //Reset API texto
    CNfact.innerText = "";

    randomBgColor.style.backgroundColor = "";
});

