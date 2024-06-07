import React from 'react';
import {Pressable, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppInput from '../../../Components/AppInput';
import AppText from '../../../Components/AppText';
import {Colors} from '../../../utils/theme/Colors';
import {FontFamily} from '../../../utils/theme/FontFamily';
import {getFontSize} from '../../../utils/theme/FontScale';

const LoginView = () => {
  return (
    <View style={styles.mainContainer}>
      <AppText style={styles.heading}>Treepflick</AppText>
      <AppText style={styles.tagLine}>
        “Uncover Hidden Tales Around You”
      </AppText>
      <View style={styles.inputContainer}>
        <AppText style={styles.title}>Login</AppText>
        <AppInput lable="Email" containerStyle={styles.inputContainerBox} />
        <AppInput lable="Password" secureTextEntry={true} />
      </View>
      <AppText style={styles.forgetPassword}>Forget Password?</AppText>
      <Pressable style={styles.loginBtn}>
        <AppText style={styles.loginText}>Login</AppText>
      </Pressable>
      <View style={styles.infoContainer}>
        <AppText style={styles.info}>Already have an account?</AppText>
        <AppText style={[styles.info]}>Sign up</AppText>
      </View>
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
    paddingHorizontal: '30@s',
  },
  heading: {
    fontSize: getFontSize(50),
    fontFamily: FontFamily.styleScript,
    color: Colors.primary.main,
  },
  tagLine: {
    fontFamily: FontFamily.poppinsMedium,
  },
  inputContainer: {
    width: '100%',
    marginTop: 68,
  },
  title: {
    fontSize: getFontSize(30),
    fontFamily: FontFamily.poppinsSemiBold,
    marginBottom: 26,
  },
  inputContainerBox: {
    marginBottom: 30,
  },
  forgetPassword: {
    fontSize: getFontSize(14),
    fontFamily: FontFamily.poppinsMedium,
    color: Colors.primary.main,
    marginTop: 30,
  },
  loginBtn: {
    width: 248,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary.main,
    marginTop: 40,
  },
  loginText: {
    fontSize: getFontSize(15),
    fontFamily: FontFamily.poppinsSemiBold,
    color: Colors.white.main,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    color: Colors.grey.highlightIcon,
    fontSize: getFontSize(14),
    fontFamily: FontFamily.poppinsMedium,
  },
});
