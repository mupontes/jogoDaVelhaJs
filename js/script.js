const celulas = document.querySelectorAll(".celula");
let checaTurno = true; 
const jogadorx = "X";
const jogador0 = "O";
const campoVez = document.getElementById("vez");




const combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")) {
      jogar(event.target.id);  
    }
    
});

function jogar(id) {
    const celula = document.getElementById(id);
    

    if (celula.textContent === '' ){
        turno = checaTurno ? jogadorx : jogador0;
    
    
        celula.textContent = turno;
        celula.classList.add(turno);
                    
        checaVencedor(turno);
    }
    
     
        
      
    
    
    
    
    
    
}

function checaVencedor(turno) {
    const vencedor = combinacoes.some((comb) => {
        return comb.every((index) => {
            return celulas[index].classList.contains(turno);
        }) 
    });

    if(vencedor){
        encerraJogo(turno);
    } else if (checaEmpate()){
        encerraJogo();
    } else {
        checaTurno = !checaTurno;
        teste = checaTurno ? jogadorx : jogador0;
        campoVez.innerHTML = `Jogador ${teste} é sua vez`;
    }
    
}

function checaEmpate () {
    let x = 0;
    let o = 0;

    for (index in celulas) {
        if (!isNaN(index)) {
            if(celulas[index].classList.contains(jogadorx)) {
                x++;
            }
            if(celulas[index].classList.contains(jogador0)) {
                o++;
            }
        }
    }

    return x + o === 9 ? true : false;
}

function encerraJogo(vencedor = null) {
   
    const telaEscura = document.getElementById("telaEscura");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    let mensagem =  null;

    telaEscura.style.display = "block";
    telaEscura.appendChild(h2);
    telaEscura.appendChild(h3);


    if (vencedor) {
        h2.innerHTML = `O jogador <span>${vencedor}</span> ganhou`;
    } else {
        h2.innerHTML = 'Empatou';
    }

    let contador = 3;
    setInterval(() => {
        h3.innerHTML = `Novo jogo em ${contador--}...`;
    }, 1000);

    setTimeout(() => location.reload(), 4000);
}