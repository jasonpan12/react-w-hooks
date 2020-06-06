import {useState, useEffect} from 'react';

// Custom hook design pattern - wrap regular hooks within a custom hook
// Regular hooks are not defined within the component Note
// But are defined in our custom hook
const useMousePosition = () => {
    const [position, setPosition] = useState({x: 0, y: 0});

    // Only register on first load
    useEffect(()=> {
        const handleMouseMove = (e) => {
            setPosition({x: e.pageX, y: e.pageY})
        }
        document.addEventListener('mousemove', handleMouseMove);

        return () => { // Must remove same function in memory (i.e. name it)
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return position;
}

export {useMousePosition as default};
