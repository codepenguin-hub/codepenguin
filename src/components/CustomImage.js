import Image from "next/image";
import React from "react";

const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? "/codepenguin" + "./" : "";

export default React.forwardRef((props, ref) => {
	return <Image src={basePath + props.src} {...props} ref={ref} />;
});
