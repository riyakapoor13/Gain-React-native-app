// app/ProfilePage.tsx

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SvgUri } from 'react-native-svg'; // Ensure to install the package for SVG if needed
import ProfileIcon from '../assets/profile.svg'; // Adjust the path to your SVG file
import DashboardIcon from '../assets/dashboard.svg'; // Path to the dashboard SVG
import ReportIcon from '../assets/report.svg'; // Path to the report SVG
import ConnectIcon from '../assets/connect.svg'; // Path to the connect SVG

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/your-profile-image.png')} style={styles.profileImage} />
        <Text style={styles.name}>MARK ZUCKERBERG</Text>
        <Text style={styles.role}>CEO, Facebook</Text>
        <Text style={styles.email}>markzuckerberg@facebook.com</Text>
        <Text style={styles.phone}>+91 987654321</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>50K</Text>
          <Text style={styles.statLabel}>EARNING</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>30K</Text>
          <Text style={styles.statLabel}>EXPENDITURE</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>50K</Text>
          <Text style={styles.statLabel}>EARNING</Text>
        </View>
      </View>

      <Text style={styles.riskTitle}>My Risk Appetite</Text>
      <View style={styles.riskContainer}>
        <Text style={styles.riskValue}>821</Text>
        <Text style={styles.riskText}>Your risk factor is</Text>
      </View>

      <Text style={styles.interactionsTitle}>Recent Interactions</Text>
      <View style={styles.interaction}>
        <Text style={styles.interactionName}>Urdan Inc.</Text>
        <Text style={styles.interactionAmount}>$213.22</Text>
        <Text style={styles.interactionChange}>+2.49 (8%)</Text>
      </View>

      <View style={styles.iconContainer}>
        <SvgUri uri={DashboardIcon} width="30" height="30" />
        <SvgUri uri={ReportIcon} width="30" height="30" />
        <SvgUri uri={ConnectIcon} width="30" height="30" />
        <SvgUri uri={ProfileIcon} width="30" height="30" />
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
