type WeightedAdjacencyMatrix = number[][];

// An Adjacency Matrix is a list of arrays that contain information about the direction and weight of connection to another vertex 
export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    target: number
): number[] | null {

    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: (number | null)[] = new Array(graph.length).fill(null);

    seen[source] = true;
    const queue: number[] = [source];

    do {
        const curr = queue.shift() as number;
        if (curr === target) {
            break;
        }

        // push children
        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0 || seen[i] === true) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            queue.push(i);
        }
        seen[curr] = true;

    } while (queue.length);
    
    let curr: number | null = target;
    const out: number[] = [];

    while (curr != null) {
        out.push(curr as number);
        curr = prev[curr];
    }

    if (!out.length) {
        return null;
    }

    return out.reverse();
}
