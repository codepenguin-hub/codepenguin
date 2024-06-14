import Image from "next/image";
import React from "react";

const config = require("../../next.config.mjs");

export default (props) => {
	return <Image src={config.basePath + props.src} {...props} />;
};
