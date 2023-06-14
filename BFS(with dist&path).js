let graph = {
	0: [1, 3],
	1: [0, 8],
	2: [3, 4, 6, 8, 9],
	3: [0, 2, 7, 9],
	4: [2],
	5: [6, 8],
	6: [2, 5],
	7: [3, 9],
	8: [1, 2, 5],
	9: [2, 3, 7],
	10: []
}

function bsf(graph, start){
	let lengthTo = new Array(Object.keys(graph).length).fill(null).map((el, ind) => Object.keys(graph)[ind] == start? 0 : Infinity)
	let from = new Array(Object.keys(graph).length).fill(null);

	from[start] = -1
	let queue = [start];

	while (queue.length){
		const el = queue.shift();

		for (let i of graph[el]){
			if (lengthTo[i] === Infinity){
				queue.push(i);
				lengthTo[i] = lengthTo[el] + 1;
				from[i] = el;
			}
		}
	}

	return [lengthTo, from];
}

function showPath(graph, from, to){
	let [dist, path] = bsf(graph, from)
	if (dist[to] == Infinity) return `No path from ${from} to ${to}`;

	let p = [to];
	while(p[0] != -1){
		p.unshift(path[p[0]])
	}
	return `From ${from} to ${to}: Distance ${dist[to]}, path ${p.slice(1).reduce((sum, el)=> sum += sum ? ' -> '+ el : el, '')}`;

}

console.log(showPath(graph, 0, 6))