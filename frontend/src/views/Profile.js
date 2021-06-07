import withRoot from '../withRoot';
// --- Post bootstrap -----
import React, { useEffect, useState } from 'react';
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

function Profile(props) {
    const classes = useStyles();
    const [sent, setSent] = React.useState(false);
    const [profileDetails, setProfileDetails] = useState(null);

    const fetchData = () => {
        setSent(true);
        fetch("http://localhost:8080/profile", {
            method: 'GET',
            headers: { 'Authorization': sessionStorage.getItem('session') },
            credentials: 'same-origin',
        }).then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                setSent(false);
            }
        }).then(json => {
            if (json != null) {
                setProfileDetails(json);
            }
        }).catch(error => {
            console.error('Error:', error);
            setSent(false);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);
    /*
            {
            setSent(true);
            await fetch("http://localhost:8080/profile", {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'Authorization': sessionStorage.getItem('session'),
                },
            }).then(response => {
                if (response.status === 200) {
                    setProfileDetails(response.json());
                } else {
                    setSent(false);
                    return null;
                }
            })
                .catch(error => {
                    console.error('Error:', error);
                    setSent(false);
                });
        }, []);*/

    console.log(profileDetails);

    return (
        <React.Fragment>
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        Your Account Details
                                  </Typography>
                                  <br/>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" align="center">
                                Name:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" align="center">
                                {profileDetails && profileDetails.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" align="center">
                                Surname:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" align="center">
                                {profileDetails && profileDetails.surname}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" align="center">
                                Email:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" align="center">
                                {profileDetails && profileDetails.username}
                            </Typography>
                        </Grid>
                    </Grid>
                </React.Fragment>
            </AppForm>
        </React.Fragment>
    );
}

export default withRoot(Profile);
