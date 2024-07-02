import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const contacts = [
  {
    id: '1',
    name: 'Zeva Gananta Putra',
    phone: '085797251434',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/zeva.jpg'),
  },
  {
    id: '2',
    name: 'Rafida Zahra',
    phone: '085763534212',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/rafida.jpg'),
  },
  {
    id: '3',
    name: 'Rofi Darojat',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/rofi.jpg'),
  },
  {
    id: '4',
    name: 'Gilang Fauzul',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/gilang.jpg'),
  },
  {
    id: '5',
    name: 'Efrizal Prayoga',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/efrizal.jpg'),
  },
  {
    id: '6',
    name: 'Cahya Bintang',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/cahya.jpg'),
  },
  {
    id: '7',
    name: 'Fajar Hidayat',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/fajar.jpg'),
  },
  {
    id: '8',
    name: 'Rian Hidayatullah',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/rian.jpg'),
  },
  {
    id: '9',
    name: 'Romi Syahputra',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/romi.jpg'),
  },
  {
    id: '10',
    name: 'Salma Putri',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/salma.jpg'),
  },
  {
    id: '11',
    name: 'Dini Diana',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/dini.jpg'),
  },
  {
    id: '12',
    name: 'Elsa Genita',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/elsa.jpg'),
  },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ContactDetail', { contact: item })
            }>
            <View style={styles.contactItem}>
              <Image source={item.image} style={styles.contactImage} />
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactPhone}>{item.phone}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 14,
    color: '#555',
  },
});

export default Home;
