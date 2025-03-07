import React, { useState, useEffect } from "react";
import { 
  View, Text, StyleSheet, TouchableOpacity, Image, Alert 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState({
    name: "Srinivas",
    email: "Srinivas@example.com",
    phone: "+91 7358610061",
    medicalId: "653678941",
    profilePic: "https://via.placeholder.com/100",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    fetchUserData();
  }, []);

  const handleEditProfile = () => {
    navigation.navigate("EditProfile", { user, setUser });
  };

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      { 
        text: "Logout", 
        onPress: async () => {
          await AsyncStorage.removeItem("user");
          navigation.replace("Login");
        } 
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.profilePic }} style={styles.profileImage} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Ionicons name="call-outline" size={24} color="#007bff" />
          <Text style={styles.detailText}>{user.phone}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="id-card-outline" size={24} color="#007bff" />
          <Text style={styles.detailText}>Medical ID: {user.medicalId}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Ionicons name="create-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#f0f4f7",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#007bff",
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
  },
  detailsContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  detailText: {
    fontSize: 18,
    marginLeft: 12,
    color: "#444",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 12,
    width: "90%",
    justifyContent: "center",
    marginBottom: 15,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9534f",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 12,
    width: "90%",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});