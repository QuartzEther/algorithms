function cashFunction(fn){
	const cash = {} //результат кеширования
	return function (n) {
		if (cash[n]){
			console.log(`Взято из кеша: ${cash[n]}`);
			return cash[n];
		}

		let result = fn(n);
		cash[n] = result;

		console.log(`Посчитано только-что: ${cash[n]}`)
		return result
	}
}

function factorial(n){
	let res = 1;
	while (n != 1){
		res *= n;
		n--;
	}
	return res;
}

let cashFactorial = cashFunction(factorial);

cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(5);
cashFactorial(7);
