const dino = document.querySelector('.dino');

const background = document.querySelector('.background');

let isPulando = false;

let posicao = 0;

function handleKeyUp(event) {

    if (event.keyCode === 32) {

        if (!isPulando) {
            pular();
        }

        console.log("Pressionou espaço!");

    }
}

function pular() {


    isPulando = true;

    let upIntervalo = setInterval(() => {

        if (posicao >= 150) {

            clearInterval(upIntervalo); //Parou de subir 

            //Descendo
            let downIntervalo = setInterval(() => {

                if (posicao <= 0) {

                    clearInterval(downIntervalo);

                    isPulando = false;

                } else {

                    posicao -= 20;

                    dino.style.bottom = posicao + 'px';
                }
            }, 20);

        } else {

            posicao += 20;

            dino.style.bottom = posicao + 'px';
        }
    }, 20); // Vai se executado a cada 20 mile segundos...
}

function criaCactus() {
    const cactus = document.createElement('div');

    let cactusPositions = 1000;

    let randomTime = Math.random() * 7000;

    //console.log(randomTime);

    cactus.classList.add('cactus');

    cactus.style.left = 1000 + 'px';

    background.appendChild(cactus);

    let leftInvervalo = setInterval(() => {

            cactusPositions -= 10;

            cactus.style.left = cactusPositions + 'px';

            if (cactusPositions < -60) {

                clearInterval(leftInvervalo);

                background.removeChild(cactus);

            } else if (cactusPositions > 0 && cactusPositions < 60 && posicao < 60) {
                //Game Over

                clearInterval(leftInvervalo);

                document.body.innerHTML = '<h1 class="game-over">Fim de jogo :( </h1>';

            } else {

                cactusPositions -= 10;

                cactus.style.left = cactusPositions + 'px';

            }

        },
        20);

    setTimeout(criaCactus, randomTime);
}

criaCactus();


document.addEventListener('keyup', handleKeyUp);