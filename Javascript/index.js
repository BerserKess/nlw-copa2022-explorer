
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


    diaDeJogos('20/11', 'domingo')+
    diaDeJogos('21/11', 'segunda')+
    diaDeJogos('22/11', 'terça','',40)+
    diaDeJogos('23/11', 'quarta','',35)+
    diaDeJogos('24/11', 'quinta','./24.html',40)+
    diaDeJogos('26/11', 'sexta','',43)+
    diaDeJogos('27/11', 'sabado','',31)+
    diaDeJogos('28/11', 'domingo','./28.html')+
    diaDeJogos('29/11', 'segunda')+
    diaDeJogos('30/11', 'terça','',43)+
    diaDeJogos('01/12', 'quarta','',33)+
    diaDeJogos('02/12', 'quinta','./02.html',37)
    
 
