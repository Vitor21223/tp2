var rank = [
    {
        nome: 'teste',
        tempo: '00:00',
        valor: 0,
    }
]

function comparar(a, b) {
    if (a.valor < b.valor) {
      return -1;
    }
    if (a.valor > b.valor) {
      return 1;
    }
    return 0;
  }


$('canvas').click((e) => {
    console.log(rank);
    if($('#marcadorFase').html() == 'Fase 0'){
        var x = e.pageX - tela.offsetLeft;
        var y = e.pageY - tela.offsetTop;
        if ((x > xAleatorio - raio) &&
        (x < xAleatorio + raio) &&
        (y > yAleatorio - raio) &&
        (y < yAleatorio + raio)) {
                let el = {
                    nome: $('#nomeUsuario').val(),
                    tempo: $('#counter').html(),
                    valor: 0,
                }
                rank.push(el);
                console.log(rank);
                $(rank).each((i) => {
                    rank[i].valor = parseInt(rank[i].tempo.split(':')[0], 10) * 60;
                    rank[i].valor += parseInt(rank[i].tempo.split(':')[1], 10);
                    rank.sort(function comparar(a, b) {
                        if (a.valor < b.valor) {
                        return -1;
                        }
                        if (a.valor > b.valor) {
                        return 1;
                        }
                        return 0;
                    })
        })
        let tr = document.createElement('tr');
        let nm = document.createElement('td');
        let tt = document.createElement('td');
        $(nm).html(`<h1>${el.nome}<\h1>`);
        $(tr).append(nm);
        $(tt).html(`<h1>${el.tempo}<\h1>`);
        $(tr).append(tt);
        $('#ranking table').append(tr);
        $('#nomeUsuario').val('');
        let rank_pro_localStorage = JSON.stringify(rank);
        localStorage.setItem('rankLS', rank_pro_localStorage);
    
    }}
})
$(document).ready(() => {
    let rank_do_localStorage = localStorage.getItem('rankLS');
    if(rank_do_localStorage != null){
        rank = JSON.parse(rank_do_localStorage);    
    }
    $(rank).each((i) => {
        let tr = document.createElement('tr');
        let nm = document.createElement('td');
        let tt = document.createElement('td');

        $(nm).html(`<h1>${rank[i].nome}<\h1>`);
        $(tr).append(nm);
        $(tt).html(`<h1>${rank[i].tempo}<\h1>`);
        $(tr).append(tt);
        $('#ranking table').append(tr);
    })
})