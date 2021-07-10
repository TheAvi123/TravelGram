import React, { useState, useRef } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';

import DraggableCard from './DraggableCard';
import './DraggableSchedule.css';

const DraggableSchedule = ({ cards, onDragDrop }) => {
  function handleDragDrop(result) {
    console.log('handle drag drop');
    const cardList = Array.from(cards);
    const newTime = cardList[result.destination.index].time;
    cardList[result.destination.index].time =
      cardList[result.source.index].time;
    const [reorderedItem] = cardList.splice(result.source.index, 1);
    console.log(reorderedItem);
    reorderedItem.time = newTime;
    cardList.splice(result.destination.index, 0, reorderedItem);
    onDragDrop(cardList);
  }

  return (
    <div>
      <Typography variant='h6' className='timeline-header'>
        Trip Itinerary
      </Typography>
      <DragDropContext onDragEnd={handleDragDrop}>
        <Droppable droppableId='timeline'>
          {(provided) => (
            <Timeline
              className='timeline'
              ref={provided.innerRef}
              {...provided.droppableProps}>
              {cards.map((card, index) => {
                return (
                  <DraggableCard
                    index={index}
                    title={card.title}
                    description={card.description}
                    startTime={card.startTime}
                  />
                );
              })}
              {provided.placeholder}
            </Timeline>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DraggableSchedule;
