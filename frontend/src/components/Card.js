import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  rightAlign: {
      display: 'flex',
      justifyContent: 'flex-end',
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

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
            Room
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Beds:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            BasePrice:
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.rightAlign}>
        <Button size="small" color="primary">
          Reserve
        </Button>
      </CardActions>
    </Card>
  );
}