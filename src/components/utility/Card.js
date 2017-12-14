import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = {
  card: {
    flexGrow: 1,
    marginTop: 30
  },
  media: {
    height: 200
  }
};

function SimpleMediaCard(props) {
  const { classes, image, name, url } = props;
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={ image }
          title={ name }
        />
        <CardContent>
          <Typography type="headline" component="h2">
            { name }
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={ url } dense color="primary">
            See your stats
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
