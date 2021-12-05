const color = document.querySelector("h3 span");
const btn = document.querySelector("button");

btn.addEventListener("click", handleBgColor);
window.addEventListener("keydown", (e) => {
	if (e.code === "Space") {
		handleBgColor();
	}
});
color.addEventListener("click", copyHexCode);

function handleBgColor() {
	const randomHex = `#${getRandomHex()}`;

	document.body.style.backgroundColor = randomHex;
	color.textContent = randomHex;
	color.style.backgroundColor = randomHex;

	btn.classList.toggle("active");
}

function getRandomHex() {
	const randomHex = Math.floor(Math.random() * 0xf00000 + 0xfffff).toString(16);

	return randomHex;
}

function copyHexCode(e) {
	const hexCode = e.target.textContent;
	const tempInput = document.createElement("input");
	tempInput.setAttribute("value", hexCode);
	document.body.appendChild(tempInput);
	tempInput.select();

	const copiedHex = document.execCommand("copy");
	document.body.removeChild(tempInput);

	showToolTip(e.target);
}

function showToolTip(targetEl) {
	const toolTip = `<span class="tooltip">Copied ✅</span>`;
	targetEl.insertAdjacentHTML("afterbegin", toolTip);

	setTimeout(() => {
		document.querySelector(".tooltip").remove();
	}, 500);
}
