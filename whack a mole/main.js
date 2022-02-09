let counts = document.querySelectorAll(".count");
let cols = document.querySelectorAll(".colImg");
let reset = document.querySelector(".reset");
let oldIndex, score=0, time = 0;

function getIndex(i) {
	if(oldIndex == i) {
		i = getIndex(Math.floor(Math.random()*cols.length));
	}
	return i;
}
function scoreInc(i) {
	if(this.src.includes("/assets/mole.png")){
		score++;
		counts[1].innerText = score;
		this.src = "./assets/hole.png";
	}
}

let inter;
reset.onclick = () => {
	if(counts[0].innerText < 60) {
		location.reload();
	}
	counts[0].innerText = 60;
	score = 0;
	counts[1].innerText = 0;
	inter = setInterval(()=> {
		let index = getIndex(Math.floor(Math.random()*cols.length));
		cols[index].src = "./assets/mole.png";
		cols[index].addEventListener("click", scoreInc);
		if (oldIndex != undefined) {
			cols[oldIndex].src = "./assets/hole.png";
			cols[oldIndex].removeEventListener("click", scoreInc);
		}
		oldIndex = index;
		if(--counts[0].innerText == 0){
			cols[oldIndex].src = "./assets/hole.png";
			cols[oldIndex].removeEventListener("click", scoreInc);
			clearInterval(inter);
		}
		//console.log(index);
	}, 1000);
}