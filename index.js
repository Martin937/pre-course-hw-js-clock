let timerId;


const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {

	timerId = setInterval(updateClock, 100);
	startButton.disabled = true;

});

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
	clearInterval(timerId);
	startButton.disabled = false;
});


function updateClock() {
	const clock = document.getElementById('clock');
	const now = new Date();
	const hours = now.getHours()
	const minutes = now.getMinutes()
	const seconds = now.getSeconds()
	clock.textContent = hours + ':' + minutes + ':' + seconds;
}
