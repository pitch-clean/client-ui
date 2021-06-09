// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CardHeader, Typography, Divider, Avatar, Link as MuiLink } from '@material-ui/core';
// constants
const useStyles = makeStyles({
  root: {
    color: `black`,
    marginBottom: 20,
  },
  avatar: {
    height: 150,
    width: 300,
  },
  textAvatar: {
    position: 'relative',
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
  },
  content: {
    flexFlow: `row wrap`,
    padding: `10px 20px`,
    '& > div': {
      margin: `10px 40px`,
    },
  },
});

/**
 * main
 */
const PartnersAndSponsors = () => {
  // init hooks
  const classes = useStyles();
  // state
  const partners = useSelector(s => s.view.startup.activeStartup.partners);
  const sponsors = useSelector(s => s.view.startup.activeStartup.sponsors);
  // build
  const buildList = items => {
    const itemElemArr = [];
    for (let idx = 0; idx < items.length; idx += 1) {
      const { name, homepage, image } = items[idx];
      itemElemArr.push(
        image ? (
          <Avatar className={`${classes.avatar}`} alt={name} src={image} variant="square" onClick={() => {window.location.href = homepage}} />
        ) : (
          <MuiLink component="div" href={homepage} className={`${classes.avatar} ${classes.textAvatar} flexcol`}>
            {name}
          </MuiLink>
        )
      );
    }
    return itemElemArr;
  };

  return (
    <div className={`${classes.content} flexrow`}>
      {buildList([...partners, ...sponsors])}
    </div>
  );
};

// export
export default PartnersAndSponsors;
