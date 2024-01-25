import { expect, test } from "vitest";
import mazeSolver from "./pathfindingAlgorithm";

    const maze = [
        "#####E#",
        "#     #",
        "#S#####",
    ]

    const answer = mazeSolver(maze, {x:1,y:2}, {x:5,y:0}, "#");

    const pointAnswers = [
        {x:1,y:2},
        {x:1,y:1},
        {x:2,y:1},
        {x:3,y:1},
        {x:4,y:1},
        {x:5,y:1},
        {x:5,y:0},
    ]

test('mazeSolver works', () => {
    expect(answer).toStrictEqual(pointAnswers);
})
