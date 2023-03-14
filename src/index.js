import React from 'react';
import ReactDOM from 'react-dom';
import MyRoot from './rootcomponent/root';
import { HashRouter } from 'react-router-dom'


/*
Q. What do I want to render?
Ans. I want to render the root component. 
    The name of root component is Root.
    It is defined in rootcomponent.js

Q. Where do you want to render the root component?
Ans. I want to render it in div whose id is "root"    
*/
ReactDOM.render(
    <HashRouter>
        <MyRoot></MyRoot>
    </HashRouter>
    , document.getElementById("mycontainer"))

