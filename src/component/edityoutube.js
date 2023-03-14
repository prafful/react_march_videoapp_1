import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EditYoutube() {


    let navigate = useNavigate()
    let location = useLocation()
    let [editvideoid, updateEditVideoId] = useState("")
    let [editvideolikes, updateEditVideoLikes] = useState(0)
    let [editvideodislikes, updateEditVideoDislikes] = useState(0)
    let [editvideoviews, updateEditVideoViews] = useState(0)
    

    useEffect(() => {
        //console.log(location)
        console.log(location.state.currentvideo)
        updateEditVideoId(location.state.currentvideo.videoid)
        updateEditVideoLikes(location.state.currentvideo.likes)
        updateEditVideoDislikes(location.state.currentvideo.dislikes)
        updateEditVideoViews(location.state.currentvideo.views)
    },[])

    let captureVideoId=(event)=>{
        console.log(event.target.value)
        updateEditVideoId(event.target.value)
    }
    let captureLikes=(event)=>{
        console.log(event.target.value)
        updateEditVideoLikes(event.target.value)
    }
    let captureDislikes=(event)=>{
        console.log(event.target.value)
        updateEditVideoDislikes(event.target.value)
    }
    let captureViews=(event)=>{
        console.log(event.target.value)
        updateEditVideoViews(event.target.value)
    }
    
    let updateVideo=()=>{
        let newVideo = {
            videoid:editvideoid,
            likes:editvideolikes,
            dislikes:editvideodislikes,
            views:editvideoviews
        }
        console.log(newVideo)
        axios.put("https://fine-gray-fly-slip.cyclic.app/update/song/" + location.state.currentvideo._id, newVideo)
            .then(response=>{
                console.log(response)
                navigate("/youtubeapi")
            })
            .catch(error=>{
                console.log(error)
            })

    }

    return (
        <div>
            <div>
                <h1>Edit Video</h1>
                <fieldset>
                    <legend>Edit Video</legend>
                    Video Id:
                    <input type="text"
                            onChange={captureVideoId}/>{editvideoid} <br />
                    Likes:
                    <input type="number" 
                            onChange={captureLikes}/>{editvideolikes} <br />
                    DisLikes:
                    <input type="number" 
                            onChange={captureDislikes}/>{editvideodislikes} <br />
                    Views:
                    <input type="number"
                            onChange={captureViews}/>{editvideoviews}  <br /><br />
                    <button onClick={updateVideo}>Update</button>
                    <br /><br />
                    <div>

                        <iframe width="320" height="240" src={"https://www.youtube.com/embed/" + editvideoid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

export default EditYoutube;