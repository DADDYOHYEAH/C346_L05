import React, { useState } from 'react';
import { Button, Platform, StatusBar, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const InputBox = ({ label, onChangeText, secureTextEntry = false }) => (
  <View>
    <Text>{label}</Text>
    <TextInput
      style={{ borderWidth: 1 }}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const MyApp = () => {
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState('admin');
  const [pw, setPw] = useState('');

  return (
    <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <Text>User Type:</Text>
      <Picker
        style={{ backgroundColor: '#d3d3d3' }}
        selectedValue={userType}
        onValueChange={setUserType}
      >
        <Picker.Item label="Admin" value="admin" />
        <Picker.Item label="Guest" value="guest" />
      </Picker>

      <InputBox label="User Name:" onChangeText={setUserName} />

      <InputBox label="Password:" onChangeText={setPw} secureTextEntry />

      <Button title="LOG IN" onPress={() => alert('Welcome! ' + userType + ' ' + userName)} />

      <TouchableOpacity onPress={() => {
        const correctPassword = '123';
        const message = pw === correctPassword
          ? 'Welcome ' + userType + ' ' + userName
          : 'Error! Wrong Password!';
        ToastAndroid.show(message, ToastAndroid.SHORT);
      }}>
        <Text>I'm pressable!</Text>
      </TouchableOpacity>

      <Text>Entered password: {pw}</Text>
    </View>
  );
};

export default MyApp;
