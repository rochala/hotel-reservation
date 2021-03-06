import withRoot from '../withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link2 from '@material-ui/core/Link';
import { Link, Redirect } from 'react-router-dom';
import Typography from '../components/Typography';
import AppForm from '../views/AppForm';
import { email, required } from '../form/validation';
import RFTextField from '../form/RFTextField';
import FormButton from '../form/FormButton';
import FormFeedback from '../form/FormFeedback';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FacebookLogin from 'react-facebook-login';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);

  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };

  const handleSubmit = async (values) => {
    setSent(true);
    await fetch("http://localhost:8080/login", {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify({
            username: values.email,
            password: values.password
        })
    }).then( response => {
        if (response.status === 200) {
            return response.json()
        }
        else if (response.status === 403){
            alert("Wrong username or password");
            setSent(false);
        } 
        else {
            setSent(false);
        }
    }).then( json => {
        if (json != null) {
            sessionStorage.setItem('session', json.token);
            window.location.href = '/';
        }
    }
    )
    .catch( error => {
        console.error('Error:', error);
        setSent(false);
    });
  };

  const handleFacebookSubmit = data => {
  };

  const responseFacebook = async (response) => {
    setSent(true);
    await fetch("http://localhost:8080/facebook/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({
          accessToken: response.accessToken,
        })
    }).then( response => {
        if (response.status === 200) {
            return response.json()
        } else {
            setSent(false);
        }
    }).then( json => {
        if (json != null) {
            sessionStorage.setItem('session', "Bearer "+json.accessToken);
            console.log(json.accessToken);
            if (json.registration == true) {
              window.location.href = '/registrationdetails';
            } else {
              window.location.href = '/';
            }
        }
    }
    )
    .catch( error => {
        console.error('Error:', error);
        setSent(false);
    });
  }

  return (
    <React.Fragment>
      <Container className={classes.container}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={6}>
                              <AppForm>
                                <React.Fragment>
                                  <Typography variant="h3" gutterBottom marked="center" align="center">
                                    Sign In
                                  </Typography>
                                  <Typography variant="body2" align="center">
                                    {'Not a member yet? '}
                                    <Link2 component={Link} to="/sign-up" align="center" underline="always">
                                      Sign Up here
                                    </Link2>
                                  </Typography>
                                </React.Fragment>
                                <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
                                  {({ handleSubmit, submitting }) => (
                                    <form onSubmit={handleSubmit} className={classes.form} noValidate>
                                      <Field
                                        autoComplete="email"
                                        autoFocus
                                        component={RFTextField}
                                        disabled={submitting || sent}
                                        fullWidth
                                        label="Email"
                                        margin="normal"
                                        name="email"
                                        required
                                        size="large"
                                      />
                                      <Field
                                        fullWidth
                                        size="large"
                                        component={RFTextField}
                                        disabled={submitting || sent}
                                        required
                                        name="password"
                                        autoComplete="current-password"
                                        label="Password"
                                        type="password"
                                        margin="normal"
                                      />
                                      <FormSpy subscription={{ submitError: true }}>
                                        {({ submitError }) =>
                                          submitError ? (
                                            <FormFeedback className={classes.feedback} error>
                                              {submitError}
                                            </FormFeedback>
                                          ) : null
                                        }
                                      </FormSpy>
                                      <FormButton
                                        className={classes.button}
                                        disabled={submitting || sent}
                                        size="large"
                                        color="secondary"
                                        fullWidth
                                      >
                                        {submitting || sent ? 'In progress???' : 'Sign In'}
                                      </FormButton>
                                    </form>
                                  )}
                                </Form>
                              </AppForm>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <AppForm>
                                  <Typography variant="h3" gutterBottom marked="center" align="center">
                                    Or use other methods
                                  </Typography>
                                  <br/><br/>
                                  <FacebookLogin
                                    appId="879409329281574"
                                    fields="name,email,phone"
                                    onClick={handleFacebookSubmit}
                                    callback={responseFacebook}
                                    icon={<FacebookIcon fontSize="small"/>}
                                    textButton="  Sign In With Facebook" />
                              </AppForm>
                            </Grid>
                        </Grid>
                </Container>
    </React.Fragment>
  );
}

export default withRoot(SignIn);
