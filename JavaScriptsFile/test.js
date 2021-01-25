function brickCalculator(brick) {
	var perFloorBrick = "Don't Need "; //gloabal
	if (brick < 0) {
		console.log(
			"Enter a Positive Or 0 Flooer Number. I'm Tell You How Much Brick Need"
		);
	} else if (brick <= 1 || brick <= 10) {
		perFloorBrick = brick * 15 * 1000;
	} else if (brick <= 11 || brick <= 20) {
		var firstFloorRange = 150000;
		var nthFloor = brick - 10;
		perFloorBrick = 12 * 1000 * nthFloor + firstFloorRange;
	} else {
		var secoudFloorRange = 270000;
		var nthFloor = brick - 20;
		var infityFloor = 10 * 1000;
		perFloorBrick = infityFloor * nthFloor + secoudFloorRange;
	}
	return perFloorBrick;
}

var totalNeedBrick = brickCalculator(10);
console.log("Total Floor Need =", totalNeedBrick, "Brick");
totalNeedBrick = brickCalculator(20);
console.log("Total Floor Need =", totalNeedBrick, "Brick");
totalNeedBrick = brickCalculator(21);
console.log("Total Floor Need =", totalNeedBrick, "Brick");
