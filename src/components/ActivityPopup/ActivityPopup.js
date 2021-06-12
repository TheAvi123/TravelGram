import React from 'react';
import './ActivityPopup.css';

function ActivityPopup(props) {

    let cardName = "Test Name";

    return (
        <div className="popup">
            <div className="popup-back" onClick={props.closePopup}/>
            <div className="popup-front">
                <label>Popup: {props.activity}</label>
            </div>
        </div>
    );
}

export default ActivityPopup;