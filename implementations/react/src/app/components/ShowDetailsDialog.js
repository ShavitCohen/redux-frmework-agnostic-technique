import React from 'react';
import renderHTML from 'react-render-html';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, Slide, AppBar, Toolbar, IconButton, Typography, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
  appBar: {
    position: 'relative',
  },
  body: {
    padding: 20,
  },
  flex: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
  },
};

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
};

class ShowDetailsDialog extends React.Component {

  render() {
    const { classes, isOpen, handleDialogClose, showInfo } = this.props;
    const { name, image, officialSite: website, summary, _embedded } = showInfo || {};
    return (

      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleDialogClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={handleDialogClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              {name}
            </Typography>

          </Toolbar>
        </AppBar>
        <div className={classes.body}>
          <Grid container spacing={40}>
            <Grid item xs={12}>
              {website && <a href={website} target={'_blank'}>Go to website</a>}
            </Grid>
            <Grid item xs={6}>
              {image && <img className={classes.image} src={image.original} alt={name} />}
            </Grid>
            <Grid item xs={6}>
              {renderHTML(summary || '')}
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={16}>
                <Grid xs={12}>
                  <Typography
                    variant="h6" color="inherit" className={classes.flex}
                  >Cast</Typography>
                </Grid>
                {_embedded && _embedded.cast.map(({ person: { name: personName }, character: { name: characterName, image } }) => {
                  return !!(image && image.medium) && <Grid item>
                    <div>
                      {personName}
                      <hr />
                      {characterName}
                    </div>
                    {image && image.medium && <img src={image.medium} alt={characterName} />}
                  </Grid>;
                })}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Dialog>

    );
  }
}

export default withStyles(styles)(ShowDetailsDialog);
