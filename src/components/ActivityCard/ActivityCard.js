import React from 'react';
import './ActivityCard.css';

function ActivityCard(props) {

    return (
        <li className="activityCard" onClick={props.openPopup(props.name)}>
            <div>
                <label>{props.name}</label>
            </div>
            
            <label>Details:</label>
            
        </li>
        
    );
}

export default ActivityCard;