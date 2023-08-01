import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import ImageViewing from 'react-native-image-viewing';

const Details = ({ props }) => {
    const [isAdded, setIsAdded] = useState(true);
  const {title, price, description, category, image, rating } = props;

  console.log(image)

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image source={{ uri: `${image}` }} style={styles.img} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.des}>{description}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rating: {rating.rate}</Text>
        <Text style={styles.ratingText}>Rating Count: {rating.count}</Text>
      </View>
      {isAdded ? <Button onPress={()=> setIsAdded(false)} mode="outlined" style={styles.button}>
        Add to Cart
      </Button> : <Button onPress={()=> setIsAdded(true)} mode="contained" style={styles.button}>
        Remove Cart
      </Button>}
      <ImageViewing images={[{ uri: image }, { uri: image }]} />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  img: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5,
  },

  des: {
    fontSize: 16,
    marginTop: 10,
  },
  category: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingText: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Details;
