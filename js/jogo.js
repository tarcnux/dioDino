console.log('Início - Jogo do Dinossauro!');

const dino = document.querySelector('.dino');
let dinoPosition = 0;
let estaPulando = false;
let placar = 0;

//Lidando com a tecla pressionada
document.addEventListener('keydown', (event) =>{
    //console.log('Tecla espaço pressionada? ', event.code == 'Space');
    //Se não está pulando, então pule!
    if (event.code === 'Space')
        if(!estaPulando) pular();
})

function pular() {
    let intervaloPulo = setInterval(() => {
        estaPulando = true;        
        if(dinoPosition >= 250){
            console.log('Pulou!')
            clearInterval(intervaloPulo);//Para de subir
            let intervaloQueda = setInterval(() => {
                if(dinoPosition <= 0 ) {
                    clearInterval(intervaloQueda);
                    estaPulando = false;
                    console.log('Caiu!')
                }else {
                    dinoPosition -= 20;
                    dino.style.bottom = dinoPosition + 'px';
                }
            }, 20);
        }else {
            dinoPosition += 20;
            dino.style.bottom = dinoPosition + 'px';
        }
    }, 20); //20 ms
}

const background = document.querySelector('.background');

function criarCacto() {
    const cacto = document.createElement('div');    
    let tempoRandom = Math.random() * 6000;
    let cactoPosition = 1000;
    
    cacto.classList.add('cacto');
    cacto.style.left = 1000 + 'px';
    background.appendChild(cacto);

    let intervaloEsquerda = setInterval(() => {
        
        if (cactoPosition <= -59 ) {
            placar += 10;
            console.log(placar);
        }

        if(cactoPosition <= -60) {
            clearInterval(intervaloEsquerda);
            background.removeChild(cacto);
        } else if ( cactoPosition > 0 &&
                    cactoPosition <= 60 &&
                    dinoPosition <= 60) {
                document.body.innerHTML = '<h1 class="fim-de-jogo">Fim de Jogo</h1> <h2 class="fim-de-jogo" id="placar">Placar: </h2>';
                document.querySelector('#placar').innerText =  `Placar: ${placar}`; 
                
                clearTimeout(tempoCacto);                
        } else {
            cactoPosition -= 10;
            cacto.style.left = cactoPosition + 'px';
        }        
    }, 20);

    let tempoCacto = setTimeout(criarCacto, tempoRandom);
}

//Assim que o jogo iniciar
criarCacto();