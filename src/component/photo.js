import React from 'react';
import Photoaction from './photoaction';
import Photoimage from './photoimage';
import PhotoTitle from './phototitle';

function Photo(props) {

    let myStyle = {
        color:"red", 
        border: "1px solid pink", 
        borderRadius:"5px", 
        textShadow:"0px 1px black",
        margin:"10px"
    }

    let score = 8
    let academy = "Airasia Academy"
    let spacecraft =()=>{
        return (
            <span>
                Hello from Mars! You can live here in year 2030!
            </span>
        )
    }
    return (  
        <div style={{border:"1px solid blue", margin: "10px", padding: "10px", width:"20%"}}>
            <h3>I am photo component. I will contain 3 child components:</h3>
            <ol>
                <li style={myStyle}>
                    <PhotoTitle photoname={props.photoname}></PhotoTitle>    
                </li>
                <li style={myStyle}>
                    <span style={{color:"orange", borderBottom:"2px solid black"}}>
                    image
                    </span>
                    <Photoimage randomimage={props.likes}></Photoimage>
                </li>
                <li style={myStyle}>
                    <Photoaction likes={props.likes}></Photoaction>
                </li>
            </ol>
            <h3>Score: {score}</h3>
            <h3>Academy: {academy}</h3>
            <h3>Message from spacecraft: {spacecraft()}</h3>
        </div>
    );
}
export default Photo;
