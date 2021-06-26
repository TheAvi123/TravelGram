import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, TextField, KeyboardTimePicker, CardMedia } from '@material-ui/core';
import './ActivityPopup.css';

function ActivityPopup(props) {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const useStyles = makeStyles({
        cardBack: {

        },
        cardFront: {
            // background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            // border: 0,
            // borderRadius: 15,
            // boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
            // color: 'white'
        },
        media: {
            height: 120,
            borderRadius: 15
        },
        text: {
            margin: 20
        }
    });
    const styles = useStyles();

    return (
        <Card className="popup">
            <div className="popup-back" onClick={props.closePopup}/>
            <div className="popup-front">
                <CardMedia className={styles.media}
                    image="https://www.123dentist.com/wp-content/uploads/2018/04/dental-emergency-travelling-825x550.jpg"
                />
                <TextField className={styles.text}
                    label="Card Name"
                    defaultValue={props.card.name} 
                    variant="outlined"
                />
                {/* <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                /> */}
                <TextField className={styles.text}
                    id="outlined-multiline-static"
                    label="Card Description"
                    multiline
                    rows={2}
                    defaultValue={props.card.description}
                    variant="outlined"
                />
            </div>
        </Card>
    );
}

export default ActivityPopup;