const envioForm = document.getElementById('button'),
scrollBtn = document.querySelector('.scroll_vizualizar_button'),
excluirBtn = document.querySelector('.scroll_excluir_button'),
tabela = document.querySelector('.scroll_table'),
thTabela = document.querySelector('.cabecalho_table'),
linhaTabela = document.getElementById('dados'),
recebidasFichas = document.getElementById('rfichas'),
metaDia = document.getElementById('meta'),
gratificacao = document.getElementById('gratificacao'),
valorGanho = document.getElementById('valorganho'),
bMeta = document.getElementById('bmeta'),
porcentagem = document.getElementById('porcentagem'),
dia = document.getElementById('dia'),
totalFichas = document.getElementById('tfichas'),
tituloMensagem = document.getElementById('titulo_mensagem'),
mensagemSobreDia = document.getElementById('mensagem_sobre_dia'),
boxTabela  = JSON.parse(localStorage.getItem('Linha:') || "[]");
const button = document.querySelector('#button');

envioForm.addEventListener('click', calculoporcentagem);
envioForm.addEventListener('click', calculovalorganho);
envioForm.addEventListener('click', metadodia);
envioForm.addEventListener('click', enviarTd);

function calculovalorganho()
{
	var fichas = rfichas.value;

	if(fichas > 0 && fichas <= 50)
	{
		valorGanho.value = fichas * 0.50;
		gratificacao.value = "R$ 0,50";
	}
	else if(fichas >= 51 && fichas <= 60)
	{
		valorGanho.value = fichas * 0.60;
		gratificacao.value = "R$ 0,60";
	}
	else if(fichas >= 61 && fichas <= 70)
	{
		valorGanho.value = fichas * 0.70;
		gratificacao.value = "R$ 0,70";
	}
	else if(fichas >= 71 && fichas <= 80)
	{
		valorGanho.value = fichas * 0.80;
		gratificacao.value = "R$ 0,80";
	}
	else if(fichas >= 81 && fichas <= 90)
	{
		valorGanho.value = fichas * 0.90;
		gratificacao.value = "R$ 0,90";
	}
	else if(fichas >= 91)
	{
		valorGanho.value = fichas * 1;
		gratificacao.value = "R$ 1,00";
	}
}

function calculoporcentagem()
{

	var calc = (recebidasFichas.value * 100) / totalFichas.value;

	porcentagem.value = parseInt(calc)+"%";
}

function metadodia()
{
	var fichas = parseInt(recebidasFichas.value);
	var metadoDia = parseInt(metaDia.value);

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






// Dados da tabela (LocalStorage)
scrollBtn.addEventListener('click', showTabela);

function showTabela()
{
	tabela.classList.toggle('show')
	excluirBtn.classList.toggle('show')
}

function criarTd()
{
	document.querySelectorAll('#dados').forEach(box => box.remove());
	boxTabela.forEach((box) => {
		let linha = 
					'<tr id="dados">'+
					'<td>'+box.dt+'</td>'+
					'<td>'+box.tf+'</td>'+
					'<td>'+box.rf+'</td>'+
					'<td>'+box.mtd+'</td>'+
					'<td>'+box.gt+'</td>'+
					'<td>'+box.pt+'</td>'+
					'<td> R$ '+box.vg+'</td>'+
					'<td>'+box.mt+'</td>'+
					'</tr>';

				thTabela.insertAdjacentHTML("afterend", linha);
	})
};
criarTd();

function enviarTd()
{
	var rfichas = recebidasFichas.value;
	var tfichas = totalFichas.value;
	var metaD = metaDia.value;
	var grat = gratificacao.value;
	var valorG = valorGanho.value;
	var metaText = bMeta.value;
	var data = dia.value;
	var porc = porcentagem.value;

	let dados = 
	{
		tf: tfichas, 
		rf: rfichas,
		dt: data,
		mtd: metaD,
		gt: grat,
		vg: valorG,
		pt: porc,
		mt: metaText
	};

	boxTabela.push(dados);
	localStorage.setItem('Linha:', JSON.stringify(boxTabela));

	criarTd();
};