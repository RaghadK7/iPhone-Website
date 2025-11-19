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
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { startPlay, videoId, isLastVideo, isPlaying } = video;

  useGSAP(() => {
    gsap.to('#slider', {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 1.5,
      ease: 'power2.inOut',
    });

    gsap.to('#video', {
      ScrollTrigger: {
        trigger: '#video',
        toggleActions: 'reset none none none',
      },
      onComplete: () => {
        setVideo(prev => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      }
    });
  }, [videoId]);

  useEffect(() => {
    if (loadedData.length >= hightlightsSlides.length) {
      if (isPlaying) {
        videoRef.current[videoId]?.play();
      } else {
        videoRef.current[videoId]?.pause();
      }
    }
  }, [isPlaying, videoId, loadedData]);

  const handleLoadedMetadata = (i, e) => {
    setLoadedData(prev => [...prev, e]);
  };

  useEffect(() => {
    const span = videoSpanRef.current;
    if (!span[videoId]) return;

    const animation = gsap.to(span[videoId], {
      width: "100%",
      duration: videoRef.current[videoId]?.duration || 5,
      paused: !isPlaying,
      onUpdate() {
        const progress = this.progress() * 100;
        gsap.to(span[videoId], { width: `${progress}%`, duration: 0 });
      },
      onComplete() {
        gsap.to(span[videoId], { backgroundColor: "#afafaf" });
        gsap.to(videoDivRef.current[videoId], { width: "12px" });
      },
    });

    const animationUpdate = () => {
      if (videoRef.current[videoId]) {
        animation.progress(
          videoRef.current[videoId].currentTime / hightlightsSlides[videoId].videoDuration
        );
      }
    };

    if (isPlaying) {
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
        if (i < hightlightsSlides.length - 1) {
          setVideo(prev => ({ ...prev, videoId: i + 1, isPlaying: true }));
        } else {
          setVideo(prev => ({ ...prev, isLastVideo: true, isPlaying: false }));
        }
        break;

      case 'video-last':
        setVideo(prev => ({ ...prev, isLastVideo: true, isPlaying: false }));
        break;

      case 'video-rest':
        setVideo(prev => ({ ...prev, isLastVideo: false, videoId: 0, isPlaying: true }));
        break;

      case 'play':
        videoRef.current[videoId]?.play();
        setVideo(prev => ({ ...prev, isPlaying: true }));
        break;

      case 'pause':
        videoRef.current[videoId]?.pause();
        setVideo(prev => ({ ...prev, isPlaying: false }));
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="flex items-center overflow-hidden">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10 min-w-full">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline
                  preload="auto"
                  muted
                  className={`${
                    list.id === 2 &&'translate-x-44'
                  }
                  pointer-events-none`}
                  ref={el => (videoRef.current[i] = el)}
                  onEnded={() => handleProcess(i === hightlightsSlides.length - 1 ? "video-last" : "video-end", i)}
                  onPlay={() => setVideo(prev => ({ ...prev, isPlaying: true }))}
                  onLoadedMetadata={e => handleLoadedMetadata(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map(text => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
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
              ref={el => (videoDivRef.current[i] = el)}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer overflow-hidden"
            >
              <span
                ref={el => (videoSpanRef.current[i] = el)}
                className="absolute top-0 left-0 h-full w-0 bg-white rounded-full"
              ></span>
            </div>
          ))}

          <button className="control-btn ml-4">
            <img
              src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
              alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
              onClick={() => {
                if (isLastVideo) handleProcess("video-rest");
                else handleProcess(isPlaying ? "pause" : "play");
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
