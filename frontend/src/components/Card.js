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

const useStyles = makeStyles((theme)=>({
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={handleClick}
      >
        <CardMedia
          component="img"
          alt="HotelRoom"
          height="140"
          image="./hotelRoom1.jpg"
          title="Hotel Room"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Room Number: {props.room.number}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Floor: {props.room.floor}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Beds: {props.room.bedsNumber}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Kitchen: {props.room.kitchen ? "yes" : "no"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {props.room.basePrice}.00 $
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.rightAlign}>
        <Button size="small" color="primary" onClick={handleClick}>
          Show description
        </Button>
        <Button disabled={sessionStorage.getItem('session') == null} size="small" color="primary" onClick={handleOpen}>
          Reserve
        </Button>
      </CardActions>
      <Popover
        id={id}
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: { width: '20%' },
        }}
      >
        <Typography className={classes.typography}>{props.room.description}</Typography>
      </Popover>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Checkout
          price={props.room.basePrice}
          number={props.room.number}
          start={props.start}
          end={props.end}
          id={props.id}
        />
      </Modal>
    </Card>
  );
}
