// react
import React from 'react';
// utils
import { CardActions, Button } from '@material-ui/core';
// constants
const postTypeMapping = {
  offering: 'View Offering',
  interest: 'Submit Interest',
  rsvp: 'RSVP',
  basic: 'Like',
};

// main
const PostActionButton = ({ postType }) => {
  return (
    <CardActions disableSpacing>
      <Button variant="contained" size="small" disableRipple>
        {postTypeMapping[postType]}
      </Button>
    </CardActions>
  );
};

// export
export default PostActionButton;
