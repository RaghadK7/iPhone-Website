import React, { useEffect, useState, useRef } from 'react';
import { hightlightsSlides } from '../constans/index';
import { replayImg, playImg, pauseImg } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useGSAP(() => {
    gsap.to('#slider', {
        transform: `translateX(${-100 * videoId})%}`,
        duration:2, 
    }
    )
    gsap.to('#video', {
      ScrollTrigger: {
        trigger: '#video',
        toggleActions: 'reset none none none',
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      }
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause();
      } else {
        startPlay && videoRef.current[videoId]?.play();
      }
    }
  }, [startPlay, videoId, loadedData]);

  const handleLoadedMetadata = (i, e) =>
    setLoadedData((prev) => [...prev, e]);

  useEffect(() => {
    let span = videoSpanRef.current;
    let animation;

    if (span[videoId]) {
      animation = gsap.to(span[videoId], {
        width: "100%",
        duration: videoRef.current[videoId]?.duration || 5,
        paused: !isPlaying,

        onUpdate() {
          const progress = Math.ceil(this.progress() * 100);

          gsap.to(videoDivRef.current[videoId], {
            width:
              window.innerWidth < 760
                ? "10vw"
                : window.innerWidth < 1280
                ? "10vw"
                : "4vw",
            duration: 0.2,
          });

          gsap.to(span[videoId], {
            width: `${progress}%`,
            backgroundColor: "white",
            duration: 0,
          });
        },

        onComplete() {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId === 0) animation.restart();
    }

    const animationUpdate = () => {
      if (videoRef.current[videoId]) {
        animation && animation.progress(
          videoRef.current[videoId].currentTime /
          hightlightsSlides[videoId].videoDuration
        );
      }
    };

    if (!isPlaying) {
      gsap.ticker.add(animationUpdate);
    } else {
      gsap.ticker.remove(animationUpdate);
    }

    return () => {
      gsap.ticker.remove(animationUpdate);
    };
  }, [isPlaying, videoId]);

  const handleProcess = (type, i) => {
    switch (type) {
      case 'video-end':
        setVideo((prev) => ({ ...prev, isEnd: true, videoId: i + 1 }));
        break;

      case 'video-last':
        setVideo((prev) => ({ ...prev, isLastVideo: true }));
        break;

      case 'video-rest':
        setVideo((prev) => ({ ...prev, isLastVideo: false, videoId: 0 }));
        break;

      case 'play':
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;

      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() => {
                    if (i !== hightlightsSlides.length - 1) {
                      handleProcess("video-end", i);
                    } else {
                      handleProcess("video-last");
                    }
                  }}
                  onPlay={() =>
                    setVideo((prev) => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) =>
                    handleLoadedMetadata(i, e)
                  }
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p
                    key={text}
                    className="md:text-2xl text-xl font-medium"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <div
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer overflow-hidden"
            >
              <span
                ref={(el) => (videoSpanRef.current[i] = el)}
                className="absolute top-0 left-0 h-full w-0 bg-white rounded-full"
              ></span>
            </div>
          ))}

          <button className="control-btn">
            <img
              src={
                isLastVideo
                  ? replayImg
                  : !isPlaying
                  ? playImg
                  : pauseImg
              }
              alt={
                isLastVideo
                  ? "replay"
                  : !isPlaying
                  ? "play"
                  : "pause"
              }
              onClick={() =>
                isLastVideo
                  ? handleProcess("video-rest")
                  : handleProcess("play")
              }
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
