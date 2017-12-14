import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

function Buttons(props) {
  const { classes } = props;
  return (
    <div>
      <Button raised color="accent"  className={classes.button}>
        
      </Button>
    </div>
  );
}
Buttons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Buttons);
