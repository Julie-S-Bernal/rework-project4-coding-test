import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

const BackButton = ({ history, classes }) => {
  return(
    <Button raised onClick={ history.goBack } className={classes.button}>
      Back
    </Button>
  );
};

export default withRouter(withStyles(styles)(BackButton));
