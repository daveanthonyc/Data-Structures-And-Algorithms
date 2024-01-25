import './App.css';
import mazeSolver from './dsa/6 Recursion/pathfindingAlgorithm';

function App() {
    const maze = [
        "#####E#",
        "#     #",
        "#S#####",
    ]

    const answer = mazeSolver(maze, {x:1,y:2}, {x:5,y:0}, "#");
    console.log(answer);

    return(
        <div>
        </div>
    )
}

export default App;
