import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import VerticalLinearStepper from '../components/Stepper';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    // backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
  imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
      borderRadius: 10,
    },
    imageWrapper: {
        position: 'relative',
        display: 'block',
        padding: 0,
        height: '40vh',
        [theme.breakpoints.down('sm')]: {
          width: '100% !important',
          height: 100,
        },
        '&:hover': {
          zIndex: 1,
        },
        '&:hover $imageBackdrop': {
          opacity: 0.15,
        },
        '&:hover $imageMarked': {
          opacity: 0,
        },
        '&:hover $imageTitle': {
          border: '4px solid currentColor',
        },
  },
});

function Photos(props) {
    const { classes } = props;
    const image = 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    return (

        <Container>
        <Typography variant="h4" marked="center" align="center" component="h2">
            But is it really that simple?
        </Typography>
            <section className={classes.root}>
                <Container className={classes.container}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={6}>
                                <div className={classes.item}>
                                    <VerticalLinearStepper />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className={classes.item, classes.imageWrapper}>
                                    <div className={classes.imageSrc}
                                        style={{
                                            backgroundImage: `url(${image})`
                                        }}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                </Container>
            </section>
        </Container>
    )
}

Photos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Photos);
