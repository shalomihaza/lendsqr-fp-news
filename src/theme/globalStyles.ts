import {StyleSheet} from 'react-native';
import {h, w} from 'utils/responsive';
import {COLORS} from './colors';
// import {height, width} from 'utils/dimensions';

export const globalStyles = StyleSheet.create({
  ceteredContainer: {
    flex: 1,
    paddingLeft: w(24),
    paddingRight: w(24),

    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: h(20),
    gap: w(5),
  },
  txt: {
    fontSize: h(13),

    color: COLORS.black,
    justifyContent: 'center',
    fontWeight: '400',
  },
  linkTxt: {
    fontSize: h(13),

    color: COLORS.blue,

    fontWeight: '700',
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.blue,
  },
});
