import React, { useState } from 'react';
import CardList from '../components/Trip/CardList/CardList';
import ActivityPopup from '../components/Trip/ActivityPopup/ActivityPopup';
import './TripScreen.css';

const TripScreen = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const togglePopup = (openedCard) => {
        if (showPopup) {
            setSelectedCard(null);
        } else {
            setSelectedCard(openedCard);
        }
        setShowPopup(!showPopup);
    };

    return (
        <div className="tripScreen">
            <CardList openPopup={togglePopup}/>
            {showPopup && <ActivityPopup card={selectedCard} closePopup={togglePopup}/>}
        </div>
    );
};

export default TripScreen;
