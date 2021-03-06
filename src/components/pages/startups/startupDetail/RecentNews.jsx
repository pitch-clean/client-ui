// react
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link as MuiLink } from '@material-ui/core';
// components
import RecentNewsEdit from './RecentNewsEdit';
// constants
const useStyles = makeStyles({
  root: {
    color: `black`,
    marginBottom: 20,
  },
  item: {
    padding: `10px 30px`,
    justifySelf: 'start',
    alignSelf: 'start',
    justifyContent: 'start',
    alignItems: 'start',
    '& > a::hover': {
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: 'black',
      textDecorationThickness: 'auto',
    },
  },
  text: {
    alignSelf: 'start',
  },
  bold: {
    fontWeight: 500,
  }
})

/**
 * main
 */
const RecentNews = ({ isEditing }) => {
  // init hooks
  const classes = useStyles();
  // state
  const recentNews_ = useSelector(s => s.view.startup.activeStartup.content.recentNews);
  const [recentNews, recentNewsSet] = useState(recentNews_);
  // build
  const buildList = items => {
    const recentNewssElemArr = [];
    for (let idx = 0; idx < items.length; idx += 1) {
      const { text, dtAdded, source, url } = items[idx];
      recentNewssElemArr.push(
        <div className={`${classes.item} flexrow w100`}>
          <MuiLink component={Link} onClick={() => { window.location.href = url }}>
            <Typography
              className={`${classes.text} ${classes.bold}`}
              variant="caption2"
              color="textPrimary"
            >
              {`${source} (${(new Date(dtAdded)).toDateString()}) - `}
            </Typography>
            <Typography
              className={classes.text}
              variant="caption2"
              color="textPrimary"
            >
              {text}
            </Typography>
          </MuiLink>
        </div>
      );
    }
    return recentNewssElemArr;
  };

  return !isEditing ? (
    <>
      {buildList(recentNews)}
    </>
  ) : <RecentNewsEdit recentNews={recentNews} recentNewsSet={recentNewsSet} />;
};

// export
export default RecentNews;
