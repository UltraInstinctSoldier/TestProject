/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from './firebaseConfig';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
// import {Ionicons} from '@expo/vector-icons';
import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import {}

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

import Facebook from './assets/Facebook.png';
import Google from './assets/Google.png';
import Twitter from './assets/Twitter.png';
import Linkedin from './assets/Linkedin.png';

function App({navigation}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordIcon, setShowPasswordIcon] = useState('eye');
  const [triggerConfettiCannon, setTriggerConfettiCannon] = useState(false);
  const auth = getAuth();

  const showPass = () => {
    if (showPassword === true) {
      setShowPassword(false);
      setShowPasswordIcon('eye-off');
    } else {
      setShowPassword(true);
      setShowPasswordIcon('eye');
    }
  };
  const onLoginPress = () => {
    navigation.navigate('Loginp', triggerConfettiCannon);
  };

  const onSignupPress = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: 'Error Signing up',
          text2: error.code,
          position: 'top',
        });
      });
    setTriggerConfettiCannon(true);
  };
  const onFacebookIconPress = () => {
    navigation.navigate('LoginWithFacebook');
    setEmail('');
    setPassword('');
  };
  const onGoogleIconPress = () => {
    navigation.navigate('LoginWithGoogle');
    setEmail('');
    setPassword('');
  };
  const onTwitterIconPress = () => {
    navigation.navigate('LoginWithTwitter');
    setEmail('');
    setPassword('');
  };
  const onLinkedinIconPress = () => {
    navigation.navigate('LoginWithLinkedin');
    setEmail('');
    setPassword('');
  };

  const onForgotPress = () => {
    Alert.alert(
      'Please check your email',
      'An Email has been sent to reset Your Account',
    );
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: 'lightgray',
              width: 200,
              height: 200,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
              marginBottom: 20,
            }}>
            <Image
              source={require('./assets/Person.png')}
              style={styles.logo}
            />
            {/* <Image source={Logo} style={styles.logo} /> */}
            {/* <Ionicons name="person" size={100} color={'white'} /> */}
          </View>
          <View style={styles.text}>
            {/* <Ionicons
              // style={styles.icon2}
              color={'darkgray'}
              name={'person'}
              size={25}
            /> */}
            <TextInput
              width="85%"
              placeholder="Email..."
              placeholderTextColor={'#003f5c'}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.text}>
            {/* <Ionicons
              // style={styles.icon1}
              color={'darkgray'}
              name={'lock-closed'}
              size={25}
            /> */}
            <TextInput
              width="85%"
              placeholder="Password..."
              placeholderTextColor="#003f5c"
              secureTextEntry={showPassword}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={showPass}>
              {/* <Ionicons color={'gray'} name={showPasswordIcon} size={25} /> */}
            </TouchableOpacity>
          </View>

          {/* <KeyboardAvoidingView behavior=""> */}
          <View style={styles.ButtonCon}>
            <TouchableOpacity onPress={onForgotPress}>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                onPress={onSignupPress}
                style={styles.loginButton}>
                <Text style={{color: 'black'}}>Signup</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onLoginPress}
                style={styles.loginButton}>
                <Text style={{color: 'black'}}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </KeyboardAvoidingView> */}
          <Text>
            Login With:
            {/* <Ionicons name="arrow-down" size={20} color={'gray'} /> */}
          </Text>

          <View style={styles.loginOptions}>
            <TouchableOpacity onPress={onFacebookIconPress}>
              <Image source={Facebook} style={styles.socialMediaPlatforms} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onGoogleIconPress}>
              <Image source={Google} style={styles.socialMediaPlatforms} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onTwitterIconPress}>
              <Image source={Twitter} style={styles.socialMediaPlatforms} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onLinkedinIconPress}>
              <Image source={Linkedin} style={styles.socialMediaPlatforms} />
            </TouchableOpacity>
          </View>
        </View>
        <Toast />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  mainCon: {
    backgroundColor: 'transparent',
    height: '100%',
    justifyContent: 'center',
  },
  textCon: {
    fontSize: 30,
    textAlign: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 180,
    width: 180,
    margin: 50,
    borderRadius: 100,
    tintColor: 'gray',
  },
  text: {
    backgroundColor: '#bde0fe',
    borderRadius: 50,
    padding: 8,
    borderWidth: 2,
    margin: 10,
    justifyContent: 'flex-start',
    width: '90%',
    flexDirection: 'row',
  },

  ButtonCon: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButton: {
    width: '35%',
    borderRadius: 45,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#bee9e8',
  },
  socialMediaPlatforms: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  loginOptions: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-start',
    height: 120,
  },
});

export default App;
