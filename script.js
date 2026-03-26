 
//Elementos - declarar e selecionar o id do botão
let myList = document.getElementById("listaHobby");
let AdicionarHobby = document.getElementById("AdicionarHobby")
//seleciona-se o elemento da imagem com querySelector
let img = document.getElementById('imgPrincipal');
//selecionar o elemento primeiro elemento de html, que é tb o único, 
// poderia usar tb o documentElement que é um atalho para o elemento html
let mudarBackgroundColor = document.querySelector("html");
// seletores para API
let dogBtn = document.getElementById('dog-api');
let dogFact = document.getElementById('imgRandom');

AdicionarHobby.addEventListener("click", function(event){
    //antes de avançar para o servidor eu quero fazer uma coisa
    event.preventDefault();

    //variável que guarda a resposta do prompt
    let hobby = prompt("Escreve um hobby");

    //cria um novo ponto de lista por cada nome de product e nome de quantidade 
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

// se o them estiver claro mudar para escuro, altera o texto automaticamento
// menos o que está na card
    if (mudarBackgroundColor.getAttribute("data-bs-theme")=="dark"){
        
        mudarBackgroundColor.setAttribute("data-bs-theme", "light")
        
    } else {
        mudarBackgroundColor.setAttribute("data-bs-theme", "dark") 
    }
})


dogBtn.addEventListener('click', function(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
    //cria uma tag <img>
    const imgDog = document.createElement("img");
    imgDog.src = data.message;
    // limpa a imagem anterior
    dogFact.innerHTML = "";  
    dogFact.appendChild(imgDog); 

  })
})