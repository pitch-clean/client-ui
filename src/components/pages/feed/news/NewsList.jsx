// react
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Divider, ListItem, ListItemText, Typography, Link as MuiLink } from '@material-ui/core';
// seed
import { newsItems } from '../../../../seed/testNewsItems';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  divider: {
    minHeight: `1px`,
    height: `1px`,
    minWidth: `100%`,
  },
  source: {
    fontSize: theme.typography.fontSize / 1.1,
    fontWeight: 600,
  },
  listItem: {
    padding: 0,
    paddingTop: `5px`,
    '& *': {
      lineHeight: 1.15,
    },
  },
  cardTitle: {
    display: 'inline',
    fontSize: theme.typography.fontSize * 0.85,
    cursor: 'pointer',
  },
  date: {
    fontSize: theme.typography.fontSize * 0.85,
    padding: `0`,
    paddingTop: `2px`,
  },
}));
// format fxn
const formatStringDt = dtStr => {
  const dtDate = new Date(dtStr);
  const now = new Date();
  const dtDeltaMs = now - dtDate;
  const dtDiffSec = Math.floor(dtDeltaMs / 1000);
  const dtDiffMin = Math.floor(dtDiffSec / 60);
  const dtDiffHrs = Math.floor(dtDiffMin / 60);
  const dtDiffDays = Math.floor(dtDiffHrs / 24);

  // logic to create the string
  let newStr = `ago`;
  if (dtDiffDays > 0) {
    newStr = `${dtDiffDays} days ${newStr}`;
  } else if (dtDiffHrs > 0) {
    newStr = `${dtDiffHrs} hours ${newStr}`;
  } else if (dtDiffMin > 0) {
    newStr = `${dtDiffMin} minutes ${newStr}`;
  }
  return newStr;
};

// main
const NewsList = () => {
  // init hooks
  const classes = useStyles();
  // state
  const [newsElemArr, setNewsElemArr] = useState([]);
  // effects
  useEffect(() => {
    const mockNewsElemArr = [];
    for (let idx = 0; idx < newsItems.length; idx += 1) {
      const newsItem = newsItems[idx];
      const newsElem = (
        <>
          <ListItem alignItems="flex-start" className={classes.listItem}>
            <ListItemText
              primary={
                <>
                  <Typography
                    component="span"
                    variant="subtitle2"
                    className={classes.source}
                    color="textPrimary"
                  >
                    {`${newsItem.source}: `}
                  </Typography>
                  <MuiLink
                    nowrap
                    href={newsItem.url}
                    variant="body2"
                    color="textPrimary"
                    className={`${classes.cardTitle}`}
                  >
                    {newsItem.title}
                  </MuiLink>
                </>
              }
              secondary={
                <>
                  <Typography className={classes.date}>
                    {formatStringDt(newsItem.dtPublished)}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider className={classes.divider} variant="fullWidth" component="div" />
        </>
      );
      mockNewsElemArr.push(newsElem);
    }
    setNewsElemArr(mockNewsElemArr);
  }, []);

  return <div className={`${classes.root} NewsList w100 flexcol`}>{newsElemArr}</div>;
};

// export
export default NewsList;