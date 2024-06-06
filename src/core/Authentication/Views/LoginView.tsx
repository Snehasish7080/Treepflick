import {View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppText from '../../../Components/AppText';
import {Colors} from '../../../utils/theme/Colors';
import {getFontSize} from '../../../utils/theme/FontScale';
import {FontFamily} from '../../../utils/theme/FontFamily';

const LoginView = () => {
  return (
    <View style={styles.mainContainer}>
      <AppText style={styles.title}>Treepflick</AppText>
      <AppText style={styles.tagLine}>
        “Uncover Hidden Tales Around You”
      </AppText>
    </View>
  );
};

export default LoginView;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white.main,
  },
  title: {
    fontSize: getFontSize(50),
    fontFamily: FontFamily.styleScript,
    color: Colors.primary.main,
  },
  tagLine: {
    fontFamily: FontFamily.poppinsMedium,
  },
});
