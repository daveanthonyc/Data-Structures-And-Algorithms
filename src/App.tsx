import './App.css';
import { floodFill } from './dsa/6 Recursion/floodFill';

function App() {
    const image = [[1,1,1],[1,1,0],[1,0,1]];
    // const output = [[2,2,2],[2,2,0],[2,0,1]];
    
    console.log(floodFill(image, 1,1,2));

    return(
        <div>

        </div>
    )
}

export default App;
