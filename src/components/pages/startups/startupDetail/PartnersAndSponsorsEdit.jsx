// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CardHeader, Typography, Divider, Avatar, TextField, Link as MuiLink } from '@material-ui/core';
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
const updatePartnersSponsors = (arr, idx, field, setter, e) => {
  let newArr = [...arr];
  if (field === 'name') {
    newArr[idx].name = e.target.value;
  } else if (field === 'image') {
    newArr[idx].image = e.target.value;
  } else if (field === 'homepage') {
    newArr[idx].homepage = e.target.value;
  }
  setter(newArr);
};
const addPartnerSponsor = (arr, setter) => {
  const newPartnerSponsor = [...arr, ''];
  setter(newPartnerSponsor);
}

/**
 * main
 */
const PartnersAndSponsorsEdit = ({ partners, partnersSet, sponsors, sponsorsSet }) => {
  // init hooks
  const classes = useStyles();
  // build
  const buildList = (partners, partnersSet, sponsors, sponsorsSet) => {
    const itemElemArr = [];
    for (let idx = 0; idx < partners.length; idx += 1) {
      itemElemArr.push(
        <div className={`${classes.cardContent} h100 flexcol f1`}>
          <TextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="name"
            size="small"
            margin="dense"
            value={partners[idx].name}
            onChange={e => updatePartnersSponsors(partners, idx, 'name', partnersSet, e)}
          />
          <TextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="homepage"
            size="small"
            margin="dense"
            value={partners[idx].homepage}
            onChange={e => updatePartnersSponsors(partners, idx, 'homepage', partnersSet, e)}
          />
          <TextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="image"
            size="small"
            margin="dense"
            value={partners[idx].image}
            onChange={e => updatePartnersSponsors(partners, idx, 'image', partnersSet, e)}
          />
        </div>
      );
    }
    for (let idx = 0; idx < sponsors.length; idx += 1) {
      itemElemArr.push(
        <div className={`${classes.cardContent} h100 flexcol f1`}>
          <TextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="name"
            size="small"
            margin="dense"
            value={sponsors[idx].name}
            onChange={e => updatePartnersSponsors(sponsors, idx, 'name', sponsorsSet, e)}
          />
          <TextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="homepage"
            size="small"
            margin="dense"
            value={sponsors[idx].homepage}
            onChange={e => updatePartnersSponsors(sponsors, idx, 'homepage', sponsorsSet, e)}
          />
          <TextField
            className={`${classes.input} w100 f1`}
            variant="outlined"
            placeholder="image"
            size="small"
            margin="dense"
            value={sponsors[idx].image}
            onChange={e => updatePartnersSponsors(sponsors, idx, 'image', sponsorsSet, e)}
          />
        </div>
      );
    }
    return itemElemArr;
  };

  return (
    <div className={`PartnersAndSponsorsEdit ${classes.content} flexrow`}>
      {buildList(partners, partnersSet, sponsors, sponsorsSet)}
    </div>
  );
};

// export
export default PartnersAndSponsorsEdit;
