"use client";
import React, { useState } from "react";
import { Container, Paper } from "@mui/material";

const videoList = [
  { id: 1, src: "/videos/01.mp4", title: "Video 1" },
  { id: 2, src: "/videos/02.mp4", title: "Video 2" },
  { id: 3, src: "/videos/03.mp4", title: "Video 3" },
  { id: 4, src: "/videos/04.mp4", title: "Video 4" },
];

const VideoCarousel: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoList[0]);

  const handleVideoClick = (video: {
    id: number;
    src: string;
    title: string;
  }) => {
    setSelectedVideo(video);
  };

  return (
    <Container>
      <div className="flex max-w-[720px] mx-auto">
        <div className="max-w-[590px]">
          <video width="100%" controls>
            <source src={selectedVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col ml-[10px]">
          {videoList.map((video, index) => (
            <div
              key={video.id}
              style={{
                cursor: "pointer",
                marginBottom: index === videoList.length - 1 ? 0 : "13px",
              }}
            >
              <Paper
                elevation={0}
                className="md:w-[135px] h-auto xs:w-[59.5px]"
                onClick={() => handleVideoClick(video)}
              >
                <img src="/images/play.png" alt="" className="w-full" />
              </Paper>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default VideoCarousel;
