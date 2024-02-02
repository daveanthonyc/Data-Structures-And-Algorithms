type WeightedAdjacencyMatrix = number[][];

// An Adjacency Matrix is a list of arrays that contain information about the direction and weight of connection to another vertex 
export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    target: number
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1)

    // How exactly are seen and previous used? => TO arrive at the answer?
    
    seen[source] = true;
    // With a BFS, we initialise a queue using an arrayList with the source?
    const queue: number[] = [source];

    do {
        // regular BFS operations
        const curr = queue.shift() as number;

        // curr is the 
        if (curr === target) {
            break;
        }

        seen[curr] = true;

        // push all connections of curr to queue
        const adjs = graph[curr];
        for (let i = 0; i < graph.length; i++) {
            if (adjs[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            queue.push(i);
        }

    } while(queue.length)


    // build backwards
    if (prev[target] === -1) {
        return null;
    }

    let curr = target;
    const out: number[] = [];


    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}
