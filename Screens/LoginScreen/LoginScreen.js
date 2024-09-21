import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableNativeFeedback,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableOpacity,
} from 'react-native';

export const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLogin = () => {
    Alert.alert('Credentials', ` ${password}`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Photo-bg.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableNativeFeedback onPress={Keyboard.dismiss}>
          <View style={styles.box}>
            <Text style={styles.text}>Увійти</Text>
            <View style={styles.containerInput}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              >
                <TextInput
                  placeholder="Адреса електронної пошти"
                  value={mail}
                  onChangeText={setMail}
                  style={styles.input}
                />
                <View style={styles.action}>
                  <TextInput
                    placeholder="Пароль"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry={!showPassword}
                  />
                  <View>
                    <Text onPress={toggleShowPassword} style={styles.eye}>
                      {!showPassword ? 'Показати' : 'Заховати'}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={onLogin}>
                  <Text style={styles.buttonTitle}>Увійти</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
              <View style={styles.stringInText}>
                <Text>Немає акаунту?</Text>
                <Text style={{ textDecorationLine: 'underline' }}>
                  {'  '}
                  Зареєструватися
                </Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  action: {
    flexDirection: 'row',
    width: 343,
    height: 50,

    borderRadius: 8,
  },
  eye: {
    top: 15,
    marginLeft: 10,
    left: -100,
  },
  ickonAdd: {
    left: 108,
    top: 82,
  },
  box: {
    backgroundColor: '#fff',
    width: '100%',
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    top: 280,
  },
  text: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,

    textAlign: 'center',
    backgroundColor: 'transparent',
    top: 30,
  },
  photo: {
    backgroundColor: '#F6F6F6',
    width: 120,
    borderRadius: 16,
    top: -60,
    margin: 'auto',
    height: 120,
  },
  containerInput: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 60,
  },
  input: {
    width: 343,
    height: 50,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FF6C00',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 343,
    marginTop: 30,
  },
  stringInText: {
    flexDirection: 'row',
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },

  buttonTitle: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  line: {
    width: 134,
    borderBottomWidth: 5,
    marginHorizontal: 'auto',
    color: '#212121',
    marginTop: 106,
    textAlign: 'center',
    borderRadius: 50,
  },
});

export default LoginScreen;
