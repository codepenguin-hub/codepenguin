import Image from "next/image";
import React from "react";

export default React.forwardRef((props, ref) => {
	const isDev = process.env.NODE_ENV == "development";

	const path = isDev ? props.path?.substring(1) : props.path;

	return <Image src={path} {...props} ref={ref} />;
});
