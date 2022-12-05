console.log("Hemlo");

const body = document.querySelector("body");
const plusBtn = document.querySelector(".btn-right");
const minusBtn = document.querySelector(".btn-left");
const counterNum = document.querySelector(".counter-number");
let num = Number(counterNum.innerHTML);

colorChanger(num);

plusBtn.addEventListener("click", () => {
	num++;
	colorChanger(num);
});

minusBtn.addEventListener("click", () => {
	num--;
	colorChanger(num);
});

function colorChanger(num) {
	counterNum.innerHTML = num;
	body.style.backgroundColor = num % 2 === 0 ? "var(--red)" : "var(--green)";
}
