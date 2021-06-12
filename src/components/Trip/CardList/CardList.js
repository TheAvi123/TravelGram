import React, { useState, useRef } from 'react';
import ActivityCard from '../TripCard/TripCard.js';
import './CardList.css';

function CardList(props) {

    const [cards, setCards] = useState([]);

    const cardName = useRef();
    const cardDescription = useRef();

    const addNewCard = (event) => {
        event.preventDefault();
        // Set variables for easy access
        let cName = cardName.current.value;
        let cDescription = cardDescription.current.value;
        // Error checking
        if (cName === "") {
            console.log("ERROR - Invalid Card Name:" + cName.toString());
            return;
        }
        // Add card to state
        let newCard = {
            name: cName,
            description: cDescription
        };
        setCards(cards.concat(newCard));
    };

    const createCard = (card) => {
        return <ActivityCard card={card} openPopup={props.openPopup}/>
    };

    let cardList = cards.map(createCard);

    return (
        <div>
            {/* Temporary Form */}
            <form onSubmit={(e) => {addNewCard(e)}}>
                <label>Temporary Add Card Form</label>
                <br/>
                <input type="text" placeholder="Card Name" ref={cardName}></input>
                <br/>
                <input type="text" placeholder="Card Description" ref={cardDescription}></input>
                <br/>
                <button type="submit">Add Card</button>
            </form>
            {/* Temporary Form */}
            <ul className="cardList">
                {cardList}
            </ul>
        </div>
    );
};

export default CardList;