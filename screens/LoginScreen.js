import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // For icons

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    navigation.navigate("Home"); // Navigate to Home screen on successful login
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Welcome Back!</Text>

          {/* Email Input */}
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            left={<TextInput.Icon icon="email" />}
          />

          {/* Password Input */}
          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry={!showPassword}
            left={<TextInput.Icon icon="lock" />}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />

          {/* Error Message */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Login Button */}
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Login
          </Button>

          {/* Signup Navigation */}
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.switchText}>
              Don't have an account? <Text style={styles.switchTextBold}>Signup</Text>
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
  errorText: {
    color: "#ff4444",
    marginBottom: 10,
    textAlign: "center",
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
