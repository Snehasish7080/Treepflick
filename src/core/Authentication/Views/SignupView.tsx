/*eslint-disable */
import React, {FC} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppInput from '../../../Components/AppInput';
import AppText from '../../../Components/AppText';
import {Colors} from '../../../utils/theme/Colors';
import {FontFamily} from '../../../utils/theme/FontFamily';
import {getFontSize} from '../../../utils/theme/FontScale';
import {AuthenticatedNavProps} from '../../../navigation/Authenticated/AuthenticatedTypes';

const SignupView: FC<AuthenticatedNavProps<'SignupView'>> = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView} bounces={false}>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <AppText style={styles.title}>Sign Up</AppText>
          <AppInput
            lable="Full Name"
            containerStyle={styles.inputContainerBox}
            placeholder="Enter your full name"
          />
          <AppInput
            lable="Email"
            containerStyle={styles.inputContainerBox}
            placeholder="Enter your email"
          />
          <AppInput
            lable="Username"
            containerStyle={styles.inputContainerBox}
            placeholder="Enter your username"
          />
          <AppInput
            lable="Password"
            secureTextEntry={true}
            placeholder="Enter password"
          />
        </View>
        <Pressable
          style={styles.loginBtn}
          onPress={() => navigation.navigate('VerificationView')}>
          <AppText style={styles.loginText}>Continue</AppText>
        </Pressable>
        <AppText style={styles.privacyInfo}>
          by clicking continue, you agree to our
        </AppText>
        <View style={styles.privacyContainer}>
          <AppText
            style={[
              styles.privacyContainer,
              styles.pressabelInfo,
              {
                marginLeft: 0,
                marginRight: 4,
              },
            ]}>
            Privacy Policy
          </AppText>
          <AppText style={styles.privacyContainer}>and</AppText>
          <AppText style={[styles.privacyContainer, styles.pressabelInfo]}>
            Term and Conditions
          </AppText>
        </View>
        <Pressable
          style={styles.infoContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <AppText style={styles.info}>Already have an account?</AppText>
          <AppText style={[styles.info, styles.pressabelInfo]}>Login</AppText>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default SignupView;

const styles = ScaledSheet.create({
  scrollView: {flexGrow: 1, backgroundColor: Colors.white.main},
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white.main,
    paddingHorizontal: '30@s',
  },
  inputContainer: {
    width: '100%',
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
    marginBottom: 20,
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
  privacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    color: Colors.grey.highlightIcon,
    fontSize: getFontSize(14),
    fontFamily: FontFamily.poppinsMedium,
  },
  pressabelInfo: {
    color: Colors.primary.main,
    marginLeft: 4,
    fontFamily: FontFamily.poppinsMedium,
  },
  privacyInfo: {
    color: Colors.grey.privacyText,
  },
});
