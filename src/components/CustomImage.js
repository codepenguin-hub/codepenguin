import Image from "next/image";
import React from "react";

export default React.forwardRef((props, ref) => {
	const isDev = process.env.NODE_ENV === "development";

	const basePath = isDev ? "" : ".";

	return <Image src={basePath + props.src} {...props} ref={ref} />;
});
