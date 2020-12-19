import React from "react";
import renderHTML from "react-render-html";

import {
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  appBar: {
    position: "relative",
  },
  body: {
    padding: 20,
  },
  flex: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "auto",
  },
});

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
};

const ShowDetailsDialog = ({ isOpen, onDialogClose, showInfo }) => {
  const classes = useStyles();
  const { name, image, officialSite: website, summary, _embedded } =
    showInfo || {};
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onDialogClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={onDialogClose}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.body}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {website && (
              <a href={website} target={"_blank"} rel="noreferrer">
                Go to website
              </a>
            )}
          </Grid>
          <Grid item xs={6}>
            {image && (
              <img className={classes.image} src={image.original} alt={name} />
            )}
          </Grid>
          <Grid item xs={6}>
            {renderHTML(summary || "")}
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.flex}
                >
                  Cast
                </Typography>
              </Grid>
              {_embedded &&
                _embedded.cast.map(
                  ({
                    person: { name: personName },
                    character: { name: characterName, image },
                  }) => {
                    return (
                      !!(image && image.medium) && (
                        <Grid item>
                          <div>
                            {personName}
                            <hr />
                            {characterName}
                          </div>
                          {image && image.medium && (
                            <img src={image.medium} alt={characterName} />
                          )}
                        </Grid>
                      )
                    );
                  }
                )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

export default ShowDetailsDialog;
