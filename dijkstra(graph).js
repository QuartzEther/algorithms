let graph = {};
graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

function shortPath(graph, start, stop){
	const costs = {}; //Стоимость пути от start до всех, на данной итерации
	const processed = []; //те узлы которые мы уже проверили
	let neighbors = {}; //соседние вершины рассматриваемого узла

	//заполнение массива costs
	Object.keys(graph).forEach(node => {
		if (node != start){
			let value = graph[start][node];
			costs[node] = value || 100000000; 
		}
	})

	//поиск вершины в которую мы можем попасть из точки start с минимальной стоимостью
	let node = findNodeLowestCost(costs, processed);

	//пока вершина не пустая
	while(node){
		const cost = costs[node]; //стоимость пити до node
		neighbors = graph[node];

		Object.keys(neighbors).forEach(neighbor => {
			let newCost = cost + neighbors[neighbor];
			if (newCost < costs[neighbor]){
				costs[neighbor] = newCost;
			}
		})
		processed.push(node);

		//поиск новой вершины, для рассмотрения соседей
		node = findNodeLowestCost(costs, processed);
	}

	return costs[stop];
}

function findNodeLowestCost(costs, processed){
	let lowestCost = 100000000; //мин значание
	let lowestNode; //узел с этим значением

	Object.keys(costs).forEach(node => {
		let cost = costs[node];
		if (cost<lowestCost && !processed.includes(node)){
			lowestCost = cost;
			lowestNode = node;
		}
	})

	return lowestNode;
}

console.log(shortPath(graph, 'a', 'g'))