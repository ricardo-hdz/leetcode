import { Pin } from './Pin';

export function countPinsBFS(m: number, n:number, pins:Array<Array<number>>, start:number) {
    
    let network = {};
    let pinsCreated = [];

    function createPin(val) {
        if (!network.hasOwnProperty(val)) {
            let pin = new Pin(val);
            network[val] = pin;
            pinsCreated.push(val);
            return pin;
        } else {
            return network[val];
        }
    }
    
    pins.forEach(d => { 
        if (d.length === 2) {
            createPin(d[0]);
            let friend = createPin(d[1]);
            network[d[0]].friends.push(friend);
        } else if (d.length === 1) {
            createPin(d[0]);
        }
    });

    // BFS, use queue, then shift from queue and print degree from start

    let queue = [];
    let degree = 0;

    queue.push(network[start]);
    network[start].visited = true;
    network[start].degree = degree;
    
    let result = [];
    let pinsVisited = [];

    while (queue.length) {
        let currentPin: Pin = queue.shift();
        result.push(currentPin.degree);
        pinsVisited.push(currentPin.val);
        degree++;
        currentPin.friends.forEach(p => {
            if (!p.visited) {                
                queue.push(p);
                p.visited = true;
                p.degree = degree;
            }
        });
    };

    // Map all unvisited
    let f = pinsCreated.filter(v => { return pinsVisited.indexOf(v) === -1 }).map(v => network[v].degree);

    return result.concat(f);
}

export function countPinsDFS(m: number, n:number, pins:Array<Array<number>>, start:number) {
    
    let network = {};
    let pinsCreated = [];

    function createPin(val) {
        if (!network.hasOwnProperty(val)) {
            let pin = new Pin(val);
            network[val] = pin;
            pinsCreated.push(val);
            return pin;
        } else {
            return network[val];
        }
    }
    
    pins.forEach(d => { 
        if (d.length === 2) {
            createPin(d[0]);
            let friend = createPin(d[1]);
            network[d[0]].friends.push(friend);
        } else if (d.length === 1) {
            createPin(d[0]);
        }
    });

    console.log('network', network);

    let stack = [];
    let degree = 0;
    stack.push(network[start]);
    network[start].visited = true;
    network[start].degree = degree;
    let visited = [];


    while (stack.length) {
        let currentPin = stack.shift();
        visited.push(currentPin.val);
        degree++;
        currentPin.friends.forEach(f => {
            if (f.visited === false) {
                stack.push(f);
                f.visited = true;
                f.degree = degree;
            }
        });
    }

    let result = visited.map(p => network[p].degree);
    let delta = pinsCreated.filter(v => visited.indexOf(v) === -1).map(p => network[p].degree);

    return result.reverse().concat(delta);

}