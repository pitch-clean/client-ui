// react
import React from 'react';
// utils
import {
  CardActions,
  Button,
  Link as MuiLink,
} from '@material-ui/core';
// constants
const postTypeMapping = {
  offering: 'View Offering',
  interest: 'Submit Interest',
  rsvp: 'rsvp',
};

// main
const PostActionButton = ({ postType }) => {
  return (
    <CardActions disableSpacing>
      <Button variant="contained" size="small">
        {postTypeMapping[postType]}
      </Button>
    </CardActions>
  );
};

// export
export default PostActionButton;
