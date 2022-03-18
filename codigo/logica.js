clicou_linguagem1 = 0;
clicou_linguagem2 = 0;
clicou_agencia = 0;

function linguagem1() {
    var x = document.getElementById("selecao-linguagem");
    var lingua = document.getElementById("lingua");
    var y = document.getElementById("linguagem");
      if (x.style.display === "flex") {
        x.style.display = "none";
        lingua.style.boxShadow = "none";
        clicou_linguagem1 = 0;
      } else {
        x.style.display = "flex";
        lingua.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
        y.style.color = "#003aa8";
        clicou_linguagem1 = 1;
    }
}

function over_linguagem1() {
  var x = document.getElementById("linguagem");
  if (clicou_linguagem1 === 0) {
    x.style.color = "#003aa8";
  }
}

function out_linguagem1() {
  var x = document.getElementById("linguagem");
  if (clicou_linguagem1 === 0) {
    x.style.color = "#212529";
  }
}




function linguagem2() {
    var x = document.getElementById("selecao-linguagem-vert");
    var lingua = document.getElementById("lingua-vert");
      if (x.style.display === "flex") {
        x.style.display = "none";
        lingua.style.boxShadow = "none";
        clicou_linguagem2 = 0;
      } else {
        x.style.display = "flex";
        lingua.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
        lingua.style.color = "#003aa8";
        clicou_linguagem2 = 1;
    }
}

function over_linguagem2() {
  var x = document.getElementById("linguagem-vert");
  if (clicou_linguagem2 === 0) {
    x.style.color = "#003aa8";
  }
}

function out_linguagem2() {
  var x = document.getElementById("linguagem-vert");
  if (clicou_linguagem2 === 0) {
    x.style.color = "#212529";
  }
}




function agencia() {
  var x = document.getElementById("selecao-agencia-lateral");
  var y = document.getElementById("agencia-lateral");
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.style.color = "#212529";
      clicou_agencia = 0;
    } else {
      x.style.display = "flex";
      y.style.color = "#003aa8";
      clicou_agencia = 1;
  }
}

function over_agencia() {
  var x = document.getElementById("agencia-lateral");
  if (clicou_agencia === 0) {
    x.style.color = "#003aa8";
  }
}

function out_agencia() {
  var x = document.getElementById("agencia-lateral");
  if (clicou_agencia === 0) {
    x.style.color = "#212529";
  }
}




function aparecer_vert_esq() {
    var x = document.getElementById("menu-vert-esq");
      if (x.style.display === "flex") {
        x.style.display = "none";
        document.body.style.overflow = "auto";
      } else {
        x.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}


clicou_comprar1 = 1;
clicou_arrendar1 = 0;


function comprar1() {
  var x = document.getElementById("compra");
  var y = document.getElementById("arrenda");
x.style.fontWeight = "700";
y.style.fontWeight = "100";
x.style.backgroundColor = "white";
y.style.backgroundColor = "#ebebeb";
clicou_comprar1 = 1;
clicou_arrendar1 = 0;
}

function over_comprar1() {
  var x = document.getElementById("compra");
x.style.cursor = "pointer";
x.style.fontSize = "16px";
x.style.color = "#003aa8";
}

function out_comprar1() {
var x = document.getElementById("compra");
x.style.cursor = "pointer";
x.style.fontSize = "13px";
x.style.color = "#212529";
}





function arrendar1() {
  var x = document.getElementById("arrenda");
  var y = document.getElementById("compra");
x.style.fontWeight = "700";
y.style.fontWeight = "100";
x.style.backgroundColor = "white";
y.style.backgroundColor = "#ebebeb";
clicou_comprar1 = 1;
clicou_arrendar1 = 0;
}

function over_arrendar1() {
  var x = document.getElementById("arrenda");
x.style.cursor = "pointer";
x.style.fontSize = "16px";
x.style.color = "#003aa8";
}

function out_arrendar1() {
var x = document.getElementById("arrenda");
x.style.cursor = "pointer";
x.style.fontSize = "13px";
x.style.color = "#212529";
}




function over_pesquisa1() {
  var x = document.getElementById("icon-pesquisa");
x.style.cursor = "pointer";
x.style.fontSize = "20px";
}

function out_pesquisa1() {
var x = document.getElementById("icon-pesquisa");
x.style.cursor = "pointer";
x.style.fontSize = "23px";
}


let botao_ancora = document.getElementById("ancora_VerMais");

botao_ancora.addEventListener('mouseover', function(){ botao_ancora.style.cursor = "pointer"; });
botao_ancora.addEventListener('click', function() { document.location = '#novidades'; });



function slideshow(esq_ou_dir,qual_slide) {
  var largura_slide = $(".slide").height();
  console.log(esq_ou_dir,largura_slide,qual_slide);
  if (qual_slide == 'seta_esquerda_A' || qual_slide == 'seta_direita_A') {
    if (esq_ou_dir === 1) {
      $('#slide_A').animate({
        scrollLeft: "+=" + (10 * largura_slide / 9) + "px"
      });
    } else {
      $('#slide_A').animate({
      scrollLeft: "-=" + (10 * largura_slide / 9) + "px"
      });
    }
  }else if (qual_slide == 'seta_esquerda_B' || qual_slide == 'seta_direita_B') {
    if (esq_ou_dir === 1) {
      $('#slide_B').animate({
        scrollLeft: "+=" + (10 * largura_slide / 9) + "px"
      });
    } else {
      $('#slide_B').animate({
      scrollLeft: "-=" + (10 * largura_slide / 9) + "px"
      });
    }
  }else {
    if (esq_ou_dir === 1) {
      $('#slide_C').animate({
        scrollLeft: "+=" + (10 * largura_slide / 9) + "px"
      });
    } else {
      $('#slide_C').animate({
      scrollLeft: "-=" + (10 * largura_slide / 9) + "px"
      });
    }
  }
}


$(".seta_esquerda").click( function() {
  var qual_slide = $(this)[0].id;
  slideshow(-1,qual_slide);
});
$(".seta_direita").click( function() {
  var qual_slide = $(this)[0].id;
  slideshow(1,qual_slide);
});



let esconde1 = document.getElementById("esconde1"); // a
let menu1 = document.getElementById("menu1");       // b
let titulo1 = document.getElementById("titulo1");   // c
let barra1 = document.getElementById("barra1");     // d
let seta1 = document.getElementById("seta1");       // e

let esconde2 = document.getElementById("esconde2"); // a
let menu2 = document.getElementById("menu2");       // b
let titulo2 = document.getElementById("titulo2");   // c
let barra2 = document.getElementById("barra2");     // d
let seta2 = document.getElementById("seta2");       // e

let esconde3 = document.getElementById("esconde3"); // a
let menu3 = document.getElementById("menu3");       // b
let titulo3 = document.getElementById("titulo3");   // c
let barra3 = document.getElementById("barra3");     // d
let seta3 = document.getElementById("seta3");       // e

let esconde4 = document.getElementById("esconde4"); // a
let menu4 = document.getElementById("menu4");       // b
let titulo4 = document.getElementById("titulo4");   // c
let barra4 = document.getElementById("barra4");     // d
let seta4 = document.getElementById("seta4");       // e

clicou_barra_pesquisa1 = 0;
clicou_barra_pesquisa2 = 0;
clicou_barra_pesquisa3 = 0;
clicou_barra_pesquisa4 = 0;



function barra_pesquisa( a, b, c, d, e, f ) {
    if (a.style.display === "flex") {
      a.style.display = "none";
      b.style.display = "none";
      e.style.color = "#212529";
      c.style.color = "#212529";
      if (f == 'b1') {
        clicou_barra_pesquisa1 = 0;
      } else if (f == 'b2') {
        clicou_barra_pesquisa2 = 0;
      } else if (f == 'b3') {
        clicou_barra_pesquisa3 = 0;
      } else if (f == 'b4') {
        clicou_barra_pesquisa4 = 0;
      }
    } else {
      a.style.display = "flex";
      b.style.display = "flex";
      c.style.color = "#003aa8";
      e.style.color = "#003aa8";
      if (f == 'b1') {
        clicou_barra_pesquisa1 = 1;
      } else if (f == 'b2') {
        clicou_barra_pesquisa2 = 1;
      } else if (f == 'b3') {
        clicou_barra_pesquisa3 = 1;
      } else if (f == 'b4') {
        clicou_barra_pesquisa4 = 1;
      }
  }

  console.log(clicou_barra_pesquisa1,clicou_barra_pesquisa2,clicou_barra_pesquisa3,clicou_barra_pesquisa4);
  
}

function over_barra_pesquisa( c, d, e, f ) {
  if (f == 'b1') {
    console.log("sim");
    if (clicou_barra_pesquisa1 === 0) {
      c.style.color = "#003aa8";
      e.style.color = "#003aa8";
      d.style.cursor = "pointer";
    }
  } else if (f == 'b2') {
    if (clicou_barra_pesquisa2 === 0) {
      c.style.color = "#003aa8";
      e.style.color = "#003aa8";
      d.style.cursor = "pointer";
    }
  } else if (f == 'b3') {
    if (clicou_barra_pesquisa3 === 0) {
      c.style.color = "#003aa8";
      e.style.color = "#003aa8";
      d.style.cursor = "pointer";
    }
  } else if (f == 'b4') {
    if (clicou_barra_pesquisa4 === 0) {
      c.style.color = "#003aa8";
      e.style.color = "#003aa8";
      d.style.cursor = "pointer";
    }
  }
}

function out_barra_pesquisa( c, e, f ) {
  if (f == 'b1') {
    if (clicou_barra_pesquisa1 === 0) {
      c.style.color = "#212529";
      e.style.color = "#212529";
    }
  } else if (f == 'b2') {
    if (clicou_barra_pesquisa2 === 0) {
      c.style.color = "#212529";
      e.style.color = "#212529";
    }
  } else if (f == 'b3') {
    if (clicou_barra_pesquisa3 === 0) {
      c.style.color = "#212529";
      e.style.color = "#212529";
    }
  } else if (f == 'b4') {
    if (clicou_barra_pesquisa4 === 0) {
      c.style.color = "#212529";
      e.style.color = "#212529";
    }
  }
}

barra1.addEventListener('click', function(){ barra_pesquisa( esconde1, menu1, titulo1, barra1, seta1, "b1" ) });
barra1.addEventListener('mouseover', function(){ over_barra_pesquisa( titulo1, barra1, seta1, "b1" ) });
barra1.addEventListener('mouseout', function(){ out_barra_pesquisa( titulo1, seta1, "b1" ) });

barra2.addEventListener('click', function(){ barra_pesquisa( esconde2, menu2, titulo2, barra2, seta2, "b2" ) });
barra2.addEventListener('mouseover', function(){ over_barra_pesquisa( titulo2, barra2, seta2, "b2" ) });
barra2.addEventListener('mouseout', function(){ out_barra_pesquisa( titulo2, seta2, "b2" ) });

barra3.addEventListener('click', function(){ barra_pesquisa( esconde3, menu3, titulo3, barra3, seta3, "b3" ) });
barra3.addEventListener('mouseover', function(){ over_barra_pesquisa( titulo3, barra3, seta3, "b3" ) });
barra3.addEventListener('mouseout', function(){ out_barra_pesquisa( titulo3, seta3, "b3" ) });

barra4.addEventListener('click', function(){ barra_pesquisa( esconde4, menu4, titulo4, barra4, seta4, "b4" ) });
barra4.addEventListener('mouseover', function(){ over_barra_pesquisa( titulo4, barra4, seta4, "b4" ) });
barra4.addEventListener('mouseout', function(){ out_barra_pesquisa( titulo4, seta4, "b4" ) });






let simula = document.getElementById("simula");
let calcula = document.getElementById("calcula");
let calcula_conteudo = document.getElementById("calcula_conteudo");
let letras_calcula = simula.getElementsByTagName("h1")[0];
let reset = document.getElementById("reset");
let financiamento_botao = document.getElementById("financiamento_botao");
let financiamento = document.getElementById("financiamento");
let escolhe_com = document.getElementById("escolhe_com");
let escolhe_sem = document.getElementById("escolhe_sem");
let reset_fin = document.getElementById("reset_fin");
let clicou_escolhe_com = 0;
let abre_menu = 0;
let financiamento_sem = document.getElementById("financiamento_sem");


simula.addEventListener('mouseover', function(){
  letras_calcula.style.color = "#003aa8";
});

simula.addEventListener('mouseout', function(){
  letras_calcula.style.color = "#ffffff";
});

reset.addEventListener('mouseover', function(){
  let letras_reset = reset.getElementsByTagName("h1")[0];
  letras_reset.style.color = "#df1828";
});

reset.addEventListener('mouseout', function(){
  let letras_reset = reset.getElementsByTagName("h1")[0];
  letras_reset.style.color = "#ffffff";
});

financiamento_botao.addEventListener('mouseover', function(){
  let letras_financiamento_botao = financiamento_botao.getElementsByTagName("h1")[0];
  letras_financiamento_botao.style.color = "#df1828";
});

financiamento_botao.addEventListener('mouseout', function(){
  let letras_financiamento_botao = financiamento_botao.getElementsByTagName("h1")[0];
  letras_financiamento_botao.style.color = "#ffffff";
});

reset_fin.addEventListener('mouseover', function(){
  let letras_reset_fin = reset_fin.getElementsByTagName("h1")[0];
  letras_reset_fin.style.color = "#003aa8";
});

reset_fin.addEventListener('mouseout', function(){
  let letras_reset_fin = reset_fin.getElementsByTagName("h1")[0];
  letras_reset_fin.style.color = "#ffffff";
});



financiamento_botao.addEventListener('click', function(){
  if( abre_menu == 0 )
  {
    document.location = '#financiamento'; 
    calcula_conteudo.style.height = "100%";
    calcula_conteudo.style.width = "100%";
    calcula_conteudo.style.display = "flex";
    calcula.style.height = "260px";
    reset_fin.style.minWidth = "30%";
    reset_fin.style.display = "flex";
    financiamento_botao.style.minWidth = "70%";
    simula.style.display = "none";
    abre_menu = 1;
  }
  else
  {
    calcula_conteudo.style.height = "0";
    calcula_conteudo.style.width = "0";
    calcula_conteudo.style.display = "none";
    calcula.style.height = "45px";
    reset_fin.style.minWidth = "0%";
    reset_fin.style.display = "none";
    if ( clicou_escolhe_com == 1 )
    {
      simula.style.minWidth = "50%";
      simula.style.display = "flex";
      financiamento_botao.style.minWidth = "50%";
    }
    else
    {
      financiamento_botao.style.minWidth = "100%";
    }
    abre_menu = 0;
  }
  console.log(clicou_escolhe_com);
});

escolhe_com.addEventListener('click', function(){
  clicou_escolhe_com = 1;
  document.location = '#tipologia_div'; 
  financiamento_botao.style.display = "none";
  reset.style.minWidth = "30%";
  reset.style.display = "flex";
  reset_fin.style.display = "none";
  simula.style.minWidth = "70%";
  simula.style.display = "flex";
});

escolhe_sem.addEventListener('click', function(){
  document.location = '#financiamento_sem';
  console.log("teste");
});









let tipologia = document.getElementById('tipologia');
let botao_tipologia = document.getElementById("botao_tipologia");
let guarda_simula = 0;


let area = document.getElementById('area');
let botao_area = document.getElementById("botao_area");
let botao_area_anterior = document.getElementById("botao_area_anterior");


let idade = document.getElementById("idade")
let botao_idade = document.getElementById("botao_idade");
let botao_idade_anterior = document.getElementById("botao_idade_anterior");


let botao_garagem = document.getElementById("botao_garagem");
let botao_garagem_anterior = document.getElementById("botao_garagem_anterior");
let garagem = 0;
let clicou_garagem = 0;
let garagem_sim = document.getElementById("garagem_sim");
let garagem_nao = document.getElementById("garagem_nao");


let botao_transportes = document.getElementById("botao_transportes");
let botao_transportes_anterior = document.getElementById("botao_transportes_anterior");
let transportes = 0;
let clicou_transportes = 0;
let transportes_sim = document.getElementById("transportes_sim");
let transportes_nao = document.getElementById("transportes_nao");



simula.addEventListener('click', function(){
  if( abre_menu == 0 )
  {
    document.location = '#simula_casa';
    financiamento_botao.style.display = "none";
    calcula_conteudo.style.height = "100%";
    calcula_conteudo.style.width = "100%";
    calcula_conteudo.style.display = "flex";
    calcula.style.height = "260px";
    reset.style.minWidth = "30%";
    reset.style.display = "flex";
    simula.style.minWidth = "70%";
    abre_menu = 1;
  }
  else
  {
    if( guarda_simula == 0 )
    {
      document.location = '#simula_casa';
    }
    else
    {
      document.location = '#calcula_conteudo';
    }
    financiamento_botao.style.display = "flex";
    calcula_conteudo.style.height = "0";
    calcula_conteudo.style.width = "0";
    calcula_conteudo.style.display = "none";
    calcula.style.height = "45px";
    reset.style.minWidth = "0%";
    reset.style.display = "none";
    simula.style.minWidth = "50%";
    financiamento_botao.style.minWidth = "50%";
    abre_menu = 0;
  }
});



botao_tipologia.addEventListener('click', function(){
  let tipologia_value = tipologia.value;
  console.log("clicou");
  console.log("tipologia_value: ", tipologia_value);
  document.location = '#area_div';
  guarda_simula = 1;
});




botao_area_anterior.addEventListener('click', function() { 
  document.location = '#tipologia_div'; 
});

botao_area.addEventListener('click', function(){
  let area_value = area.value;
  console.log("area_value: ", area_value);
  if( area_value != 0 )
  {
    document.location = '#idade_div';
  }
  else
  {
    alert("Não selecionou dimensão.");
  }
});




botao_idade_anterior.addEventListener('click', function() { 
  document.location = '#area_div'; 
});

botao_idade.addEventListener('click', function(){
  let idade_value = idade.value;
  console.log("idade_value: ", idade_value);
  if( idade_value != 0 )
  {
    document.location = '#garagem_div';
  }
  else
  {
    alert("Não selecionou a idade do imóvel.");
  }
});




botao_garagem_anterior.addEventListener('click', function() { 
  document.location = '#idade_div'; 
});

botao_garagem.addEventListener('click', function(){
  console.log("garagem submete: ", garagem);
  if( clicou_garagem != 0 )
  {
    document.location = '#transportes_div';
  }
  else
  {
    alert("Não selecionou nenhuma opção.");
  }
});

garagem_sim.addEventListener('click', function(){
  garagem = 1;
  clicou_garagem = 1;
  console.log("garagem: ", garagem);
});

garagem_nao.addEventListener('click', function(){
  garagem = 0;
  clicou_garagem = 1;
  console.log("garagem: ", garagem);
});




botao_transportes_anterior.addEventListener('click', function() { 
  document.location = '#garagem_div'; 
});

transportes_sim.addEventListener('click', function(){
  transportes = 1;
  clicou_transportes = 1;
  console.log("clicou_transportes: ", clicou_transportes);
});

transportes_nao.addEventListener('click', function(){
  transportes = 0;
  clicou_transportes = 1;
  console.log("clicou_transportes: ", clicou_transportes);
});




let botao_montante = document.getElementById("botao_montante");
let montante_casa = document.getElementById("montante_casa");

let botao_entrada_inicial_anterior = document.getElementById("botao_entrada_inicial_anterior");
let entrada_inicial = document.getElementById("entrada_inicial");
let botao_entrada_inicial = document.getElementById("botao_entrada_inicial");

let botao_anos_anterior = document.getElementById("botao_anos_anterior");
let anos = document.getElementById("anos");
let quantos_anos = document.getElementById("quantos_anos");
let mensalidade = document.getElementById("mensalidade");
let botao_anos = document.getElementById("botao_anos");



let spread1 = document.getElementById("spread1");
let taeg1 = document.getElementById("taeg1");
let mensalidade_final_valor1 = document.getElementById("mensalidade_final_valor1");

let spread2 = document.getElementById("spread2");
let taeg2 = document.getElementById("taeg2");
let mensalidade_final_valor2 = document.getElementById("mensalidade_final_valor2");

let spread3 = document.getElementById("spread3");
let taeg3 = document.getElementById("taeg3");
let mensalidade_final_valor3 = document.getElementById("mensalidade_final_valor3");


function calcula_mensalidade( anos_value, entrada_inicial_value, montante_casa_value, juros ) {
  
  let diferenca = montante_casa_value - entrada_inicial_value;
  let meses = anos_value * 12;
  let mensalidade = Math.round( ( ( diferenca / meses ) * juros ) * 100 ) / 100;
  return mensalidade;
}

function randomjuros() {

  let min = 1;
  let max = 5;
  return Math.random() * (max - min) + min;
}


botao_montante.addEventListener('click', function(){
  let montante_casa_value = montante_casa.value;
  if( montante_casa_value > 0 )
  {
    document.location = '#entrada_inicial_div';
  }
  else
  {
    alert("Não inseriu nenhum valor");
  }
});



botao_entrada_inicial_anterior.addEventListener('click', function(){
  document.location = '#montante_total';
});

botao_entrada_inicial.addEventListener('click', function(){
  let entrada_inicial_value = entrada_inicial.value;
  let montante_casa_value = montante_casa.value;
  let diferenca = montante_casa_value - entrada_inicial_value;
  if( diferenca > 0 )
  {
    document.location = '#anos_div';
  }
  else
  {
    alert("O montante inicial tem que ser inferior ao valor do imóvel");
  }
});



botao_anos_anterior.addEventListener('click', function(){
  document.location = '#entrada_inicial_div';
});

anos.oninput = function(){

  quantos_anos.innerHTML = this.value + " ano(s)";
  let entrada_inicial_value = entrada_inicial.value;
  let montante_casa_value = montante_casa.value;
  mensalidade.innerHTML = calcula_mensalidade( this.value, entrada_inicial_value, montante_casa_value, 1 ) + " €/mês";
}

botao_anos.addEventListener('click', function(){
  let anos_value = anos.value;
  let entrada_inicial_value = entrada_inicial.value;
  let montante_casa_value = montante_casa.value;

  let spread1_value = Math.round( randomjuros() * 100 ) / 100;
  let spread2_value = Math.round( randomjuros() * 100 ) / 100;
  let spread3_value = Math.round( randomjuros() * 100 ) / 100;

  spread1.innerHTML = spread1_value + "%";
  spread2.innerHTML = spread2_value + "%";
  spread3.innerHTML = spread3_value + "%";

  taeg1_value = ( 0.5 + spread1_value );
  taeg2_value = ( 0.5 + spread2_value );
  taeg3_value = ( 0.5 + spread3_value );

  taeg1.innerHTML = taeg1_value + "%";
  taeg2.innerHTML = taeg2_value + "%";
  taeg3.innerHTML = taeg3_value + "%";

  mensalidade_final_valor1.innerHTML = calcula_mensalidade( anos_value, entrada_inicial_value, montante_casa_value, taeg1_value ) + " €";
  mensalidade_final_valor2.innerHTML = calcula_mensalidade( anos_value, entrada_inicial_value, montante_casa_value, taeg2_value ) + " €";
  mensalidade_final_valor3.innerHTML = calcula_mensalidade( anos_value, entrada_inicial_value, montante_casa_value, taeg3_value ) + " €";

  console.log(anos_value);
  console.log(entrada_inicial_value);
  console.log(montante_casa_value);
  console.log(taeg1_value);

  if( anos_value > 0 )
  {
    document.location = '#emprestimos_div';

  }
});





reset.addEventListener('click', function(){
  
  document.location = '#tipologia_div'; 
  clicou_escolhe_com = 1;
  tipologia.value = "0";
  area.value = "0";
  idade.value = "0";
  garagem = "0";
  clicou_garagem = "0";
  transportes = "0";
  clicou_transportes = "0";
  montante_casa.value = "0";
  entrada_inicial.value = "0";
  anos.value = "0";
  quantos_anos.innerHTML = "";
  mensalidade.innerHTML = "";
  preco_financ_norte = 0;
  preco_financ_centro = 0;
  preco_financ_sul = 0;
  document.querySelector('input[name="garagem"]:checked').checked = false;
  document.querySelector('input[name="transportes"]:checked').checked = false;
});





      //   N O R T E

let mostra_norte = document.getElementById("mostra_norte");                     // A
let detalhes_norte = document.getElementById("detalhes_norte");                 // B
let norte_total = document.getElementById("norte_total");                       // C
let preco_norte = document.getElementById("preco_norte");                       // D
let valor_norte = 2000;                                                         // E
let norte = document.getElementById("norte");                                   // F
let quartos_norte = document.getElementById("quartos_norte");                   // G
let dimensao_norte = document.getElementById("dimensao_norte");                 // H
let idade_imovel_norte = document.getElementById("idade_imovel_norte");         // I
let mostra_garagem_norte = document.getElementById("mostra_garagem_norte");     // J
let tem_transportes_norte = document.getElementById("tem_transportes_norte");   // K
let preco_financ_norte = 0;                                                     // L

//   C E N T R O

let mostra_centro = document.getElementById("mostra_centro");                     // A
let detalhes_centro = document.getElementById("detalhes_centro");                 // B
let centro_total = document.getElementById("centro_total");                       // C
let preco_centro = document.getElementById("preco_centro");                       // D
let valor_centro = 2500;                                                          // E
let centro = document.getElementById("centro");                                   // F
let quartos_centro = document.getElementById("quartos_centro");                   // G
let dimensao_centro = document.getElementById("dimensao_centro");                 // H
let idade_imovel_centro = document.getElementById("idade_imovel_centro");         // I
let mostra_garagem_centro = document.getElementById("mostra_garagem_centro");     // J
let tem_transportes_centro = document.getElementById("tem_transportes_centro");   // K
let preco_financ_centro = 0;                                                      // L

//   S U L

let mostra_sul = document.getElementById("mostra_sul");                     // A
let detalhes_sul = document.getElementById("detalhes_sul");                 // B
let sul_total = document.getElementById("sul_total");                       // C
let preco_sul = document.getElementById("preco_sul");                       // D
let valor_sul = 1200;                                                       // E
let sul = document.getElementById("sul");                                   // F
let quartos_sul = document.getElementById("quartos_sul");                   // G
let dimensao_sul = document.getElementById("dimensao_sul");                 // H
let idade_imovel_sul = document.getElementById("idade_imovel_sul");         // I
let mostra_garagem_sul = document.getElementById("mostra_garagem_sul");     // J
let tem_transportes_sul = document.getElementById("tem_transportes_sul");   // K
let preco_financ_sul = 0;                                                   // L




//garagem
//transportes

function calcula_valor( C, preco_zona, J, K ) {
    let area_value = area.value;
    let i = idade.value;
    if( garagem == 1 )
  {
    J.innerHTML = "Sim";
    c2 = 1;
  }
  else
  {
    J.innerHTML = "Não";
    c2 = 0.95;
  }
  if( transportes == 1 )
  {
    K.innerHTML = "Perto";
    c3 = 1;
  }
  else
  {
    K.innerHTML = "Longe";
    c3 = 0.9;
  }
  
  if( i <= 5 )
  {
    c1 = 1;
  }
  else if( i <= 10 )
  {
    c1 = 0.95;
  }
  else
  {
    c1 = 0.9;
  }

  let preco_total = area_value * preco_zona * c1 * c2 * c3;
  return preco_total;
}

botao_transportes.addEventListener('click', function(){
  console.log("transportes: ", transportes);
  if( clicou_transportes != 0 )
  {
    document.location = '#ancora_zonas';
    preco_financ_norte = calcula_valor( norte_total, valor_norte, mostra_garagem_norte, tem_transportes_norte );
    preco_financ_centro = calcula_valor( centro_total, valor_centro, mostra_garagem_centro, tem_transportes_centro );
    preco_financ_sul = calcula_valor( sul_total, valor_sul, mostra_garagem_sul, tem_transportes_sul );

    norte_total.innerHTML = preco_financ_norte + " €";
    centro_total.innerHTML = preco_financ_centro + " €";
    sul_total.innerHTML = preco_financ_sul + " €";
  }
  else
  {
    alert("Não selecionou nenhuma opção.");
  }
});


function overzonas( letra, A, B, D, E, F, G, H, I, J, K, L ) {

  let tipologia_value = tipologia.value;
  let area_value = area.value;
  let i = idade.value;
  norte.style.height = "30%";
  centro.style.height = "30%";
  sul.style.height = "30%";
  F.style.height = "100%";
  B.style.fontSize = "20px";
  B.style.fontWeight = "400";
  A.innerHTML = letra;
  D.innerHTML = E + "€/m2";
  G.innerHTML = "T" + tipologia_value;
  H.innerHTML = area_value + "m2";
  I.innerHTML = i + "ano(s)";
}

function outzonas( zona, A, F ) {

  norte.style.height = "33.333%";
  centro.style.height = "33.333%";
  sul.style.height = "33.333%";
  A.innerHTML = zona;
}

function avanca_simula( L ) {

  montante_casa.value = L;
  document.location = '#entrada_inicial_div'; 
  console.log(L);
}


norte.addEventListener('mouseover', function(){ overzonas( 'N', mostra_norte,
detalhes_norte, preco_norte, valor_norte, norte,
quartos_norte, dimensao_norte, idade_imovel_norte, preco_financ_norte ) });

norte.addEventListener('mouseout', function(){ outzonas( 'NORTE', mostra_norte, norte ) });

norte.addEventListener('click', function(){ avanca_simula( preco_financ_norte )});



centro.addEventListener('mouseover', function(){ overzonas( 'C', mostra_centro,
detalhes_centro, preco_centro, valor_centro, centro,
quartos_centro, dimensao_centro, idade_imovel_centro, preco_financ_centro ) });

centro.addEventListener('mouseout', function(){ outzonas( 'CENTRO', mostra_centro, centro ) });

centro.addEventListener('click', function(){ avanca_simula( preco_financ_centro )});



sul.addEventListener('mouseover', function(){ overzonas( 'S', mostra_sul,
detalhes_sul, preco_sul, valor_sul, sul,
quartos_sul, dimensao_sul, idade_imovel_sul, preco_financ_sul ) });

sul.addEventListener('mouseout', function(){ outzonas( 'SUL', mostra_sul, sul ) });

sul.addEventListener('click', function(){ avanca_simula( preco_financ_sul )});




reset_fin.addEventListener('click', function(){
  document.location = '#financiamento'; 
  clicou_escolhe_com = 0; 
  tipologia.value = "0";
  area.value = "0";
  idade.value = "0";
  garagem = "0";
  clicou_garagem = "0";
  transportes = "0";
  clicou_transportes = "0";
  montante_casa.value = "0";
  entrada_inicial.value = "0";
  anos.value = "0";
  quantos_anos.innerHTML = "";
  mensalidade.innerHTML = "";
  preco_financ_norte = 0;
  preco_financ_centro = 0;
  preco_financ_sul = 0;
  document.querySelector('input[name="garagem"]:checked').checked = false;
  document.querySelector('input[name="transportes"]:checked').checked = false;
});