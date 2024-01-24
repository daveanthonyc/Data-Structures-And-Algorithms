type Point = {
    x: number,
    y: number
}

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // BASE CASE
    // 1. off the grid
    if (curr.x < 0 || curr.x >= maze[0].length || 
        curr.y < 0 || curr.y > maze.length) {
        return false;
    }

    // 2. on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 4. reached the end point */
    if (curr.y = end.y && curr.x === end.x) {
        return true
    }

    // 3. on a tile I've visited
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // RECURSE CASE -> important as we are pathing and have to keep track of it
    // 1. Pre
    // 2. Recurse
    // 3. Post
}

function mazeSolver(maze: string[], start: Point, end: Point, wall: string): Point[] {

}

export default mazeSolver;
