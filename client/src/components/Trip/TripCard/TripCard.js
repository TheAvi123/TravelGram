import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import './TripCard.css';

function TripCard(props) {

    // Function for generating random colored cards
    // TODO: Maybe move this up to CardList so colors stay consistent
    const randomColor = () => {
        let color = Math.floor(Math.random()*16777215).toString(16);
        while (color.length < 6) {
            color += '0';
        }
        return '#' + color;
    };

    const useStyles = makeStyles({
        tripCard: {
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            border: 0,
            borderRadius: 15,
            boxShadow: '0 3px 5px 2px rgba(13, 59, 95, .3)',
            color: 'white'
        },
    });
    const style = useStyles();

    return (
        <li className="cardListItem" onClick={(e) => {props.openPopup(props.card)}}>
            <Card className="tripCard" className={style.tripCard}>
                <CardContent>
                    <Typography className="cardName">
                        {props.card.name}
                    </Typography>
                    {props.description == '' ? null :
                        <Typography className="cardDescription">
                            {props.card.description}
                        </Typography>
                    }
                </CardContent>
            </Card>
        </li>
        
    );
}

export default TripCard;