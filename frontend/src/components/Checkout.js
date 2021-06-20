import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Personal data', 'Payment details', 'Confirm reservation'];


export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [sent, setSent] = React.useState(false);

  const [userData, setUser] = React.useState({name: "", surname: "", address1: "", address2: "", city: "", zipCode: "", country: "", phone: ""});


  const handleSubmit = async () => {
    setSent(true);
    await fetch("http://localhost:8080/reservation", {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': sessionStorage.getItem('session')
      },
      body: JSON.stringify({
        price: props.price,
        reservationStart: props.start,
        reservationEnd: props.end,
        room: {
            id: props.id
        }
      })
    }).then(response => {
      if (response.status === 201) {
        window.location.href = '/reservations';
      } else {
        setSent(false);
      }
    })
      .catch(error => {
        console.error('Error:', error);
        setSent(false);
      });
  };


    const handleSetUserData = (key) =>
            (event) =>
            setUser(oldState => ({
                ...oldState,
                [key]: event.target.value
            })
        )


    const fetchData = () => {
        fetch("http://localhost:8080/profile", {
            method: 'GET',
            headers: { 'Authorization': sessionStorage.getItem('session') },
            credentials: 'same-origin',
        }).then(response => {
            if (response.status === 200) {
                return response.json()
            } else {

            }
        }).then(json => {
            if (json != null) {
                setUser(json)
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    }


    useEffect(() => {
        if (sessionStorage.getItem('session')) {
            fetchData();
        }
    }, []);
    function getStepContent(step) {
      switch (step) {
        case 0:
          return <AddressForm handler={handleSetUserData} user={userData} />;
        case 1:
          return <PaymentForm />;
        case 2:
          return <Review
              fullName={userData.name + " " + userData.surname}
              address1={userData.address1}
              address2={userData.address2}
              price={props.price}
                number={props.number}
                  start={props.start}
                  end={props.end}
                  />;
        default:
          throw new Error('Unknown step');
      }
    }

  const handleNext = () => {
      if (activeStep == 2) handleSubmit();
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReservation = () => {
    alert("Reservation!");
  }

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your reservation.
                </Typography>
                <Typography variant="subtitle1">
                  We have emailed your order confirmation, and will
                  send you an update with your further reservation status. 
                  You can see your reservation in your profile tab.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
<<<<<<< HEAD
                    onClick={activeStep === steps.length - 1 ? handleReservation : handleNext}
=======
                    disabled={sent}
                    onClick={handleNext}
>>>>>>> 2a394ce874c7438125c4743360653f25a34ca2e3
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
