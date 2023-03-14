import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContentApi from '../component/contentapi';
import EditYoutube from '../component/edityoutube';
import Gallery from '../component/gallery';
import Youtube from '../component/youtube';
import YoutubeAPI from '../component/youtubeapi';

function Content() {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<Gallery></Gallery>}></Route>
                <Route path='/contentapi' element={<ContentApi></ContentApi>}></Route>
                <Route path='/youtube' element={<Youtube></Youtube>}></Route>
                <Route path='/youtubeapi' element={<YoutubeAPI></YoutubeAPI>}></Route>
                <Route path='/edityoutube' element={<EditYoutube></EditYoutube>}></Route>
            </Routes>
        </div>
     );
}

export default Content;