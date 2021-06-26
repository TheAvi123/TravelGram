import React, { useState, useRef } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';

import ActivityCard from './TripCard.js';
import './TripSchedule.css';

export default function TripSchedule(props) {

    const [cards, setCards] = useState([]);

    const cardName = useRef();
    const cardDescription = useRef();
    const cardTime = useRef();

    const addNewCard = (event) => {
        event.preventDefault();
        // Set variables for easy access
        let cName = cardName.current.value;
        let cDescription = cardDescription.current.value;
        let cTime = cardTime.current.value;
        // Error checking
        if (cName === "") {
            console.log("ERROR - Invalid Card Name:" + cName.toString());
            return;
        }
        if (cTime === "" || cTime === undefined) {
            console.log("ERROR - Invalid Card Time:" + cTime.toString());
            return;
        }
        // Add card to state
        let newCard = {
            name: cName,
            description: cDescription,
            time: cTime
        };
        setCards(cards.concat(newCard));
    };

    function handleDragDrop(result) {
        const cardList = Array.from(cards);
        const newTime = cardList[result.destination.index].time;
        cardList[result.destination.index].time = cardList[result.source.index].time;
        const [reorderedItem] = cardList.splice(result.source.index, 1);
        console.log(reorderedItem);
        reorderedItem.time = newTime;
        cardList.splice(result.destination.index, 0, reorderedItem);
        setCards(cardList);
    }

    // const createCard = (card) => {
    //     return <ActivityCard card={card} openPopup={props.openPopup} />
    // };

    // let cardList = cards.map(createCard);

    return (
        <div>
            {/* Temporary Form */}
            <form onSubmit={(e) => { addNewCard(e) }}>
                <label>Temporary Add Card Form</label>
                <br />
                <input type="text" placeholder="Card Name" ref={cardName}></input>
                <br />
                <input type="text" placeholder="Card Description" ref={cardDescription}></input>
                <br />
                <input type="time" placeholder="Time" ref={cardTime}></input>
                <br />
                <button type="submit">Add Card</button>
            </form>
            {/* Temporary Form */}
            <Typography variant="h6" className="timeline-header">Trip Schedule</Typography>
            <DragDropContext onDragEnd={handleDragDrop}>
                <Droppable droppableId="timeline">
                    {(provided) => (
                        <Timeline className="timeline"
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}>
                            {cards.map((card, index) => {
                                return <ActivityCard card={card} index={index} openPopup={props.openPopup} />
                            })}
                            {provided.placeholder}
                        </Timeline>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};