let binarySearch = function(arr, n){
	let left = 0, right = arr.length;
	let center;
	while(left<=right) {
		center = Math.floor((left+right)/2);
		if (arr[center] === n){
			found = true;
			position = center;
			return position;
		}
		if(n < arr[center]){
			right = center -1;
		} else {
			left = center + 1;
		}
	}
	console.log (left, right)
	return -1;
}