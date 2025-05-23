import React, {FC} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppInput from '../../../Components/AppInput';
import AppText from '../../../Components/AppText';
import {Colors} from '../../../utils/theme/Colors';
import {FontFamily} from '../../../utils/theme/FontFamily';
import {getFontSize} from '../../../utils/theme/FontScale';
import {AuthenticatedNavProps} from '../../../navigation/Authenticated/AuthenticatedTypes';

const LoginView: FC<AuthenticatedNavProps<'LoginView'>> = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView} bounces={false}>
      <View style={styles.mainContainer}>
        <AppText style={styles.heading}>Treepflick</AppText>
        <AppText style={styles.tagLine}>
          “Uncover Hidden Tales Around You”
        </AppText>
        <View style={styles.inputContainer}>
          <AppText style={styles.title}>Login</AppText>
          <AppInput
            lable="Email"
            containerStyle={styles.inputContainerBox}
            placeholder="Enter your email"
          />
          <AppInput
            lable="Password"
            secureTextEntry={true}
            placeholder="Enter password"
          />
        </View>
        <AppText style={styles.forgetPassword}>Forget Password?</AppText>
        <Pressable
          style={styles.loginBtn}
          onPress={() => navigation.navigate('VerificationView')}>
          <AppText style={styles.loginText}>Login</AppText>
        </Pressable>
        <Pressable
          style={styles.infoContainer}
          onPress={() => {
            navigation.navigate('SignupView');
          }}>
          <AppText style={styles.info}>Don't have an account?</AppText>
          <AppText style={[styles.info, styles.pressabelInfo]}>Sign up</AppText>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default LoginView;

const styles = ScaledSheet.create({
  scrollView: {flexGrow: 1, backgroundColor: Colors.white.main},
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
    marginTop: 30,
  },
  info: {
    color: Colors.grey.highlightIcon,
    fontSize: getFontSize(14),
    fontFamily: FontFamily.poppinsMedium,
  },
  pressabelInfo: {
    color: Colors.primary.main,
    marginLeft: 4,
  },
});
