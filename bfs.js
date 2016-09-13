var visitados = new Array(20)

var G = {}

var nodes = new vis.DataSet()
nodes.add([
  		{id: 0, label: 'Node 0'},
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'},
        {id: 6, label: 'Node 6'}
	]);
 
// create an array with edges
var edges = [
        {from: 0, to: 1},
        {from: 0, to: 2},
        {from: 1, to: 3},
        {from: 1, to: 4},
        {from: 2, to: 5},
        {from: 2, to: 6}  
    ];
 
// create a network
var container = document.getElementById('dfs');
var data = {
        nodes: nodes,
        edges: edges
    };
var network = new vis.Network(container, data, {});


//
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



function bfs(inicio, oro){	
	var q = []
	q.push(new Array(inicio, oro))
	visitados[inicio] = 1
	var mov = 0
	while(q.legth != 0){
		var actual = q.shift()
		nodes.update([{id:actual[0], color:{background:'red'}}]);
		sleep(1000)
		console.log(`Movimiento ${mov}: nodo visitado -> ${actual[0]}  ${actual[1]} \n`)
		if(actual[1] == 1){
		nodes.update([{id:actual[0], color:{background:'blue'}}]);
			return actual[0]
		}
		for(var i = 0; i < G[actual[0]].length; i++){
			var vecino = G[actual[0]][i]
			//console.log(vecino)
			if(visitados[vecino[0]] != 1){
				q.push(vecino)
				visitados[vecino[0]] = 1
			}
		}
	
	}
	
	return -1
}

function init(N, visitados, G){
	for(var i = 0; i<N; i++){
		visitados[i] = 0
		G[i] = []
	}
}

var N = 7, M = 6
init(N, visitados, G)
var inicio = 0, inicio_oro = 0
var inp = [
			[0, 1, 0],
			[0, 2, 0],
			[1, 3, 0],
			[1, 4, 0],
			[2, 5, 0],
			[2, 6, 1]
		]	


for(var i = 0; i < M; i++){
	var x = inp[i][0]
	var y = inp[i][1]
	var oro = inp[i][2]
	
	G[x].push(new Array(y, oro))	
}

// busqueda en amplitud


//sleep(2000)
var respuesta = bfs(inicio, inicio_oro)
if(respuesta == -1) console.log("No encontre oro \n")
else console.log(`Encontre oro en el nodo: ${respuesta}\n`)





