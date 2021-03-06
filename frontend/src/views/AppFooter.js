import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://rickrolled.com/">
        Innovative Hotels
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  }, iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  imgIcon: {
      width: 40,
      height: 40,
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  hr: {
    width: '70%',
    height: '4px',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <div>
    <hr className={classes.hr} />
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://github.com/rochala/hotel-reservation/" className={classes.icon}>
                  <img src="./github.png" alt="Github" className={classes.imgIcon} />
                </a>
                <a href="https://reddit.com/" className={classes.icon}>
                  <img src="./reddit.png" alt="reddit" className={classes.imgIcon}/>
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="">Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="">Privacy</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Creators
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                 Jędrzej Rochala
              </li>
              <li className={classes.listItem}>
                 Bartłomiej Duda
              </li>
              <li className={classes.listItem}>
                 Adam Krzemiński
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Typography>
    </div>
  );
}
