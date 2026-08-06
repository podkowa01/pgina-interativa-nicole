function mostrar(etapa){

let foto = document.getElementById("foto");
let conteudo = document.getElementById("conteudo");

if(etapa == "leitoes"){

conteudo.innerHTML = `
<img id="foto" src="imagens/leitoes.jpg">

<h2>🐷 Chegada dos Leitões</h2>

<p>
Os leitões chegam à granja com cerca de 21 dias de idade.
Nessa fase eles recebem ração apropriada, água limpa,
vacinação quando necessária e acompanhamento diário para
garantir um crescimento saudável.
</p>
`;
}

if(etapa == "creche"){

conteudo.innerHTML = `
<img id="foto" src="imagens/creche.jpg">

<h2>🏠 Saída para a Creche</h2>

<p>
Depois do período inicial, os leitões vão para a creche.
Eles continuam recebendo alimentação balanceada,
ambiente limpo e cuidados para crescerem fortes
até a fase de engorda.
</p>
`;
}

if(etapa == "abate"){

conteudo.innerHTML = `
<img id="foto" src="imagens/abate.jpg">

<h2>🚛 Saída para o Abate</h2>

<p>
Quando atingem o peso ideal, os suínos são transportados
para o frigorífico, onde passam pelo processo de abate
seguindo as normas de higiene e bem-estar animal.
Depois, a carne é distribuída para supermercados e açougues.
</p>
`;
}

}