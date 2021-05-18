import React from 'react';
import PropTypes from 'prop-types';


const Quote = ({ name, text, image }) => (
    <figure>
        <img src={image} alt={name} />
        <figcaption>{text}</figcaption>
    </figure>
);

Quote.PropTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes
};

export default Quote;