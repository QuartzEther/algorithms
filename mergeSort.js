function sort(arr){
	if (arr.length > 2) {
		let left = arr.slice(0, Math.floor(arr.length / 2));
		let right = arr.slice(Math.floor(arr.length / 2));

		left = sort(left);
		right = sort(right);


		
		let newArr = [];

		for (let i = 0,j = 0; i < left.length; i++){
			while (right[j] < left[i]){
				newArr.push(right[j]);
				j++;
			}
			newArr.push(left[i]);
			
			if (i === left.length-1){
				while (j<right.length){
					newArr.push(right[j]);
					j++;
				}
			}
		}
		return newArr;
	} else {
		if (arr.length > 1 && arr[0] > arr[1]) {
			let temp = arr[0];
			arr[0] = arr[1];
			arr[1] = temp;
		}
		return arr;
	}
}

let arr = [2,6,4,2,6,0,7,5,3,5,6,7,8,0,5,4,2,1];
console.log(sort(arr));