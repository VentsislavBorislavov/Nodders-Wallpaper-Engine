const nodders = document.getElementById('nodders');
const clock = document.getElementById('clock');
const date = document.getElementById('date');

let showSeconds = false;

const onFlip = () => {
	if (nodders.classList.contains('flip')) {
		nodders.classList.remove('flip');
	} else {
		nodders.classList.add('flip');
	}
};

const setDateAndTime = () => {
	const d = new Date();
	const hours = setBetterTime(d.getHours());
	const minutes = setBetterTime(d.getMinutes());
	let time = `${hours}:${minutes}`;
	const todayDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
	if (showSeconds) {
		time += `:${setBetterTime(d.getSeconds())}`;
	}
	clock.innerHTML = time;
	date.innerHTML = todayDate;
};

const onShowSeconds = () => {
	showSeconds = !showSeconds;
	if (showSeconds) {
		clock.classList.add('seconds');
	} else {
		clock.classList.remove('seconds');
	}
};

const setBetterTime = (time) => (time < 10 ? '0' + time : time);

setInterval(onFlip, 1000);
setInterval(setDateAndTime, 1);
