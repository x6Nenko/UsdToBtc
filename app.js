const btc = document.getElementById("btc");
const usd = document.getElementById("usd");
const calculateRate = document.getElementById("calculate");
const result = document.getElementById("converted");

calculateRate.addEventListener("click", function() {
	let btcRate = btc.value;
	let usdAmount = usd.value;
	let exchangeRate = usdAmount / btcRate;
	result.classList.remove("warning");
	result.classList.remove("result");

	if (isNaN(exchangeRate)) {
		result.classList.add("warning");
		result.innerHTML = "Warning! You should answer both questions before calculating, only NUMBERS allowed.";
	} else if (btcRate > 1000000) {
		result.classList.add("warning");
		result.innerHTML = "Once BTC rate will be like that, we'll fix the calculation formula...";
	} else {
		result.classList.add("result");
 		result.innerHTML = "You can buy " + exchangeRate + " BTC.";
	}
});