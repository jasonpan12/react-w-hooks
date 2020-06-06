//
// const App = (props) => {
//
//     // Destructure array -- assign name to position, like an associative array
//     // [currentState, updaterFunction] aka [currentState, setState]
//     const [count, setCount] = useState(props.count)
//     const [text, setText] = useState('')
//
//     const increment = () => {
//         setCount(count + 1);
//     }
//
//     // Runs once right away
//     // Runs again after every render or change in state/props
//     // Unless you specify an array of dependencies - effects only run on change in the deps
//     // better vs componentdidMount, which every time
//     useEffect(() => {
//         console.log('This should only run once!')
//     }, []) // will never run again because it depends on nothing
//
//     useEffect(() => {
//         console.log('useEffect ran')
//         document.title = count
//     }, [count])
//
//     return (
//         <div>
//             <p>The current {text || 'count'} is {count}</p>
//             <button onClick={() => setCount(count-1)}>-1</button>
//             <button onClick={() => setCount(props.count)}>reset</button>
//             <button onClick={increment}>+1</button>
//             <input value={text} onChange = {(e) => setText(e.target.value)}/>
//         </div>
//     )
// }
