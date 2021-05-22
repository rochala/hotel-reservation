import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
// import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import {Link} from 'react-router-dom';

const backgroundImage =
    'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop:theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Experience the most convienient hotel finder
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Find your dream room with our super intuitive
        selector and finally get some rest you deserve
      </Typography>
      <Button
        component={ Link }
        to="/sign-up"
        // to="/sign-up"
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover our services
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
