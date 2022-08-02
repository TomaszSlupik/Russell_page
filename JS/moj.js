const burgermenu = document.querySelector(".burgermenu");
const burgermenunone = document.querySelector(".burgermenunone");
const navtext = document.querySelector(".navtext");
const navtextflex = document.querySelector(".navtextflex");
const paw = document.querySelector(".paw");
const pawtwo = document.querySelector(".pawtwo");
const pawnone = document.querySelector(".pawnone");
const navtexthero = document.querySelector(".navtexthero");
const keyclose = document.querySelector(".keyclose");
const keycloseblock = document.querySelector(".keycloseblock");

const showMenu = () => {
	navtext.classList.toggle("navtextflex");
	paw.classList.toggle("pawnone");
	pawtwo.classList.toggle("pawnone");
	navtexthero.classList.toggle("pawnone");
	keyclose.classList.toggle("keycloseblock");
	burgermenu.classList.toggle("burgermenunone");
};

burgermenu.addEventListener("click", showMenu);
keyclose.addEventListener("click", showMenu);

const footeryear = document.querySelector(".footeryear");
const handleYear = () => {
	const year = new Date().getFullYear();
	footeryear.innerText = year;
};

handleYear();

const accordeonAll = document.querySelector(".accordeonAll");
const btnaccordeon = document.querySelectorAll(".btnaccordeon");
const active = document.querySelector(".active");

function open() {
	if (this.nextElementSibling.classList.contains("active")) {
		this.nextElementSibling.classList.remove("active");
	} else {
		close();
		this.nextElementSibling.classList.toggle("active");
	}
}

const close = () => {
	const accordeonInfo = document.querySelectorAll(".accordeon-info");
	accordeonInfo.forEach((item) => item.classList.remove("active"));
};

btnaccordeon.forEach((btn) => btn.addEventListener("click", open));

const btn = document.querySelector(".btn");
const vibrate = document.querySelector(".vibrate-3");
const contactfinall = document.querySelector(".contactfinall");
const inputone = document.querySelector(".inputone");
const inputtwo = document.querySelector(".inputtwo");
const inputhree = document.querySelector(".inputthree");
const textarea = document.querySelector('textarea')
const contactfinallbefore = document.querySelector(".contactfinallbefore");

const vibrateAnimation = () => {
	if (
		inputone.value == "" ||
		inputtwo.value == "" ||
		inputhree.value == "" ||
		textarea.value == ""
	) {
		contactfinallbefore.style.display = "flex";
	} else {
        sendAnimation()
        
	}
};

const sendAnimation = () => {
	btn.classList.add("vibrate-3");
	setTimeout(removeAnimation, 1700);
};

const removeAnimation = () => {
	btn.classList.remove("vibrate-3");
    contactfinallbefore.style.color = "green";
    contactfinallbefore.style.display = "flex";
    contactfinallbefore.textContent = "Wiadomość wysłano";
};

btn.addEventListener("click", vibrateAnimation);
