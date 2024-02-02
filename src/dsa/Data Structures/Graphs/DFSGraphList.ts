type GraphEdge = {
    to: number,
    weight: number
}

type WeightedAdjacencyList = GraphEdge[][];

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    target: number,
) {

}

function walk(
    graph: WeightedAdjacencyList,
    source: number,
    target: number,
    curr: number,
    seen: number[],
    path: number[]): boolean {

    if (curr === target) {
        return true;
    }

    if (seen[curr]) {
        return false;
    }

    for (let i = 0; i < graph[curr].length; i++) {
    }
}

