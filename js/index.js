const nodders = document.getElementById('nodders');
const clock = document.getElementById('clock');
const date = document.getElementById('date');

const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Sep', 'Nov', 'Dec' ];

let showSeconds = false;
let showMonth = false;

// Clock and Date

const setTime = (d) => {
	const hours = setBetterTime(d.getHours());
	const minutes = setBetterTime(d.getMinutes());
	let time = `${hours}:${minutes}`;
	if (showSeconds) {
		time += `:${setBetterTime(d.getSeconds())}`;
	}
	clock.innerHTML = time;
};

const setDate = (d) => {
	const day = d.getDate();
	const year = d.getFullYear();
	const month = d.getMonth();
	const monthShow = showMonth ? months[month] : month + 1;
	const todayDate = `${day}/${monthShow}/${year}`;
	date.innerHTML = todayDate;
};

// Modifiers

const onShowSeconds = () => {
	showSeconds = !showSeconds;
};

const onShowMonth = () => {
	showMonth = !showMonth;
};

const setBetterTime = (time) => (time < 10 ? '0' + time : time);

// Image functions

const lightTheText = () => {
	if (!clock.classList.contains('shine')) {
		clock.classList.add('shine');
		date.classList.add('shine');
	} else {
		clock.classList.remove('shine');
		date.classList.remove('shine');
	}
};

const boobaAnimations = (d) => {
	const hasBooba = clock.classList.contains('booba-incoming');
	if (d.getHours() === d.getMinutes() && !hasBooba) {
		clock.classList.remove('booba-gone');
		clock.classList.add('booba-incoming');
	}
	if (d.getHours() !== d.getMinutes() && hasBooba) {
		clock.classList.remove('booba-incoming');
		clock.classList.add('booba-gone');
	}
};

const flip = () => {
	if (nodders.classList.contains('flip')) {
		nodders.classList.remove('flip');
	} else {
		nodders.classList.add('flip');
	}
};

// update funtion

const update = () => {
	const d = new Date();
	setTime(d);
	setDate(d);
	boobaAnimations(d);
};

setInterval(flip, 1000);
setInterval(update, 100);
