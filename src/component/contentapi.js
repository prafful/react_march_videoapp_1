import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ContentApi() {

    //create a state variable which will be used to store response
    let [alltodos, updateAllTodos] = useState([])

    //implement useEffect hook which in turn will
    //use axios to make API call
    useEffect(()=>{
       makeApiCall()
    },[])

    let makeApiCall = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                //initialize the response.data to the state so that
                //values in response.data are initialized to the state 
                //variable
                //state variable is accessible within the whole component
                updateAllTodos(response.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    let displayTodoData =()=>{
        return alltodos.map((todo)=>{
            //console.log(todo)
            if(todo.completed){
                return (
                    <div key={todo.id} 
                        style={{
                            border:"1px solid pink",
                            margin:"4px",
                            width:"94px",
                            padding:"4px",
                            backgroundColor:"green"
                            }}>
                        {todo.id}. {todo.title}
                    </div>
                )
            }else{
                 return (
                <div key={todo.id} 
                    style={{
                        border:"1px solid pink",
                        margin:"4px",
                        width:"94px",
                        padding:"4px",
                        backgroundColor:"red"
                        }}>
                    {todo.id}. {todo.title}
                </div>
            )
            }
           
        })
    }
    

    return ( 
        <div>
            <h1>Load the data by making a call to remote API!</h1>
            <h2>Length of alltodos: {alltodos.length}</h2>
            <div style={{display:'flex', border:"1px solid blue", flexWrap:"wrap"}}>
                {displayTodoData()}
            </div>
        </div>
     );
}

export default ContentApi;