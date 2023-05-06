import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  contact: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function EventService() {
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
      <CardContent>
      <h1>hello mfs</h1>
        <Typography className={classes.title}>
          Wizcraft
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography>
              Contact Details
            </Typography>
            <Typography className={classes.contact}>
              Phone: 555-3456
            </Typography>
            <Typography className={classes.contact}>
              Email: contact@dnaentertainment.com
            </Typography>
            <Typography className={classes.contact}>
              Website: www.dnaentertainment.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} container justify="flex-end" alignItems="center">
            <Button variant="contained" color="primary" className={classes.button}>
              Add to wishlist
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default EventService;
