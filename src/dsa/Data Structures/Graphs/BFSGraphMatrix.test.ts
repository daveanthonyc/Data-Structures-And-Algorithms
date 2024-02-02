import { test, expect } from "vitest";
import bfs from "./BFSGraphMatrix";

const matrix = [
    [0,1,1,0,0],
    [0,0,0,0,0],
    [0,0,0,1,0],
    [0,0,0,0,1],
    [0,1,0,0,0],
]

test('bfs on Graph Matrix works', () => {
    expect(bfs(matrix, 0, 4)).toEqual([0,2,3,4]);
})
