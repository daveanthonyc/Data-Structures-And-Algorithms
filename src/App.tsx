import './App.css';
import recursive_list_walk from './dsa/6 Recursion/RecursionLinkedList';
import { ListNode } from './dsa/6 Recursion/RecursionLinkedList';

function App() {
    const node1 = {value: 3} as ListNode<number>;
    const node2 = {value: 2, next: node1} as ListNode<number>;
    const node3 = {value: 1, next: node2} as ListNode<number>;

    console.log(recursive_list_walk(node3));

    return(
        <div>
        </div>
    )
}

export default App;
