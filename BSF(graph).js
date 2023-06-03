let graph {};
graph.a = ['b','c'];
graph.b = ['f'];
graph.c = ['d','e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function BSF(graph, start, stop){
	let queue = [];
	queue.push(start);
	while (queue.length){
		const current = queue.shift();
		//проверка на случай, если по текущей вершине ничего не найдено
		//прим: вершина g, которой не существует в графе, но она может быть конечной.
		if (!graph[current]){
			graph[current] = [];
		}
		if (graph[current].includes(stop)){
			return true;
		} else {
			queue = [...queue, ...graph[current]]
		}
	}
	return false;
}