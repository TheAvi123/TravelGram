import React, {useState, useRef} from 'react';
import ActivityCard from '../ActivityCard/ActivityCard.js';
import './CardList.css';

function CardList(props) {

    const [cards, setCards] = useState([]);

    const cardName = useRef();

    const addNewCard = (event) => {
        event.preventDefault();
        // Set variables for easy access
        let cName = cardName.current.value;
        // Error checking
        if (cName === "") {
            console.log("ERROR - Invalid Card Name:");
            console.log(cName);
            return;
        }
        // Add
        console.log("Adding Card: " + cName);
        let newCard = {
            name: cName
        };
        setCards(cards.concat(newCard));
    };

    const createCard = (card) => {
        console.log("create");
        console.log(card);
        return <ActivityCard name={card.name} openPopup={props.openPopup}/>
    };

    let cardList = cards.map(createCard);

    return (
        <div>
            <form onSubmit={(e) => {addNewCard(e)}}>
                <input type="text" placeholder="Card Name" ref={cardName}></input>
                <br/>
                <input type="text" placeholder="Card Description"></input>
                <br/>
                <button type="submit">Add Card</button>
            </form>
            <ul className="cardList">
                {cardList}
            </ul>
            
        </div>
    );
};

export default CardList;