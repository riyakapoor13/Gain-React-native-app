import React from 'react';
import { View, StyleSheet } from 'react-native';
import DashboardIcon from 'C:/Users/RIYA/Desktop/Gain-React-native-app/gain-frontend/assets/dashboard.svg';
import ReportIcon from 'C:/Users/RIYA/Desktop/Gain-React-native-app/gain-frontend/assets/report.svg';
import ConnectIcon from 'C:/Users/RIYA/Desktop/Gain-React-native-app/gain-frontend/assets/connect.svg';
import ProfileIcon from 'C:/Users/RIYA/Desktop/Gain-React-native-app/gain-frontend/assets/profile.svg'; // Use full path as requested

const IconContainer = () => {
  return (
    <View style={styles.iconContainer}>
      <DashboardIcon width={30} height={30} />
      <ReportIcon width={30} height={30} />
      <ConnectIcon width={30} height={30} />
      <ProfileIcon width={30} height={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default IconContainer;
