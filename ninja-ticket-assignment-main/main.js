//increase the first class value
document
	.getElementById("first-class-increase")
	.addEventListener("click", function () {
		handleTicketChange("first-class", true);
	});
//decreasing the fist class value
document
	.getElementById("first-class-decrease")
	.addEventListener("click", function () {
		handleTicketChange("first-class", false);
	});
//increasing the economy class ticket value
document
	.getElementById("economy-increase")
	.addEventListener("click", function () {
		handleTicketChange("economy", true);
	});
// decreasing the economy class ticket value
document
	.getElementById("economy-decrease")
	.addEventListener("click", function () {
		handleTicketChange("economy", false);
	});
// showing confirmation area
document.getElementById("book-now").addEventListener("click", function () {
	document.getElementById("confirmation-area").style.display = "flex";
});
// hiding confirmation area and reset all the values
document.getElementById("cross-sign").addEventListener("click", function () {
	document.getElementById("confirmation-area").style.display = "none";

	//reset all the values
	// values in the form
	document.getElementById("first-class-count").value = 0;
	document.getElementById("economy-count").value = 0;
	document.getElementById("subtotal-amount").innerText = "$" + 0;
	document.getElementById("vat-amount").innerText = "$" + 0;
	document.getElementById("total-amount").innerText = "$" + 0;

	// values in the confirmation area
	document.getElementById("first-class-ticket").innerText = 0;
	document.getElementById("economy-ticket").innerText = 0;
	document.getElementById("total-bill").innerText = "$" + 0;
});

// function for managing the whole system
function handleTicketChange(ticket, isIncreasing) {
	const ticketCount = getInputValue(ticket);
	let ticketNewCount = ticketCount;
	if (isIncreasing == true) {
		ticketNewCount = ticketCount + 1;
	}
	if (isIncreasing == false && ticketCount > 0) {
		ticketNewCount = ticketCount - 1;
	}
	document.getElementById(ticket + "-count").value = ticketNewCount;
	calculateTotal();
}

// calculation of ticket prices
function calculateTotal() {
	const firstClassCount = getInputValue("first-class");
	const economyCount = getInputValue("economy");

	// sending ticket amount to confirmation area
	document.getElementById("first-class-ticket").innerText = firstClassCount;
	document.getElementById("economy-ticket").innerText = economyCount;

	// Calculating subtotal
	const subTotal = firstClassCount * 150 + economyCount * 100;
	document.getElementById("subtotal-amount").innerText = "$" + subTotal;

	// Calculating VAT
	const vat = Math.round(subTotal * 0.1);
	document.getElementById("vat-amount").innerText = "$" + vat;

	// Calculating Total
	const Total = subTotal + vat;
	document.getElementById("total-amount").innerText = "$" + Total;

	// sending total amount to confirmation area
	document.getElementById("total-bill").innerText = "$" + Total;
}

// calculating the ticket amount
function getInputValue(ticket) {
	const ticketInput = document.getElementById(ticket + "-count");
	const ticketCount = parseInt(ticketInput.value);
	return ticketCount;
}
