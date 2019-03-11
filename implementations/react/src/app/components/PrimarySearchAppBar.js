import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../logo.svg';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
  root: {
    width: '100%',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 'auto !important',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
    paddingLeft: 10,
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: 0,
    height: 35,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

class PrimarySearchAppBar extends React.Component {

  render() {
    const {classes, onUserTyping} = this.props;

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                Redux Middleware Example
              </Typography>
              <div className={classes.search}>
                <InputBase
                    placeholder="Search…"
                    classes={{root: classes.inputRoot, input: classes.inputInput}}
                    onChange={(e) => onUserTyping({query: e.currentTarget.value})}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon/>
                      </InputAdornment>
                    }
                />
              </div>
              <img src={logo} height={40} alt='React'/>
            </Toolbar>
          </AppBar>
        </div>
    );
  }
}

export default withStyles(styles)(PrimarySearchAppBar);
