let bubbleSort = function(arr){	
	let changed;
	for (let i = 0; i < arr.length; i++){
		changed = false;
		for (let j = 0; j<arr.length-i; j++){
			if (arr[j] > arr[j+1]){
				[arr[j],arr[j+1]] = [arr[j+1],arr[j]];
				changed = true;
			}
		}
		if (!changed) break;
	}
	return arr;
}