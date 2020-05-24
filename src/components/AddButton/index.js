import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const AddButton = ({ showForm, formVisibility }) => (
    <button onClick={showForm} className="float">
        <span>{formVisibility === false ? '+' : 'x'}</span>
    </button>
)

AddButton.propTypes = {
    showForm: PropTypes.func.isRequired,
    formVisibility: PropTypes.bool
}

export default AddButton;