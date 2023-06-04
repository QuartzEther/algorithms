let tree = {
	value: 1,
	left: {
		value: 2,
		left: {
			value:1,
			right: null,
			left: {
				value:9,
				right: {
					value:11,
					right: null,
					left: null,
				},
				left: null,
			}
		},
		right: {
			value:7,
			right: {
				value:9,
				right: null,
				left: null,
			},
			left: null
		}
	},
	right: {
		value: 9,
		left: {
			value:5,
			right: null,
			left: {
				value:7,
				right: null,
				left: null
			}
		},
		right: {
			value:2,
			right: null,
			left: null
		}
	}
};


function iteration(tree){
	
	if (!tree) return 0;
	
	let stack = [tree];

	while(stack.length){
		let node = stack[stack.length-1];

		if (!node.path) node.path = [];

		
		if(node.left){
			stack.push(node.left);
			continue;
		} else if(node.right){
			stack.push(node.right);
			continue;
		} else {
			const tmpNode = stack.pop();	
			if (!stack.length) return [tmpNode.value, tmpNode.path];

			node = stack[stack.length-1];

			if(!node.sums) node.sums = [];
			node.sums.push(tmpNode.value);
			
			if (node.left){
				node.left = null;
				node.path = ['left', ...tmpNode.path]
				if (!node.right){
					node.value += tmpNode.value;
				}
			}
			else if(node.right){
				node.right = null;
				if(node.sums.length===1){
					node.value += tmpNode.value;
					node.path = ['right', ...tmpNode.path]
				} else {
					if(node.sums[1]>node.sums[0]){
						node.value += node.sums[1];
						node.path = ['right', ...tmpNode.path]
					} else {
						node.value += node.sums[0];
					}
				}

			}			
		}		
	
	}
}

console.log(iteration(tree));

