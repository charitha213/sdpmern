import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
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

function IndCateg() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography >
          Catering
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography>
              
            </Typography>
            <Typography >
              Phone: 7981929858
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} container justify="flex-end" alignItems="center">
            <Button variant="contained" color="primary" >
              Add to wishlist
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default IndCateg;
