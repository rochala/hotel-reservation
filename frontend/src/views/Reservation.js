import { withStyles, Container, Grid, Box, TextField } from "@material-ui/core";
import SvgMap from '../components/SvgMap';
import Card from '../components/Card';
import React, { useEffect, useState, } from "react";


const styles = (theme) => ({
    padding: {
      padding: theme.spacing(2),
    },
    cardView : {
        margin: 25
    },

});

function Reservation(props) {
    const [selectedRoom, setSelectedRoom] = useState(2);
    const [rooms, setRooms] = useState([]);
    const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10));
    const [endDate, setEndDate] = useState(new Date((new Date().getTime() + 7 * 24 * 60 * 60 * 1000)).toISOString().substring(0, 10));


    const makeState = (room_id) => {
        console.log(room_id);
        console.log(room_id.slice(4))
        setSelectedRoom(room_id.slice(4))
    }

    useEffect(() => {
        loadRooms(startDate, endDate);
    }, []);

    const loadRooms = async (startDate, endDate) => {
      const response = await fetch(`http://localhost:8080/rooms/1/${startDate}/${endDate}`, {
          method: 'GET',
          credentials: 'same-origin'
      })
      console.log(startDate)
      const data = await response.json()
      setRooms(data);
    };


    const handleChangeStartDate = (event) => {
        setStartDate(event.target.value);
        loadRooms(event.target.value, endDate);
    }

    const handleChangeEndDate = (event) => {
        setEndDate(event.target.value);
        loadRooms(startDate, event.target.value);
    }


    const { classes } = props;
    return (
        <Box>
            <Box display="flex" spacing={5} alignItems="center" justifyContent="center">
                <TextField
                    color='secondary'
                    id="startDate"
                    label="Start date"
                    type="date"
                    value={startDate}
                    onChange={handleChangeStartDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    color='secondary'
                    id="endDate"
                    label="End date"
                    type="date"
                    defaultValue={endDate}
                    value={endDate}
                    onChange={handleChangeEndDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
        </Box>
                <Grid className ={classes.padding} container spacing={5} alignItems="center" justify="center">
        <Grid item xs={12} md={6}>
                        <SvgMap rooms = { rooms } makeState = { makeState } />
                    </Grid>
                    <Grid className = {classes.cardView} item xs={12} md={3}>
                        { ( rooms.filter(r => r.number == selectedRoom ).length > 0) ?
                        <Card room = { rooms.filter(r => r.number == selectedRoom)[0]} />
                            : <div/>
                        }
                    </Grid>
                </Grid>
        </Box>
    );
}

export default withStyles(styles)(Reservation);

