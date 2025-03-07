import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { TextInput, Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setname] = useState("");



  const { signup, loading } = useAuth();



  const handle_submit = async () => {
    try {
      if (!email || !password || !confirmPassword) {
        return Alert.alert('All the fields are required!');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return Alert.alert('Please enter a valid email address!');
      }

      if (password !== confirmPassword) {
        return Alert.alert('Passwords must match correctly!');
      }

      const firebase_user = await signup(email, password);

      if (firebase_user) {
        Alert.alert('Registered successfully!')
        return navigation.navigate('Home')
      }



    } catch (e) {
      console.log(e);
      Alert.alert('Something Went Wrong.')
    }
  };


  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Create Account</Text>

          <TextInput
            label="Name"
            mode="outlined"
            value={name}
            onChangeText={setname}
            style={styles.input}
            keyboardType="Name"
            left={<TextInput.Icon icon="human" />}
          />

          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            left={<TextInput.Icon icon="email" />}
          />

          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
            left={<TextInput.Icon icon="lock" />}
          />

          <TextInput
            label="Confirm Password"
            mode="outlined"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            secureTextEntry
            left={<TextInput.Icon icon="lock-check" />}
          />

          <Button
            mode="contained"
            onPress={() => handle_submit()}
            style={styles.button}
            disabled={loading}
          >
            {loading ? 'Signing in' : 'Sign Up'}
          </Button>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.switchText}>
              Already have an account? <Text style={styles.switchTextBold}>Login</Text>
            </Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
  },
  card: {
    width: "90%",
    paddingVertical: 20,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#1565C0",
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginVertical: 10,
    backgroundColor: "#1976D2",
    padding: 5,
  },
  switchText: {
    textAlign: "center",
    marginTop: 10,
    color: "#444",
  },
  switchTextBold: {
    fontWeight: "bold",
    color: "#0D47A1",
  },
});
