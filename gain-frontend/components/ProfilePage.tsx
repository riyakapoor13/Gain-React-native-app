import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import DashboardIcon from 'C:/Users/RIYA/Desktop/Gain-React-native-app/gain-frontend/assets/dashboard.svg';
import ReportIcon from 'C:/Users/RIYA/Desktop/Gain-React-native-app/gain-frontend/assets/report.svg';
import ConnectIcon from 'C:/Users/RIYA/Desktop/Gain-React-native-app/gain-frontend/assets/connect.svg';
import ProfileIcon from 'C:/Users/RIYA/Desktop/Gain-React-native-app/gain-frontend/assets/profile.svg';
import axios from 'axios'; // Import Axios

// Define a type for the user data
interface User {
  name: string;
  role: string;
  email: string;
  phone: string;
  earnings: number;
  expenditure: number;
  riskFactor: number;
}

const ProfilePage = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://your-api-endpoint.com/user'); // Replace with your API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Show loading indicator while fetching data
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // If userData is null, handle the case (e.g., show an error message)
  if (!userData) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load user data.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/your-profile-image.png')} style={styles.profileImage} />
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.role}>{userData.role}</Text>
        <Text style={styles.email}>{userData.email}</Text>
        <Text style={styles.phone}>{userData.phone}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{userData.earnings}K</Text>
          <Text style={styles.statLabel}>EARNING</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{userData.expenditure}K</Text>
          <Text style={styles.statLabel}>EXPENDITURE</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{userData.earnings}K</Text>
          <Text style={styles.statLabel}>EARNING</Text>
        </View>
      </View>

      <Text style={styles.riskTitle}>My Risk Appetite</Text>
      <View style={styles.riskContainer}>
        <Text style={styles.riskValue}>{userData.riskFactor}</Text>
        <Text style={styles.riskText}>Your risk factor is</Text>
      </View>

      <Text style={styles.interactionsTitle}>Recent Interactions</Text>
      <View style={styles.interaction}>
        <Text style={styles.interactionName}>Urdan Inc.</Text>
        <Text style={styles.interactionAmount}>$213.22</Text>
        <Text style={styles.interactionChange}>+2.49 (8%)</Text>
      </View>

      {/* Directly use the imported SVGs as components */}
      <View style={styles.iconContainer}>
        <DashboardIcon width={30} height={30} />
        <ReportIcon width={30} height={30} />
        <ConnectIcon width={30} height={30} />
        <ProfileIcon width={30} height={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#888',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
  phone: {
    fontSize: 14,
    color: '#555',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
  },
  riskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  riskContainer: {
    alignItems: 'center',
  },
  riskValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
  },
  riskText: {
    fontSize: 14,
    color: '#555',
  },
  interactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  interaction: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginBottom: 10,
  },
  interactionName: {
    fontSize: 16,
  },
  interactionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  interactionChange: {
    fontSize: 12,
    color: '#008000', // Change color based on increase or decrease
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default ProfilePage;
