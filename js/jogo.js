console.log('Início - Jogo do Dinossauro!');

const dino = document.querySelector('.dino');
let estaPulando = false;

//Lidando com a tecla pressionada
document.addEventListener('keydown', (event) =>{
    //console.log('Tecla espaço pressionada? ', event.code == 'Space');
    //Se não está pulando, então pule!
    if (event.code === 'Space')
        if(!estaPulando) pular();
})

function pular() {
    let position = 0;
    let intervaloPulo = setInterval(() => {
        estaPulando = true;        
        if(position >= 250){
            console.log('Pulou!')
            clearInterval(intervaloPulo);//Para de subir
            let intervaloQueda = setInterval(() => {
                if(position <= 0 ) {
                    clearInterval(intervaloQueda);
                    estaPulando = false;
                    console.log('Caiu!')
                }else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20); //20 ms
}

const background = document.querySelector('.background');

function criarCacto() {
    const cacto = document.createElement('div');
    let cactoPosition = 1000;
    let tempoRandom = Math.random() * 6000;
    
    cacto.classList.add('cacto');
    cacto.style.left = 1000 + 'px';
    background.appendChild(cacto);

    let intervaloEsquerda = setInterval(() => {
        

        if(cactoPosition <= -60) {
            clearInterval(intervaloEsquerda);
            background.removeChild(cacto);
        } else {
            cactoPosition -= 10;
            cacto.style.left = cactoPosition + 'px';
        }

    }, 20);

    setTimeout(criarCacto, tempoRandom);

}

//Assim que o jogo iniciar
criarCacto();