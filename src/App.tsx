import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState<number>(0);

    return(
        <div className='flex-center'>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>count up</button>
        </div>
    )
}

export default App;
