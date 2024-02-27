import { useState } from "react";

const Comp1 = () => {
    const [name, setName] = useState('meed');
    const HandleClick = (e) => {
        setName('luigi')
    }

    return ( 
        <>
            <p>i m Component 1 daaa !!!!!</p>
            <p>{ name }</p>
            <button onClick={HandleClick}>Click</button>
        </>
    );
}

export default Comp1;