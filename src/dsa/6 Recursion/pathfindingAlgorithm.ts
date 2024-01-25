type Point = {
    x: number,
    y: number
}

export default function mazeSolver(maze: string[], start: Point, end: Point, wall: string): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];
    // how to fill array 
    
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, start, start, end, wall, seen, path);

    return path;
}

const dir = [
    [0,1],
    [1,0],
    [0,-1],
    [-1,0]
]

function walk(maze: string[], curr: Point, start: Point, end: Point, wall: string, seen: boolean[][], path: Point[]): boolean {
    // base case
    // 1. out of bounds
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
        return false;
    }

    // 4. if reached the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    // 2. hit a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. on a seen point
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // I'm on a valid tile and should keep walking
    path.push(curr);
    seen[curr.y][curr.x] = true;

    // for four directions, run walk recurse
    // must loop all directions, return 
    for (let i = 0; i < 4; i++) {
        const [x,y] = dir[i];
        const nextTile: Point = {
            x: curr.x + x, 
            y: curr.y + y
        };

        if (walk(maze, nextTile, start, end, wall, seen, path)) {
            return true;
        }
    }

    // return if any of the tiles are valid, therefore 
    // pop only when all directions are invalid
    path.pop();

    return false;
}
