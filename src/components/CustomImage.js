import Image from "next/image";
import React from "react";

const isDev = process.env.NODE_ENV === "development";

const basePath = isDev ? "" : ".";

export default React.forwardRef((props, ref) => {
	return <Image src={basePath + props.src} {...props} ref={ref} />;
});
