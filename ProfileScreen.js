import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSection}>
        <Image style={styles.profilePic} source={{ uri: 'https://via.placeholder.com/150' }} />
        <Text>Followers: 100</Text>
        <Text>Following: 150</Text>
      </View>
      <View style={styles.secondSection}>
        <Text>Posts: 10</Text>
      </View>
      <ScrollView horizontal style={styles.thirdSection}>
        <View style={styles.postCard}>
          <Text>Post 1</Text>
        </View>
        <View style={styles.postCard}>
          <Text>Post 2</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  secondSection: {
    padding: 10,
  },
  thirdSection: {
    flexDirection: 'row',
    padding: 10,
  },
  postCard: {
    width: 200,
    height: 200,
    backgroundColor: '#ccc',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;