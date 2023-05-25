function verificaChuteValido(chute) {
    const numeroAtual = +chute

    if (chuteInvalido(numeroAtual)) {
        elementoChute.innerHTML += '<div>Valor Invalido!</div>'
        return
    }

    if (numeroForaDaDica(numeroAtual)) {
        elementoChute.innerHTML += `<div>Valor errado! O número precisa estar entre ${menorValor} e ${maiorValor}!</div>`
        return
    }

    if (numeroAtual === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}!</h3>

        <button id="jogarNovamente" class="botaoJogar"> Jogar Novamente!</button>

        `
    } else if (numeroAtual > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor! <i class="fa-solid fa-arrow-down-long"></i> </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior! <i class="fa-solid fa-arrow-up-long"></i> </div>
        `
    }

}
function chuteInvalido(numeroAtual) {
    return Number.isNaN(numeroAtual)
}

function numeroForaDaDica(numeroAtual) {
    return numeroAtual > maiorValor || numeroAtual < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
})