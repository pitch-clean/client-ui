// react
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Button, Avatar, TextField } from '@material-ui/core';
// constants
const useStyles = makeStyles({
  root: {},
  avatarContainer: {
    alignSelf: 'center',
  },
  avatar: {
    margin: `5px 1.5rem`,
    height: `10rem`,
    width: `10rem`,
  },
  card: {
    justifyContent: 'space-between',
    padding: '40px 20px',
  },
  cardContent: {
    alignItems: 'start',
    justifyContent: 'start',
  },
});
const updateAdvisorsInvestors = (arr, idx, field, advisorSet, e) => {
  let newArr = [...arr];
  console.log(idx, arr[idx], e.target.value)
  if (field === 'name') {
    newArr[idx].name = e.target.value;
  } else if (field === 'title') {
    newArr[idx].title = e.target.value;
  } else if (field === 'text') {
    newArr[idx].text = e.target.value;
  } else if (field === 'linkedin') {
    newArr[idx].linkedin = e.target.value;
  }
  advisorSet(newArr);
};
const addAdvisor = (arr, advisorSet) => {
  const newAdvisor = [...arr, ''];
  advisorSet(newAdvisor);
}

/**
 * main
 */
const AdvisorsAndInvestorsEdit = ({ advisors, advisorsSet, investors, investorsSet }) => {
  // init hooks
  const classes = useStyles();
  // build
  const buildCard = (arr, idx, setter) => {
    const {
      image,
    } = arr[idx];

    return (
      <>
        <div className={`card ${classes.card} w100 flexrow`}>
          <div className={`${classes.avatarContainer} h100`}>
            <Avatar className={`${classes.avatar}`} alt="Entity" src={image} />
          </div>
          <div className={`${classes.cardContent} h100 flexcol f1`}>
            <TextField
              className={`${classes.input} w100 f1`}
              variant="outlined"
              placeholder="advisor-investor"
              size="small"
              margin="dense"
              value={arr[idx].name}
              onChange={e => updateAdvisorsInvestors(arr, idx, 'name', setter, e)}
            />
            <TextField
              className={`${classes.input} w100 f1`}
              variant="outlined"
              placeholder="advisor-investor"
              size="small"
              margin="dense"
              value={arr[idx].title}
              onChange={e => updateAdvisorsInvestors(arr, idx, 'title', setter, e)}
            />
            <TextField
              className={`${classes.input} w100 f1`}
              variant="outlined"
              placeholder="advisor-investor"
              size="small"
              margin="dense"
              value={arr[idx].text}
              onChange={e => updateAdvisorsInvestors(arr, idx, 'text', setter, e)}
            />
            <TextField
              className={`${classes.input} w100 f1`}
              variant="outlined"
              placeholder="Linkedin"
              size="small"
              margin="dense"
              value={arr[idx].linkedin}
              onChange={e => updateAdvisorsInvestors(arr, idx, 'linkedin', setter, e)}
            />
          </div>
        </div>
        <Divider className="w100" variant="fullWidth"/>
      </>
    )
  };
  const buildList = (advisors, advisorsSet, investors, investorsSet) => {
    const elemArr = [];
    for (let idx = 0; idx < advisors.length; idx += 1) {
      elemArr.push(buildCard(advisors, idx, advisorsSet));
    }
    for (let idx = 0; idx < investors.length; idx += 1) {
      elemArr.push(buildCard(investors, idx, investorsSet));
    }
    elemArr.push(<Button fullWidth onClick={() => addAdvisor(advisors, advisorsSet)}>+</Button>);
    return elemArr;
  };

  return buildList(advisors, advisorsSet, investors, investorsSet);
};

// export
export default AdvisorsAndInvestorsEdit;
