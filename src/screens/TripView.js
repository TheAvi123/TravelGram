import React, {useState} from 'react';
import CardList from '../components/CardList/CardList';
import ActivityPopup from '../components/ActivityPopup/ActivityPopup';
import './TripView.css';

const TripView = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const togglePopup = (selectedCard) => {
        if (showPopup) {
            setSelectedCard(null);
        } else {
            setSelectedCard(selectedCard);
        }
        setShowPopup(!showPopup);
    };

    return (
        <div className="tripView">
            <CardList openPopup={togglePopup}/>
            {showPopup && <ActivityPopup card={selectedCard} closePopup={togglePopup}/>}
        </div>
    );
};

export default TripView;
