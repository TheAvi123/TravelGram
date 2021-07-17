import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';

import ActivityCard from './TripCard.js';
import CreateFormButton from '../CreateForm/CreateFormButton';
import './TripSchedule.css';

export default function TripSchedule(props) {

    const [cards, setCards] = useState([]);

    const [timeline, setTimeline] = useState({
        activities: {
            'activity_1': {
                id: 'activity_1',
                title: 'Go To Beach',
                description: 'Temp Desc 1',
                time: '09:00'
            },
            'activity_2': {
                id: 'activity_2',
                title: 'Go To Mall',
                description: 'Temp Desc 2',
                time: '17:00'
            },
            'activity_3': {
                id: 'activity_3',
                title: 'Go To Sleep',
                description: 'Temp Desc 3',
                time: '22:00'
            },
            'activity_4': {
                id: 'activity_4',
                title: 'Go To Code',
                description: 'Temp Desc 4',
                time: '12:00'
            },
            'activity_5': {
                id: 'activity_5',
                title: 'Go To Class',
                description: 'Temp Desc 5',
                time: '09:00'
            },
        },
        days: [
            {
                id: 'day_1',
                description: 'first day',
                activities: []
            },
            {
                id: 'day_2',
                description: 'middle day',
                activities: []
            },
            {
                id: 'day_3',
                description: 'last day',
                activities: []
            }
        ],
    });

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

    const handleFormSubmit = (data) => {
        console.log(data);
        const { title, description, startTime } = data;
        // setCards((cards) => [{ title, description, startTime }, ...cards]);
        // this.props.handleSubmit(data);
    };

    const useStyles = makeStyles({
        tripCard: {
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            border: 0,
            borderRadius: 15,
            boxShadow: '0 3px 5px 2px rgba(13, 59, 95, .3)',
            color: 'white',
            width: '300px',
            margin: '10px',
        },
        cardListContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            margin: '10px',
            flex: 4,
        },
        wrapper: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        formButton: {
            position: 'fixed'
        },
    });

    const classes = useStyles();

    return (
        <div>
            <CreateFormButton className={classes.formButton}
                        formType='tripitem'
                        onSuccess={handleFormSubmit}
                        onError={null}
                        onClose={null}
                    />
            <Typography variant="h6" className="timeline-header">Itinerary</Typography>
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