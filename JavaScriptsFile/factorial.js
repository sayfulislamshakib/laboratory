//Calculate factorial in a recurisive function
//function created
function factorial(n) {
	//if user input is 0 then return 1 becouse of factorial delfult it
	if (n == 0) {
		return 1;
		//else return n-1 example:(you have 10, 10's fectorial is (10-1))
	} else {
		return n * factorial(n - 1);
	}
}
//print the result of the function
let result = factorial(50);
console.log(result);
