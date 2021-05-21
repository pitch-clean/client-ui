// react
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Popover, Typography, Button } from '@material-ui/core/Popover';
import { Link as MuiLink } from '@material-ui/core';
// components
import ShowProfilesThatLikedPost from './ShowProfilesThatLikedPost';
// constants
const useStyles = makeStyles(theme => ({
  root: {
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

/**
 * main
 */
const PostDropdown = ({ postId, isProfile }) => {
  // init hooks
  const classes = useStyles();
  // state
  const [anchorElem, setAnchorElem] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  return (
      <div className={`PostDropdown ${classes.root}`}>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
          Open Popover
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>The content of the Popover.</Typography>
        </Popover>
      </div>
  );
};

// export
export default PostDropdown;
