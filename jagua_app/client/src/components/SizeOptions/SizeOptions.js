import React from "react";
import "./SizeOptions.css";

const SizeOptions = ({ size, handleSizeClick, isSelected }) => {
    const getSize = () => {
        handleSizeClick(size);
    };

    return (
        <div className="sizeType">
        <span
            className={`sizeType-name ${isSelected ? "selected" : ""}`}
            onClick={getSize}
        >
            {size.name}
        </span>
        <label>{size.specific_size}</label>
        </div>
    );
};

export default SizeOptions;
