import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes, chart1, chart2, countryName,endDate, startDate, diffFood, diffExtra, diffBus, form,liveRates,converted, edit,erase,back, totals } = props;

  return (
    <div className={classes.root}>
      {edit}
      {erase}
      {back}
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{countryName}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{chart1}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{chart2}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{totals}</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>{startDate}{endDate}</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>{diffFood}{diffExtra}{diffBus}</Paper>
        </Grid>
    
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{form}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{liveRates}{converted}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
