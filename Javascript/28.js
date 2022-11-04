function pagina (nomeDaPagina){
    return `${nomeDaPagina}.html`
}

function criarJogo (time1, hora, time2){
    return `
    <li>
        <img src="../assets/icons/icon-${time1}.svg" alt="${time1}">
        
        <strong>${hora}</strong>
        <img src="../assets/icons/icon-${time2}.svg" alt="${time2}">
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


document.querySelector('#cards').innerHTML = 
    
    criarCartao1('grupo g','28/11', 'segunda',
    criarJogo('cameroon','07:00','serbia') +    
    criarJogo('brazil','13:00','switzerland')    
    )+
    criarCartao1('grupo h','28/11', 'segunda',
    criarJogo('south-korea','10:00','ghana') +
    criarJogo('portugal','16:00','uruguay')
    )
