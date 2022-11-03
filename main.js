function criarJogo (time1, hora, time2){
    return `
    <li>
        <img src="./assets/icons/icon-${time1}.svg" alt="${time1}">
        
        <strong>${hora}</strong>
        <img src="./assets/icons/icon-${time2}.svg" alt="${time2}">
    </li>
    
    `
}
let delay = -0.4;
function criarCartao(data, dia,jogos){
    delay += 0.4;
    return `
    <div class="card" style="animation-delay:${delay}s">
        <h2>${data} <span>${dia} </span></h2>
        <ul>
            ${jogos}
            
        </ul>
        
    </div>
    `
}

document.querySelector('#cards').innerHTML = 


    criarCartao('24/11', 'quinta',
    criarJogo('switzerland','07:00','cameroon') +
    criarJogo('uruguay','10:00','south-korea') +
    criarJogo('portugal','13:00','ghana') +
    criarJogo('brazil','16:00','serbia')
    )+
    criarCartao('28/11', 'segunda',
    criarJogo('cameroon','07:00','serbia') +
    criarJogo('south-korea','10:00','ghana') +
    criarJogo('brazil','13:00','switzerland') +
    criarJogo('portugal','16:00','uruguay')
    )+
    criarCartao('02/12', 'sexta',
    criarJogo('south-korea','12:00','portugal') +
    criarJogo('ghana','12:00','uruguay') +
    criarJogo('serbia','16:00','switzerland') +
    criarJogo('cameroon','16:00','brazil')
    )
