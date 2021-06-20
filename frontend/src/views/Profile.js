import withRoot from '../withRoot';
// --- Post bootstrap -----
import React, { useEffect, useState } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link2 from '@material-ui/core/Link';
import { Link, Redirect } from 'react-router-dom';
import Typography from '../components/Typography';
import AppForm from '../views/AppForm';
import { email, required, phone } from '../form/validation';
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

function Profile(props) {
    const classes = useStyles();
    const [sent, setSent] = React.useState(false);
    const [profileDetails, setProfileDetails] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const validate = (values) => {
        const errors = required(['firstName', 'lastName', 'password', 'address1', 'zip', 'city', 'country', 'phone'], values);

        if (!errors.phone) {
            const phoneError = phone(values.phone, values);
            if (phoneError) {
                errors.phone = phone(values.phone, values);
            }
        }

        return errors;
    };

    const handleSubmit = async (values) => {
        setSent(true);
        await fetch("http://localhost:8080/profile", {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': sessionStorage.getItem('session')
            },
            body: JSON.stringify({
                name: values.firstName,
                surname: values.lastName,
                address1: values.address1,
                address2: values.address2,
                zipCode: values.zip,
                city: values.city,
                country: values.country,
                phone: values.phone,
            })
        }).then(response => {
            if (response.status === 200) {
                window.location.href = '/profile';
            } else {
                setSent(false);
            }
        })
            .catch(error => {
                console.error('Error:', error);
                setSent(false);
            });
    };

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
                setProfileDetails(json);
                setLoading(false);
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const isLoggedIn = () => {
        return sessionStorage.getItem('session') ? true : false
    }

    if (isLoading) {
        return (<React.Fragment>
            <AppForm>
                <Typography variant="h3" gutterBottom marked="center" align="center">
                    Loading...
                </Typography>
            </AppForm>
        </React.Fragment>);
    }

    return (
        isLoggedIn() ?
            <React.Fragment>
                <AppForm>
                    <React.Fragment>
                        <Typography variant="h3" gutterBottom marked="center" align="center">
                            Your account details
                        </Typography>
                    </React.Fragment>
                    <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
                        {({ handleSubmit, submitting }) => (
                            <form onSubmit={handleSubmit} className={classes.form} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            autoFocus
                                            component={RFTextField}
                                            autoComplete="fname"
                                            fullWidth
                                            label="First name"
                                            name="firstName"
                                            required
                                            defaultValue={profileDetails && profileDetails.name}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={RFTextField}
                                            autoComplete="lname"
                                            fullWidth
                                            label="Last name"
                                            name="lastName"
                                            required
                                            defaultValue={profileDetails && profileDetails.surname}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            component={RFTextField}
                                            required
                                            id="address1"
                                            name="address1"
                                            label="Address line 1"
                                            fullWidth
                                            autoComplete="shipping address-line1"
                                            defaultValue={profileDetails && profileDetails.address1}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            component={RFTextField}
                                            id="address2"
                                            name="address2"
                                            label="Address line 2"
                                            fullWidth
                                            autoComplete="shipping address-line2"
                                            defaultValue={profileDetails && profileDetails.address2}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={RFTextField}
                                            required
                                            id="city"
                                            name="city"
                                            label="City"
                                            fullWidth
                                            autoComplete="shipping address-level2"
                                            defaultValue={profileDetails && profileDetails.city}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={RFTextField}
                                            required
                                            id="zip"
                                            name="zip"
                                            label="Zip / Postal code"
                                            fullWidth
                                            autoComplete="shipping postal-code"
                                            defaultValue={profileDetails && profileDetails.zipCode}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={RFTextField}
                                            required
                                            id="country"
                                            name="country"
                                            label="Country"
                                            fullWidth
                                            autoComplete="shipping country"
                                            defaultValue={profileDetails && profileDetails.country}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={RFTextField}
                                            required
                                            id="phone"
                                            name="phone"
                                            label="Phone number"
                                            fullWidth
                                            autoComplete="phone"
                                            defaultValue={profileDetails && profileDetails.phone}
                                        />
                                    </Grid>
                                </Grid>
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
                                    color="secondary"
                                    fullWidth
                                >
                                    {submitting || sent ? 'In progress…' : 'Save changes'}
                                </FormButton>
                            </form>
                        )}
                    </Form>
                </AppForm>
            </React.Fragment>
            :
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    );
}

export default withRoot(Profile);
