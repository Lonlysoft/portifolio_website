var agora = new Date();
var horario = agora.getHours();
var projectNames = ["MG_SEW", "FP", "NST", "KTS", "GENC"];
var bg_image = document.querySelector(".landscape_img");
const botao = [
document.querySelector(".botoes li:nth-child(1)"), document.querySelector(".botoes li:nth-child(2)"), document.querySelector(".botoes li:nth-child(3)"), document.querySelector(".botoes li:nth-child(4)"), document.querySelector(".botoes li:nth-child(5)")
];

const proglangBtn = document.getElementsByClassName("languages__item");
const progLangDesc = document.getElementsByClassName("languages__desc");
const pgt = [];
for(let i = 0; i < projectNames.length; i++){
	pgt.push(document.querySelector(`.pgt.${projectNames[i]}`));
}
var Moment = 1;

function AllMain(){
	externalDoings();
}

function TimeIsIt(){
	if(horario > 18 || horario < 5){
		return "Noite";
	}
	else if(horario > 10 && horario < 17){
		return "Dia";
	}
	else if(horario > 4 && horario <= 10){
		return "Manha";
	}
	else{
		return "Tarde";
	}
}

function externalDoings(){
	//projetos
	for(let i = 0; i < 5; i++){
		botao[i].addEventListener('click', () => {
			for(let j = 0; j < botao.length; j++){
				pgt[j].classList.remove("selecionado");
				botao[j].classList.remove("select")
			}
			pgt[i].classList.add("selecionado");
			botao[i].classList.add("select")
			
		});
	}
	//sobre mim
	for(let i = 0; i < 3; i++){
		proglangBtn[i].addEventListener('click', () => {
			for(let j = 0; j < 3; j++){
				progLangDesc[j].classList.remove("visivel");
				proglangBtn[j].classList.remove("selecionado");
			}
			proglangBtn[i].classList.add("selecionado");
			progLangDesc[i].classList.add("visivel");
		});
	}
	switch(TimeIsIt()){
		case"Dia":
			document.documentElement.style.setProperty("--bg-saiias", "#a5ffff");
			document.documentElement.style.setProperty("--bg-saiias-low", "#a5ffff95");
			document.documentElement.style.setProperty("--font-color", "#002887");
			bg_image.src = "src/imgs/LANDSCAPE__day.png";
			break;
		case "Noite":
			document.documentElement.style.setProperty("--bg-saiias", "#07186e");
			document.documentElement.style.setProperty("--bg-saiias-low", "#07186e95");
			document.documentElement.style.setProperty("--font-color", "#ffffa5");
			bg_image.src = "src/imgs/LANDSCAPE__night.png";
			break;
		case "Manha":
			document.documentElement.style.setProperty("--bg-saiias", "#ffffa5");
			document.documentElement.style.setProperty("--bg-saiias-low", "#ffffa595");
			document.documentElement.style.setProperty("--font-color", "#008748");
			bg_image.src = "src/imgs/LANDSCAPE__morning.png";
			break;
		case "Tarde":
			document.documentElement.style.setProperty("--bg-saiias", "#7f4085");
			document.documentElement.style.setProperty("--bg-saiias-low", "#7f408595");
			document.documentElement.style.setProperty("--font-color", "#ffeabd");
			bg_image.src = "src/imgs/LANDSCAPE__evening.png";
			break;
	}
}

AllMain();

//madrugada #ffffa5
//letra #00f748

//dia #a5ffff
//dia #002887

//tarde #7f4085
//letra #ffeabd

//noite #07186e
//letra #ffffa5