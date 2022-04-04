const rfichas = document.getElementById('rfichas');
const tfichas = document.getElementById('tfichas');
const valorganho = document.getElementById('valorganho');
const gratificacao = document.getElementById('gratificacao');
const porcentagem = document.getElementById('porcentagem');
const bMeta = document.getElementById('bmeta');
const meta = document.getElementById('meta');
const tituloMensagem = document.getElementById('titulo_mensagem');
const mensagemSobreDia = document.getElementById('mensagem_sobre_dia');

const button = document.querySelector('#button');

button.addEventListener('click', calculoporcentagem)
button.addEventListener('click', calculovalorganho)
button.addEventListener('click', metadodia)

// Valor ganho

function calculovalorganho()
{
	var fichas = rfichas.value;

	if(fichas > 0 && fichas <= 50)
	{
		valorganho.value = "R$ " + fichas * 0.50;
		gratificacao.value = "R$ 0,50";
	}
	else if(fichas >= 51 && fichas <= 60)
	{
		valorganho.value = "R$ " + fichas * 0.60;
		gratificacao.value = "R$ 0,60";
	}
	else if(fichas >= 61 && fichas <= 70)
	{
		valorganho.value = "R$ " + fichas * 0.70;
		gratificacao.value = "R$ 0,70";
	}
	else if(fichas >= 71 && fichas <= 80)
	{
		valorganho.value = "R$ " + fichas * 0.80;
		gratificacao.value = "R$ 0,80";
	}
	else if(fichas >= 81 && fichas <= 90)
	{
		valorganho.value = "R$ " + fichas * 0.90;
		gratificacao.value = "R$ 0,90";
	}
	else if(fichas >= 91)
	{
		valorganho.value = "R$ " + fichas * 1;
		gratificacao.value = "R$ 1,00";
	}
}

// Porcentagem

function calculoporcentagem()
{

	var calc = (rfichas.value * 100) / tfichas.value;

	porcentagem.value = parseInt(calc)+"%";
}

// Bateu a meta? Sim ou Não

function metadodia()
{
	var fichas = parseInt(rfichas.value);
	var metadoDia = parseInt(meta.value);

	console.log(metadoDia)
	console.log(fichas)
	if (fichas >= metadoDia) 
	{
		bMeta.value = "Sim";
		tituloMensagem.innerHTML = "Parabens! 🎉";
		mensagemSobreDia.innerHTML = "Você bateu a meta! Veja algumas informações sobre o dia de hoje:";
		console.log("Você bateu a meta")
	}else
	{
		bMeta.value = "Não";
		tituloMensagem.innerHTML = "Não foi desta vez! 😥";
		mensagemSobreDia.innerHTML = "Você não bateu a meta! Mas veja algumas informações sobre hoje:";
		console.log("Você não bateu a meta")
	}
}