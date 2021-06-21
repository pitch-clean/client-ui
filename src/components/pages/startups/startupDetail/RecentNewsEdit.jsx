// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, CardHeader, Typography, Divider, Link as MuiLink } from '@material-ui/core';
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
const updateRecentNews = (arr, idx, field, setter, e) => {
  const newArr = [...arr];
  console.log(newArr[idx].url, field)
  if (field === 'url') {
    newArr[idx].url = e.target.value;
  }
  if (field === 'source') {
    newArr[idx].source = e.target.value;
  }
  if (field === 'text') {
    newArr[idx].text = e.target.value;
  }
  setter(newArr);
};
const addRecentNews = (arr, setter) => {
  const newArr = [...arr, {}];
  setter(newArr);
}

/**
 * main
 */
const RecentNewsEdit = ({ recentNews, recentNewsSet }) => {
  // init hooks
  const classes = useStyles();
  console.log(recentNews)
  // build
  const buildList = (recentNews, recentNewsSet) => {
    const recentNewssElemArr = [];
    for (let idx = 0; idx < recentNews.length; idx += 1) {
      recentNewssElemArr.push(
        <div className={`${classes.item} flexrow w100`}>
          <TextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="Url"
            size="small"
            margin="dense"
            value={recentNews[idx].url}
            onChange={e => updateRecentNews(recentNews, idx, 'url', recentNewsSet, e)}
          />
          <TextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="text"
            size="small"
            margin="dense"
            value={recentNews[idx].text}
            onChange={e => updateRecentNews(recentNews, idx, 'text', recentNewsSet, e)}
          />
          <TextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="Source"
            size="small"
            margin="dense"
            value={recentNews[idx].source}
            onChange={e => updateRecentNews(recentNews, idx, 'source', recentNewsSet, e)}
          />
        </div>
      );
    }
    recentNewssElemArr.push(<Button fullWidth onClick={() => addRecentNews(recentNews, recentNewsSet)}>+</Button>);
    return recentNewssElemArr;
  };

  return (
    <>
      {buildList(recentNews, recentNewsSet)}
    </>
  );
};

// export
export default RecentNewsEdit;
