import { useEffect, useRef } from "react";

const isProd = process.env.NODE_ENV === "production";

const basePath = "/codepenguin";

export default function DifferencesVideo({ src, type }) {
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
			playsInline
			className="max-[1024px]:w-[25rem] max-[650px]:w-[20rem]"
		>
			<source src={basePath + src} type={type} />
		</video>
	);
}
