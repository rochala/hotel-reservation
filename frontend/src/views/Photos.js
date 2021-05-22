import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import VerticalLinearStepper from '../components/Stepper';
import PhotoCarousel from '../components/PhotoCarousel';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
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
});

function Photos(props) {
    const { classes } = props;

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
                                <div className={classes.item}>
                                    <PhotoCarousel />
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
