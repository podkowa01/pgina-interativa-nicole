unction mostrar(opcao){

let texto="";

if(opcao=="chegada"){

texto=`

<h2>🐷 Chegada dos Leitões</h2>

<p>

Os leitões chegam ao pátio da granja.

Essa é a fase mais delicada.

Eles precisam de bastante cuidado,

alimentação adequada e ambiente aquecido.

Nos primeiros dias aprendem a comer

e recebem acompanhamento.

</p>

`;

}

if(opcao=="creche"){

texto=`

<h2>🏠 Saída para a Creche</h2>

<p>

Após aproximadamente 45 dias,

os leitões seguem para a creche.

Nessa fase a alimentação muda

conforme eles crescem.

Eles continuam se desenvolvendo

até a fase de engorda.

</p>

`;

}

if(opcao=="abate"){

texto=`

<h2>🚛 Saída para o Abate</h2>

<p>

Quando atingem o peso ideal,

os suínos são transportados

para o frigorífico.

Após o abate, a carne é preparada

e enviada para mercados

e açougues.

</p>

`;

}

document.getElementById("texto").innerHTML=texto;

}