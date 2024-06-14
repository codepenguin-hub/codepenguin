import Image from "next/image";
import React from "react";

const config = require("../../next.config.mjs");

export default React.forwardRef((props, ref) => {
	return (
		<Image src={config.default.basePath + props.src} {...props} ref={ref} />
	);
});
