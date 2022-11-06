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
        <div class="nomeTime">
            <img src="./assets/icons/icon-${time1}.svg" alt="${time1}">
            <p>${time1}</p>
        </div>
        <strong>${hora}</strong>
        <div class="nomeTime">
            <img src="./assets/icons/icon-${time2}.svg" alt="${time2}">
            <p>${time2}</p>
        </div>
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

if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/20.html'){
    jogos1 = criarCartao1('grupo a','20/11', 'domingo',
    criarJogo('qatar','13:00','ecuador'))
    jogos2 = ''
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/21.html'){
    jogos1 = criarCartao1('grupo b','21/11', 'segunda',
    criarJogo('england','10:00','iran') +    
    criarJogo('united-states','16:00','wales'))
    jogos2 = criarCartao1('grupo a','21/11', 'segunda',
    criarJogo('senegal','13:00','netherlands'))
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/22.html'){
    jogos1 = criarCartao1('grupo c','22/11', 'terça',
    criarJogo('argentina','07:00','saudi-arabia') +    
    criarJogo('mexico','13:00','poland'))
    jogos2 = criarCartao1('grupo d','22/11', 'terça',
    criarJogo('denmark','10:00','tunisia') +
    criarJogo('france','16:00','australia'))
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/23.html'){
    jogos1 = criarCartao1('grupo e','23/11', 'quarta',
    criarJogo('germany','10:00','japan') +    
    criarJogo('spain','13:00','costa-rica'))
    jogos2 = criarCartao1('grupo f','23/11', 'quarta',
    criarJogo('morocco','07:00','croatia') +
    criarJogo('belgium','16:00','canada'))
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/24.html'){
    jogos1 = criarCartao1('grupo g','24/11', 'quinta',
    criarJogo('switzerland','07:00','cameroon') +    
    criarJogo('brazil','16:00','serbia'))
    jogos2 = criarCartao1('grupo h','24/11', 'quinta',
    criarJogo('uruguay','10:00','south-korea') +
    criarJogo('portugal','13:00','ghana'))
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/25.html'){
    jogos1 = criarCartao1('grupo a','25/11', 'sexta',
    criarJogo('qatar','10:00','senegal') +    
    criarJogo('netherlands','13:00','ecuador'))
    jogos2 = criarCartao1('grupo b','25/11', 'sexta',
    criarJogo('wales','07:00','iran') +
    criarJogo('england','16:00','united-states'))
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/26.html'){
    jogos1 = criarCartao1('grupo c','26/11', 'sábado',
    criarJogo('poland','10:00','saudi-arabia') +    
    criarJogo('argentina','16:00','mexico'))
    jogos2 = criarCartao1('grupo d','26/11', 'sábado',
    criarJogo('tunisia','07:00','australia') +
    criarJogo('france','13:00','denmark'))
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/27.html'){
    jogos1 = criarCartao1('grupo e','27/11', 'domingo',
    criarJogo('japan','07:00','costa-rica') +    
    criarJogo('spain','16:00','germany'))
    jogos2 = criarCartao1('grupo f','27/11', 'domingo',
    criarJogo('belgium','10:00','morocco') +
    criarJogo('croatia','13:00','canada'))
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/28.html') {
    jogos1 = criarCartao1('grupo g','28/11', 'segunda',
    criarJogo('cameroon','07:00','serbia') +    
    criarJogo('brazil','13:00','switzerland')    
    )
    jogos2 = criarCartao1('grupo h','28/11', 'segunda',
    criarJogo('south-korea','10:00','ghana') +
    criarJogo('portugal','16:00','uruguay')
    )
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/29.html') {
    jogos1 = criarCartao1('grupo a','29/11', 'terça',
    criarJogo('ecuador','12:00','senegal') +    
    criarJogo('netherlands','12:00','qatar')    
    )
    jogos2 = criarCartao1('grupo b','29/11', 'terça',
    criarJogo('iran','16:00','united-states') +
    criarJogo('wales','16:00','england')
    )
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/30.html') {
    jogos1 = criarCartao1('grupo c','30/11', 'quarta',
    criarJogo('poland','16:00','argentina') +    
    criarJogo('saudi-arabia','16:00','mexico')    
    )
    jogos2 = criarCartao1('grupo d','30/11', 'quarta',
    criarJogo('tunisia','12:00','france') +
    criarJogo('australia','12:00','denmark')
    )
} else if (url == 'https://berserkess.github.io/nlw-copa2022-explorer/01.html') {
    jogos1 = criarCartao1('grupo e','01/12', 'quinta',
    criarJogo('japan','16:00','spain') +    
    criarJogo('costa-rica','16:00','germany')    
    )
    jogos2 = criarCartao1('grupo f','01/12', 'quinta',
    criarJogo('croatia','12:00','belgium') +
    criarJogo('canada','12:00','morocco')
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
