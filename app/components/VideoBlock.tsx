"use client"

import { useRef, useState } from "react";
import Texts from "./Texts";
import Image from "next/image";

const VideoBlock = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <section className="bg-light pt-[120px] pb-[60px]">

            <div className="container">

                <div className="flex items-center justify-center flex-col gap-6">

                    <Texts title="We are Createx Construction Bureau" description="We&nbsp;are rightfully considered to&nbsp;be&nbsp;the best
                        construction company in&nbsp;the USA." />

                </div>

                <div className="relative overflow-hidden rounded h-[300px] sm:h-[500px] group">

                    {!isPlaying && (
                        <div className="absolute inset-0 z-20 bg-[#1E212C]/60 transition-opacity duration-300 ease-in-out opacity-100" />
                    )}

                    {!isPlaying && (
                        <button
                            className="border-none p-0 cursor-pointer flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 rounded-full w-20 h-20 bg-primary hover:bg-active anim"
                            aria-label="Play video" onClick={handlePlay}>

                            <Image src={"/icons/play_btn.svg"} alt="Play Btn" width={26} height={26} className="w-[26px] h-[26px]" />

                        </button>
                    )}

                    <video ref={videoRef} className="w-full h-full object-cover" src="https://live.verstaem.online/createx/about-video.mp4" muted loop controls={isPlaying} preload="metadata" onClick={handlePause} onPause={() => setIsPlaying(false)}></video>

                </div>

            </div>

        </section>
    );
};

export default VideoBlock;