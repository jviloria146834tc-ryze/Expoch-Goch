import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function FirstActivity() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>

      {/* Logo Area */}
      <View style={styles.logoArea}>
        <Text style={styles.logo}>MyApp</Text>
        <Text style={styles.subtitle}>Welcome back!</Text>
      </View>

      {/* Login Form */}
      <View style={styles.formArea}>

        <Text style={styles.title}>Login</Text>

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoArea: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 16,
    marginTop: 8,
  },

  formArea: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  loginButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },

  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});