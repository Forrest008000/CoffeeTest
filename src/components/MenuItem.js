import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MenuItem = ({ title }) => {
  const iconMap = {
    Cafe: "coffee",
    Cappuccino: "coffee-outline",
    Espresso: "coffee-to-go"
  }
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={iconMap[title]} size={24}/>
      <Text>
        { title }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default MenuItem