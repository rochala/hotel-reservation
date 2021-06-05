import { withStyles, Grid, Box } from "@material-ui/core";
import SvgMap from '../components/SvgMap';
import Card from '../components/Card';
import React, { useEffect, useState } from "react";


const styles = (theme) => ({
    padding: {
      padding: theme.spacing(2),
    },
    cardView : {
        margin: 25
    },
});



const rooms = [1, 2, 3, 4];

function Reservation(props) {
    const [selectedRoom, setSelectedRoom] = useState(0);

    const makeState = (room_id) => {
        console.log(room_id);
        setSelectedRoom(room_id)
    }

    const { classes } = props;
    return (
                <Grid className ={classes.padding} container spacing={5} alignItems="center" justify="center">
                    <Grid item xs={12} md={6}>
                        <SvgMap rooms = { rooms } makeState = { makeState } />
                    </Grid>
                    <Grid className = {classes.cardView} item xs={12} md={3}>
                        <Card roomId = { selectedRoom } />
                    </Grid>
                </Grid>
    );
}

export default withStyles(styles)(Reservation);

