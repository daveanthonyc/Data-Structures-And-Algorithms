type GraphEdge = {
    to: number,
    weight: number
}

type WeightedAdjacencyList = GraphEdge[][];

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    target: number,
): number[] {
    const path: number[] = []; 
    const seen = new Array(graph.length).fill(false);
    walk(graph, source, target, path, seen);

    return path;
}

function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    target: number,
    path: number[],
    seen: boolean[]
): boolean {
    // base case

    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;

    path.push(curr);

    if (curr === target) { 
        return true;
    }

    const list = graph[curr];
    for (let i = 0; i < list.length; i++) {
        const edge = list[i];
        if (walk(graph, edge.to, target, path, seen)) {
            path.push(curr)
            return true;
        }
    }

    path.pop();

    return false;
}
