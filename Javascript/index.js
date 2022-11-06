let caminho = window.location.pathname

let delay = -0.4;
function diaDeJogos(data, dia, link = '#',preenchimento2 = 30){
    delay += 0.4;
    return `
    <a href="${link}"<div class="card" style="padding:55px ${preenchimento2}px">

        <h3><span>${data}</span></h3>
        <h2><span>${dia}</span></h2>
           
      
        
    </div>
    </a>
    `
}

document.querySelector('#cards').innerHTML = 


    diaDeJogos('20/11', 'domingo','./20.html')+
    diaDeJogos('21/11', 'segunda','./21.html')+
    diaDeJogos('22/11', 'terça','./22.html',40)+
    diaDeJogos('23/11', 'quarta','./23.html',35)+
    diaDeJogos('24/11', 'quinta','./24.html',40)+
    diaDeJogos('25/11', 'sexta','./25.html',42)+
    diaDeJogos('26/11', 'sabado','./26.html',33)+
    diaDeJogos('27/11', 'domingo','./27.html',29)+
    diaDeJogos('28/11', 'segunda','./28.html')+
    diaDeJogos('29/11', 'terça','./29.html',43)+
    diaDeJogos('30/11', 'quarta','./30.html',33)+
    diaDeJogos('01/12', 'quinta','./01.html',39)+
    diaDeJogos('02/12', 'sexta','./02.html',42)
    
 
