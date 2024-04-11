export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const visited: boolean[][] = [];
    for (let i = 0; i < image.length; i++) {
        visited[i] = new Array(image[0].length).fill(false);
    }

    const startColor = image[sr][sc];

    fill(image, {row: sr, column: sc}, color, startColor, visited);

    return image;
}

type Point = {
    row: number,
    column: number
}

function fill(image: number[][], curr: Point, color: number, startColor: number, visited: boolean[][]) {
    const { row, column } = curr;

    // error boundary
    if (row > image.length-1 || column > image[0].length-1 || row < 0 || column < 0) {
        return;
    } 

    // undefined
    if (image[row][column] === undefined || image[row][column] === null) {
        return;
    }

    // visited
    if (visited[row][column]) {
        return;
    }

    visited[row][column] = true;


    // swap colors
    const currColor = image[row][column];
    if (currColor !== startColor) {
        return;
    }

    image[row][column] = color;

    // fill top
    fill(image, {row: row-1, column: column}, color,  startColor, visited);
    // fill left
    fill(image, {row: row, column: column-1}, color, startColor, visited);
    // fill right
    fill(image, {row: row+1, column: column}, color, startColor, visited);
    // fill bottom
    fill(image, {row: row, column: column+1}, color, startColor, visited);
}


