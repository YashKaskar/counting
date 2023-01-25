import { useState } from "react";

const Home = () => {

    const [count, setCount] = useState(() => {  
        console.log('run one time');
        return(0)
    })

    function decreaseCount() {
        setCount( lastCount => count - 1) // decreasing the count
    }

    function increaseCount() {  
        setCount( lastCount => count + 1) // increase the count
    }




    return (    
        <div>   
            <h1> Counting......</h1>

            <div className="btn">
            <button className="btn1" onClick={increaseCount}> + </button>
            <button className="btn2" onClick={decreaseCount} > - </button>

            </div>
            <div className="number">   
                <span> {count} </span>
            </div>
        </div>
        
     );
}
 
export default Home;