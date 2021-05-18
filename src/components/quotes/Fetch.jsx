import React from 'react';
import PropTypes from 'prop-types';

const Fetch = ({ onClick }) => (
    <>
    <h3>Get'chr quotes here!</h3>
    <button onClick={onClick}>Fetch A Quote</button>
    </>
);

Fetch.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Fetch;