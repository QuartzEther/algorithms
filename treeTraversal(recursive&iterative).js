let tree = [{
	v: 8,
	c:[{
		v:5,
		c:[
			{v:7},
			{v:10,
			c: [
				{v:14}
			]}
		]
	},
	{
		v:5,
		c:[
			{v:7},
			{v:10,
				c: [
					{v:14},
					{v:7}
				]
			},
			{v:10,
				c: [
					{v:14}
				]
			}
		]
	},
	{
		v:5,
		c:[
			{v:7},
		]
	}]
}]


//рекурсивный обход дерева (v-value, c-children)

function recursive(tree){
	let sum = 0;
	tree.forEach(node => {
		sum += node.v
		if(!node.c){
			return node.v
		}
		sum += recursive(node.c)
	});
	return sum;
}

function iteration(tree){
	if (!tree.length) return 0;
	let sum = 0;
	let stack = [];
	
	tree.forEach(node => stack.push(node));

	while(stack.length){
		const node = stack.pop();
		sum += node.v;
		if (node.c){
			node.c.forEach(node => stack.push(node));
		}
	}

	return sum;
}

console.log(iteration(tree))
