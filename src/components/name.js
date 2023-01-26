
import { useReducer, useEffect } from 'react';


const initialname = { name: 'Kakashi' }

const reducer = (state, action)  => {   
    switch(action) {
        case 'changeName':
            return { name: state.name = 'Naruto' };
        default: 
            return state
    }
}


const Name = () => {


    const [state, dispatch] = useReducer(reducer, initialname);

    useEffect(() => {   
        console.log('useEffect worked');

        return (() => {  
            console.log('refresh');
        })
    }, [state])

    
    return ( 
        <div>    
            <p> 
                name:  {state.name}
            </p>
            <button onClick={() => dispatch('changeName')}>ChangeName</button>
       </div> 
     );
}
 
export default Name;







