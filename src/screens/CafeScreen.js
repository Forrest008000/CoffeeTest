import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MenuItem from '../components/MenuItem';

const CafeScreen = () => {
  const data = [
    { title: 'Espresso', key: 'espresso', time: 4000},
    { title: 'Cappuccino', key: 'cappuccino', time: 10000 },
    { title: 'Cafe', key: 'cafe', time: 15000 }
  ]
  const [orders, setOrder] = useState([{ title: 'Espresso', key: 'espresso', time: 4000}])

  useEffect(() => {
    if (orders.length >= 1) {
      orders.forEach(async element => {
        await setTimeout(handleOrder, element.time)
      })
    }
  })

  const barista = () => new Promise((resolve, reject) => {
    resolve('Done')
  })

  const handleOrder = async () => {
    try {
      let b = await barista()
      console.log(b)
      if (orders.length >= 1) {
        const newOrders = orders.shift()
        setOrder(newOrders)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Caffeine Options</Text>
      <FlatList
        data={data}
        style={styles.listContainer}
        renderItem={({ item, index, separators }) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => {
              setOrder([item, ...orders])
            }}
          >
            <MenuItem title={item.title} />
          </TouchableOpacity>
        )}
      />
      <Text>Current Orders</Text>
      <FlatList
        data={orders}
        style={styles.listContainer}
        renderItem={({ item, index, separators }) => (
          <TouchableOpacity
            key={item.key}
            // onPress={() => setTimeout(handleOrder, item.time)}
          >
            <MenuItem title={item.title} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 400
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#999999'
  }
});

export default CafeScreen