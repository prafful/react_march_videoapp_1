import React from 'react';

import Content from '../spa/content';
import Menu from '../spa/menu';

function MyRoot() {
    return (
        <div>
            <div>
                <h1>I am JSX. I am not HTML. </h1>
                <h2>I look like HTML but my behaviour will be mix of HTML and JS. So, I am JSX.</h2>
            </div>
            <div>
                <Menu></Menu>
                <Content></Content>
            </div>
           
        </div>
    );
}

export default MyRoot;
