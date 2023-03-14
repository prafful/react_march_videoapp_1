import React from 'react';

function Photoimage(props) {
    return ( 
        <div>
              <img src={"https://picsum.photos/200/160?random="+props.randomimage} alt="" srcset="" />
        </div>
     );
}

export default Photoimage;