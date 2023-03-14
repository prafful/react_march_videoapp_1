import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function YoutubeAPI() {

    //useNavigate() hook for programaatic navigation
    let navigate = useNavigate()

    let [allvideos, updateAllVideos] = useState([])

    //use useEffect hook for API call
    useEffect(() => {
        callYoutubeAPI()
    }, [])

    let callYoutubeAPI = () => {
        //use axios to call youtube api
        axios.get("https://fine-gray-fly-slip.cyclic.app/get/all/songs")
            .then(response => {
                console.log(response)
                console.log(response.data)
                updateAllVideos(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    let deleteVideo = (id) => {
        console.log("Delete video with id: " + id)
        axios.delete("https://fine-gray-fly-slip.cyclic.app/remove/song/" + id)
            .then((response) => {
                console.log(response)
                //since delete is success, update allvideos state  with 
                //updated list of videos.
                callYoutubeAPI()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    let goToEditPage = (editvideo) => {
        console.log("Video needs to be edited: ")
        console.log(editvideo)
        navigate("/edityoutube", {
            state: {
                currentvideo: editvideo,
            }
        })
    }

    let renderallvideos = () => {
        return allvideos.map((video) => {
            return (

                <div key={video._id} style={{
                    border: "2px solid red",
                    margin: "5px",
                    padding: "5px"
                }}>
                    <div>

                        <iframe width="320" height="240" src={"https://www.youtube.com/embed/" + video.videoid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <button onClick={() => { deleteVideo(video._id) }}>Delete</button>
                        &nbsp;&nbsp;
                        <button onClick={() => { goToEditPage(video) }}>Edit</button>
                        &nbsp;
                        Likes: {video.likes}
                        &nbsp;
                        DisLikes: {video.dislikes}
                        &nbsp;
                        Views: {video.views}
                    </div>

                </div>
            )
        })
    }


    if (allvideos.length === 0) {
        return (
            <div>
                <h1>Get the list of youtube videos from API.</h1>
                <h2>Length of response: {allvideos.length}</h2>
                <h3>Loading....</h3>

            </div>
        )
    } else {
        return (
            <div>
                <h1>Get the list of youtube videos from API.</h1>
                <h2>Length of response: {allvideos.length}</h2>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {renderallvideos()}
                </div>
            </div>
        );
    }


}

export default YoutubeAPI;