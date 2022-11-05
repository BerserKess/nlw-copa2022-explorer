let jogos1 = null
let jogos2 = null
let url = window.location.href
let caminho = window.location.pathname
let link = url.split(caminho)

function voltarAoInicio (local){
    return `
    <a href="${local}"
    <div class="botao">
    <h2>voltar ao inicio</h2>
    </div>
    </a>
    `
    
}

function criarJogo (time1, hora, time2){
    return `
    <li>
        <img src="/assets/icons/icon-${time1}.svg" alt="${time1}">
        
        <strong>${hora}</strong>
        <img src="/assets/icons/icon-${time2}.svg" alt="${time2}">
    </li>
    
    `
}
let delay = -0.4;

function criarCartao1(grupo,data, dia,jogos){
    delay += 0.4;
    
    
    return `
    <div class="card" style="animation-delay:${delay}s">
        <h3>${data} <span>${dia} </span></h3>
        <h2><span>${grupo} </span></h2>
        <ul>
            ${jogos}
            
        </ul>
        
    </div>
    `
}

if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/24.html'){
    jogos1 = criarCartao1('grupo g','24/11', 'quinta',
    criarJogo('switzerland','07:00','cameroon') +    
    criarJogo('brazil','16:00','serbia'))
    jogos2 = criarCartao1('grupo h','24/11', 'quinta',
    criarJogo('uruguay','10:00','south-korea') +
    criarJogo('portugal','13:00','ghana'))
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/28.html') {
    jogos1 = criarCartao1('grupo g','28/11', 'segunda',
    criarJogo('cameroon','07:00','serbia') +    
    criarJogo('brazil','13:00','switzerland')    
    )
    jogos2 = criarCartao1('grupo h','28/11', 'segunda',
    criarJogo('south-korea','10:00','ghana') +
    criarJogo('portugal','16:00','uruguay')
    )
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/02.html') {
    jogos1 = criarCartao1('grupo h','02/12', 'sexta',
    criarJogo('south-korea','12:00','portugal') +   
    criarJogo('ghana','12:00','uruguay')
    )
    jogos2 = criarCartao1('grupo g','02/12', 'sexta',
    criarJogo('serbia','16:00','switzerland') +    
    criarJogo('cameroon','16:00','brazil')
    )
}
document.querySelector('#cards').innerHTML = 
    
   `
   ${jogos1}
   ${jogos2}
   ${voltarAoInicio('./index.html')}
   `

 
