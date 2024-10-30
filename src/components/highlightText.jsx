import React from 'react';
import PropTypes from "prop-types";

const HighlightText = ({text,highlight,color}) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) => (
        <React.Fragment key={index}>
            {part.toLowerCase() === highlight.toLowerCase() ? (
                <b style={{ backgroundColor: color }}>{part}</b>
            ) : (
                part
            )}
        </React.Fragment>
    ));
};
HighlightText.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    highlight: PropTypes.string,
}
export default HighlightText;