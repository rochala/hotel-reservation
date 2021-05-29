import { withStyles, Grid, Box } from "@material-ui/core";
import SvgMap from '../components/SvgMap';
import React from "react";
import Card from '../components/Card';

const styles = (theme) => ({
    padding: {
      padding: theme.spacing(2),
    },
    cardView : {
        margin: 25
    },
});
const rooms = ["room1","room2","room3","room4"];
function Reservation(props) {
    const { classes } = props;
    return (
                <Grid className ={classes.padding} container spacing={5} alignItems="center" justify="center">
                    <Grid item xs={12} md={6}>
                        <SvgMap rooms = { rooms }/>
                    </Grid>
                    <Grid className = {classes.cardView} item xs={12} md={3}>
                        <Card />
                    </Grid>
                </Grid>
    );
}

export default withStyles(styles)(Reservation);

