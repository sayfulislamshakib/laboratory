//git code link -
//convert kilometerToMeter
//function declared
function kilometerToMeter(input) {
	var result = input * 1000;
	return result;
}
//store result
var result1 = kilometerToMeter();
//print result
console.log(result1);

// create a budgetCalculator
//fuction declared
function budgetCalculator(watch, mobile, laptop) {
	//watch price
	var totalWatch = 50;
	//mobile price
	var totalMobile = 100;
	//laptop price
	var totalLeptop = 500;
	//total amount
	var totalAmount = "";
	//condition start
	if (watch < 0 || mobile < 0 || laptop < 0) {
		console.log("Please Enter Positive Or 0 Number");
	} else if (
		watch === undefined ||
		mobile === undefined ||
		laptop === undefined
	) {
		console.log("Please Enter three value");
	} else {
		totalAmount =
			totalMobile * mobile + totalWatch * watch + totalLeptop * laptop;
	}
	return totalAmount;
}
//condition end

//store result
const returnResult = budgetCalculator(1, 1, 2);
//print the result
console.log(returnResult);

//megaFriend function decleard
function megaFriend(name) {
	var friendName = name;
	//using for loop
	//condtion start
	for (var i = 0; i < name.length; i++) {
		friendName = name[i];
		if (friendName.length > name.length) {
			var megaFriendName = friendName;
		}
	}
	return megaFriendName;
}
var megaFriendNameResult = megaFriend([
	"Sayful",
	"Islam",
	"shakib the programmer",
]);
//print the result
console.log(megaFriendNameResult);

//calculate the hostel cost
function hotelCost(days) {
	var tenDaycost = "Don't need";
	var elevenDasyAfter = "";
	if (days < 0) {
		console.log("Please enter how many days you need the room!");
	} else if (days <= 1 || days <= 10) {
		tenDaycost = days * 100;
	} else if (days <= 11 || days <= 20) {
		var tenDays = days - 10;
		tenDaycost = tenDays * 80 + 1000;
		elevenDasyAfter = tenDays * 80 + 1000;
	} else if (days > 21) {
		var newTenDays = days - 20;
		var anotherDays = 10 * 100 + 10 * 80;
		tenDaycost = newTenDays * 50 + anotherDays;
	}
	return tenDaycost;
}
var totalcost = hotelCost(100);
console.log(totalcost);
