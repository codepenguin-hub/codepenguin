import { useEffect, useRef } from "react";

export default function DifferencesVideo({ src }) {
  const video = useRef(null);

  function restartVideo() {
    video.current.play();
  }

  useEffect(() => {
    if (video.current) {
      video.current.addEventListener("ended", restartVideo);
    }

    return () => {
      if (video.current) {
        video.current.removeEventListener("ended", restartVideo);
      }
    };
  }, [video]);

  return (
    <video
      width="60%"
      autoPlay
      muted
      ref={video}
      style={{ pointerEvents: "none" }}
      disablePictureInPicture
      className="max-[1024px]:w-[25rem] max-[650px]:w-[20rem]"
    >
      <source src={src} type="video/webm" />
    </video>
  );
}
