import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableNativeFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from 'react-native';

import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    if ((name, mail, password)) {
      console.log({ name, mail, password });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
            <View style={styles.photo}>
              <Ionicons
                name="add-circle-outline"
                size={25}
                color="#FF6C00"
                style={styles.ickonAdd}
              />
            </View>
            <Text style={styles.text}>Реєстрація</Text>
            <View style={styles.containerInput}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              >
                <TextInput
                  placeholder="Логін"
                  value={name}
                  onChangeText={setName}
                  style={styles.input}
                />
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
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonTitle}>Зареєструватися</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
              <View style={styles.stringInText}>
                <Text>Немає акаунту?</Text>
                <Text
                  style={{ textDecorationLine: 'underline' }}
                  onPress={() => navigation.navigate('LoginScreen')}
                >
                  {'  '}
                  Увійти
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
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  action: {
    flexDirection: 'row',
    width: 343,
    height: 50,
    borderRadius: 8,
  },
  box: {
    backgroundColor: '#fff',
    width: '100%',
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  ickonAdd: {
    left: 108,
    top: 82,
  },
  eye: {
    top: 15,
    marginLeft: 10,
    left: -100,
  },
  photo: {
    backgroundColor: '#F6F6F6',
    width: 120,
    borderRadius: 16,
    top: -60,
    margin: 'auto',
    height: 120,
  },
  text: {
    color: '#212121',

    fontSize: 30,

    textAlign: 'center',
    backgroundColor: 'transparent',
    top: -32,
  },
  containerInput: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 0,
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
    marginTop: 66,
    textAlign: 'center',
    borderRadius: 50,
  },
});

export default RegistrationScreen;
