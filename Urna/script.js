let SeuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1--right');
let numeros = document.querySelector('.d-1-3');


let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = [];

function comercarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHTML = '';
    numero = '';
    votoBranco = false;

    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHTML += '<div class="numero pisca"></div>';

        } else { numeroHTML += '<div class="numero"></div>'; }
    }

    SeuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;

}
function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });
    if (candidato.length > 0) {
        candidato = candidato[0];
        SeuVotoPara.style.display = 'block';
        descricao.innerHTML = ` Nome: ${candidato.nome}<br/> Partido: ${candidato.partido}`;
        aviso.style.display = 'block';

        let fotosHtml = '';
        for (let i in candidato.fotos) {
            if (candidato.fotos[i].small) {
                fotosHtml += `<div class="d-1-image small">
            <img src="img/${candidato.fotos[i].url}" alt="" />
            ${candidato.fotos[i].legenda}
        </div>`;

            } else {
                fotosHtml += `<div class="d-1-image">
            <img src="img/${candidato.fotos[i].url}" alt="" />
            ${candidato.fotos[i].legenda}
        </div>`;

            }

        }
        lateral.innerHTML = fotosHtml;
    } else {
        SeuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class = "aviso--grande pisca">VOTO NULO</div> ';
    }

}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();

        }
    }
}
function branco() {
    if (numero === '') {
        votoBranco = true;
        SeuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class = "aviso--grande pisca">VOTO EM BRANCO</div> ';
        console.log(votoBranco);

    } else {
        alert('o bot??o BRANCO s?? pode ser utilizado sem numeros digitados.\n' + 'Urilize a tecla CORRIGE para limpar os n??meros digitados.')
    }
}
function corrige() {
    comercarEtapa();
}
function confirma() {
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;

    if (votoBranco === true) {
        let votoConfirmado = true;

        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'Branco'

        });

    } else if (numero.length === etapa.numeros) {
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        })

    }
    votoConfirmado = true;
    if (votoConfirmado) {
        etapaAtual++;

        if (etapas[etapaAtual] !== undefined) {
            comercarEtapa();
        } else {
            document.querySelector('.tela').innerHTML = '<div class = "aviso--gigante pisca">FIM!</div> ';
            console.log(votos);
        }
    }

}
comercarEtapa();