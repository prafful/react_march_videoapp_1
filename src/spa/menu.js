import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return ( 
        <div>
            <Link to="/">Gallery</Link> &nbsp;&nbsp;
            <Link to="/contentapi">Content API</Link> &nbsp;&nbsp;
            <Link to="/youtube">Youtube</Link> &nbsp;&nbsp;
            <Link to="/youtubeapi">Youtube API</Link> &nbsp;&nbsp;
        </div>
     );
}

export default Menu;