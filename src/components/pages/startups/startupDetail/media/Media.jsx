// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
// constants
const useStyles = makeStyles({
  carousel: {
    maxHeight: 500,
    minHeight: 500,
    height: 500,
    boxSizing: 'border-box',
    '& .CarouselItem': {
      height: `95%`,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'row',
      width: '100%',
      maxWidth: '100%',
      minWidth: '100%',
      maxHeight: 500,
      minHeight: 500,
      height: 500,
    },
    '& .CarouselItem div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxWidth: '100%',
      minWidth: '100%',
      maxHeight: 500,
      minHeight: 500,
      height: 500,
    },
    '& .CarouselItem > div': {
      maxHeight: `100%`,
      height: `100%`,
    },
    '& .CarouselItem > div > div': {
      maxHeight: `100%`,
      height: `100%`,
    },
  },
  media: {
    height: `100%`,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'white',
  },
  img: {
    maxHeight: '100%',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
  },
})
const picturesArr = [
  'https://rismedia.com/wp-content/uploads/2016/09/solar_panels_cost.jpg',
  'https://sigearth.com/wp-content/uploads/2015/02/solar_power_at_home.jpg',
  'https://energyeducation.ca/wiki/images/thumb/2/2c/Fixed_Tilt_Solar_panel_at_Canterbury_Municipal_Building_Canterbury_New_Hampshire.jpg/360px-Fixed_Tilt_Solar_panel_at_Canterbury_Municipal_Building_Canterbury_New_Hampshire.jpg',
  'https://static.canadianmetalworking.com/a/solar-power-generation-solar-panels-roof.jpg',
  'https://urbanupdate.in/wp-content/uploads/2019/01/solar-rooftop-panels-1100x732-1280x852.jpg',
];

/**
 * main
 */
const Media = ({ isEditing }) => {
  // init hooks
  const classes = useStyles();
  const buildItem = ({ imgUrl }) => {
    return (
      <Paper
        className={`${classes.media} h100 w100`}
        elevation={0}
      >
        <img src={imgUrl} className={classes.img} />
      </Paper>
    );
  };
  const elemList = picturesArr.map((item, idx) => buildItem({ imgUrl: item }));

  return (
    <Carousel
      className={`Carousel ${classes.carousel} w100 f1 flexcol`}
      autoPlay={false}
      animation="fade"
      indicators
      timeout={200}
      interval={0}
    >
      {elemList}
    </Carousel>
  );
};

// export
export default Media;
