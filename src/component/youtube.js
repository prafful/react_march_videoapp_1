import React, { useState } from 'react';

function Youtube() {

    let [someValue, updateSomeValue] = useState("")
    let [anotherValue, updateAnotherValue] = useState("")



    let captureMe=(e)=>{
        console.log("I am in!")
        console.log(e.target.value)
        updateSomeValue(e.target.value)
    }

    let changeVideo = ()=>{
        updateAnotherValue(someValue)
    }

    return ( 
        <div>
            <h1>Add new youtube videos</h1>
            <label >Video Id: </label>
            <input type="text" 
                   onChange={captureMe} />
            &nbsp;&nbsp;
            <button onClick={changeVideo}>Show</button>
            &nbsp;
            {someValue}
            <br />
            <br />
            <div>
                <iframe width="320"  src={"https://www.youtube.com/embed/"+anotherValue} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
     );
}

export default Youtube;