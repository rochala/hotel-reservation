import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Modal from '@material-ui/core/Modal';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkout from './Checkout';
import Popover from '@material-ui/core/Popover';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    rightAlign: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    typography: {
        padding: theme.spacing(2),
    }
}));

export default function ImgMediaCard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const deleteReservation = async (values) => {
        await fetch("http://localhost:8080/reservation", {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': sessionStorage.getItem('session')
            },
            body: JSON.stringify({
                id:props.reservation.id
            })
        }).then(response => {
            if (response.status === 200) {
                window.location.href = '/profile';
            } else {
            }
        })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="HotelRoom"
                    height="140"
                    image="./hotelRoom1.jpg"
                    title="Hotel Room"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Start date: {new Date(props.reservation.reservationStart).getDate()+"-0"+new Date(props.reservation.reservationStart).getMonth()+"-"+new Date(props.reservation.reservationStart).getFullYear()}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        End date: {new Date(props.reservation.reservationEnd).getDate()+"-0"+new Date(props.reservation.reservationEnd).getMonth()+"-"+new Date(props.reservation.reservationEnd).getFullYear()}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Price: {props.reservation.price}.00 $
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Room number: {props.reservation.room.number}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Floor: {props.reservation.room.floor}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Beds: {props.reservation.room.bedsNumber}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Kitchen: {props.reservation.room.kitchen ? "yes" : "no"}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.rightAlign}>
                <Button size="small" color="primary" onClick={deleteReservation}>
                    Cancel Reservation
                </Button>
            </CardActions>
        </Card>
    );
}
