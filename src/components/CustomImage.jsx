// src/components/CustomImage.jsx
import React from "react";

const CustomImage = ({ src, alt, width, height, className, ...rest }) => {
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            width={width}
            height={height}
            className={`object-cover ${className || ""}`}
            style={{
                aspectRatio: width && height ? `${width} / ${height}` : "16 / 9",
            }}
            {...rest}
        />
    );
};

export default CustomImage;
