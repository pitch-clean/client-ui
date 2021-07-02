// react
import React, { useState } from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  ClickAwayListener,
  ListItemText,
  List,
  Button,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@material-ui/core';
import {
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';
// constants
const useStyles = makeStyles(theme => ({
  MPFilterItem: {
    position: 'relative',
  },
  navIconHide: {
    color: 'black',
    '& *': {
      color: 'black',
    },
    display: 'relative',
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
  },
  misc: {
    '& .MuiAccordionSummary-root.Mui-expanded': {
      minHeight: 0,
    },
  },
  highlight: {
    backgroundColor: `#cdffd021`,
    border: '1px solid #3eb7ff66',
  },
  highlightInner: {
    backgroundColor: `#5faf643b`,
    borderBottom: '1px solid #9cd2e2d9',
    borderRadius: 5,
  },
}));
const handleClickAddRemove = (getter, setter) => e => {
  const value = e.target.textContent;
  if (!getter.includes(value)) {
    console.log('adding', value, getter, [...new Set([...getter, value])])
    setter([...new Set([...getter, value])]);
  } else {
    console.log('removing', value, getter.filter(item => item !== value))
    setter(getter.filter(item => item !== value));
  }
};

/**
 * main
 */
const MPFilterItem = ({ label, menuItems, getter, setter }) => {
  // init hooks
  const classes = useStyles();
  // state
  const [isOpen, isOpenSetter] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => isOpen && isOpenSetter(false)}>
      <div className={`${classes.MPFilterItem} container flexcol h100`} onClick={() => isOpenSetter(!isOpen)}>
        <AccordionSummary
          className={`${classes.misc} h100`}
          expandIcon={<ExpandMoreIcon />}
        >
          <Button
            className={`container flexcol ${classes.navIconHide} nowrap`}
            iconName="bars"
            disabled
          >
            {label}
          </Button>
        </AccordionSummary>
        <div className={`h100`} style={{position: 'absolute', top: 0}}>
          <Accordion className={`accordo ${classes.misc} h100 `} expanded={isOpen} elevation={0}>
            <AccordionSummary
              className={`${classes.misc} h100 `}
              expandIcon={<ExpandMoreIcon />}
            >
              <Button
                className={`container flexcol ${classes.navIconHide} ${getter.length > 0 && classes.highlight} nowrap`}
                onClick={() => isOpenSetter(!isOpen)}
                disabled
              >
                {label}
              </Button>
            </AccordionSummary>
            <AccordionDetails style={{top: '-8px'}}>
              <Paper style={{width: '100%'}}>
                <List style={{width: '100%', padding: '3px'}}>
                  {menuItems.map(text => (
                    <ListItem className={`${getter.includes(text) && classes.highlightInner}`} style={{width: '100%'}} button key={text} onClick={handleClickAddRemove(getter, setter)}>
                      <ListItemText style={{width: '100%'}} primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </ClickAwayListener>
  );
};

// export
export default MPFilterItem;
