// playing with digits
function dig_pow(num, p) {
	if (num <= 0 || p < 1) return console.log('Incorrect parameters');
	// set decimal = 10
	let dec = 10, temp = num;
	//convert number to digits
	let digits = [];
	do {
		digits.unshift(temp % dec);
		temp = Math.trunc(temp / dec);
	} while (temp !== 0);
	// calc result number
	let resInt = 0;
	for (let i = 0; i < digits.length; i++) {
		resInt += Math.pow(digits[i], p);
		p++;
	}
	// return k number
	let k = (resInt % num === 0) ? resInt / num : -1;
	return k;
}