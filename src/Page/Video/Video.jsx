import React from "react";
import "./Video.css";
const Video = () => {
  return (
    <>
      <div className="video-inner">
        <div className="left-col">
          <div className="play-video">
            <iframe
              width="996"
              height="560"
              src="https://www.youtube.com/embed/5f7gWJmmwgc"
              title="[1H] Tiếng chó Lo-Fi sủa cực chill và ấm | Lofi Records, Doge Chill"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="play-video__bottom">
              <h2 className="video__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                reprehenderit magni odio laborum atque quos. Iusto.
              </h2>
              <div className="video-acts">
                <img
                  src="https://yt3.ggpht.com/kvu5DDSWvgTiM3nbqJF97nbVRaDCWUfdfjETU5Z5SzTbZWn44gOiRtF_auQTr7mPcIIkQTCT=s88-c-k-c0x00ffffff-no-nd-rj"
                  alt=""
                  className="channel-avatar"
                />
                
              </div>
            </div>
          </div>
        </div>
        <div className="right-col"></div>
      </div>
    </>
  );
};

export default Video;
