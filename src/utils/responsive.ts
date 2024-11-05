import {width, height} from './dimensions';

//frame sizes are based on Iphone 13
const frameWidth = 375;
const frameHeight = 812;

const horizontalScale = (size: number) => (width / frameWidth) * size;
const verticalScale = (size: number) => (height / frameHeight) * size;

const moderateHorizontalScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

const resolution = (size: number) => {
  let currentResolution = Math.sqrt(height * height + width * width);
  let designResolution = Math.sqrt(
    frameHeight * frameHeight + frameWidth * frameWidth,
  );
  const RESOLUTIONS_PROPORTION = currentResolution / designResolution;
  return RESOLUTIONS_PROPORTION * size;
};

// const isTablet = () => {
//   if (width > 550) {
//     return true;
//   } else {
//     return false;
//   }
// };

export {
  horizontalScale as w,
  verticalScale as h,
  moderateHorizontalScale as mw,
  moderateVerticalScale as mh,
  resolution as res,
};

// horizontalScale ==> for width, marginLeft,marginRight, marginHorinzontal paddingLeft,paddingRight,paddingHorizontal, likewise
// verticalScale ==> for height, marginTop, marginBottom, marginVertical, paddingTop, paddingBottom, linHeight, likewise
