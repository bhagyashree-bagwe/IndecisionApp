import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
<Modal
isOpen={!!props.selectedOption}
contentLabel = "Selected Option"
onRequestClose = {props.clearSelection}
closeTimeoutMS = {200}
className="modal">
    <h3 className="modal__title">Selected Option </h3>
    <p className="modal__body">{props.selectedOption}</p>
    <button className="button" onClick={props.clearSelection}>Okay</button>
</Modal>
);

export default OptionModal;