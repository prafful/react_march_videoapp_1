import React, { useState } from 'react';

function Photoaction(props) {

    //useState is a hook
    //useState hook is used to create new state value
    //lks -> name of the state
    //updateLks -> function which will be used to change the state lks
    let [lks, updateLks] = useState(parseInt(props.likes))

    let changeLikes = (e)=>{
        console.log(e)
        updateLks(lks+1)
    }

    let changeDislikes = ()=>{
        updateLks(lks-1)
    }

    return ( 
        <div>
            {lks}
            <br />
            <button onClick={changeLikes}>Likes</button>
            <button onClick={changeDislikes}>Dislikes</button>
        </div>
     );
}

export default Photoaction;