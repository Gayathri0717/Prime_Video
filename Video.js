import React from 'react'
import HoverVideoPlayer from 'react-hover-video-player';
import "./Video.css"

function Video(props) {


  return (
    <div >
        <div >
    <HoverVideoPlayer
        videoSrc={props.value.vid}

        pausedOverlay={
          <img
            src={props.value.image}
           
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        }
       
        
      />
      </div>
      </div> 
  )
}

export default Video