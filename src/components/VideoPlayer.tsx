import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  onProgress: (progress: number) => void;
}

export function VideoPlayer({ src, onProgress }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100;
      onProgress(progress);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [onProgress]);

  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl bg-black mb-5">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        controls
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}