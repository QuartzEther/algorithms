let quickSort = function(arr){	
	if (arr.length <= 1){
		return arr;
	}
	
	let left = [], right = [], temp = arr[0];
	
	for (let i = 1; i<arr.length; i++){
		if( arr[i] <= temp){
			left.push(arr[i])
		} else { 
			right.push(arr[i])
		}
	}
	
	return [...quickSort(left), temp, ...quickSort(right)];
}