import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import ImageViewing from 'react-native-image-viewing';
import { useDispatch, useSelector } from "react-redux";
import { addedCartsRedux } from "../Redux/Action";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Details = ({ route }) => {

  const [isAdded, setIsAdded] = useState(true);
  const [isSelected, setIsSelected] = useState('');
  const { title, price, description, category, image, rating } = route.params;

  const dispatch = useDispatch();
  const der = useSelector((state) => state.addedCartsReducer);
  

  const RemoveHandler = async (product, userID) => {
      try {
          const arrData = await allProductDetails;
        
          const productArr = arrData.filter((data) => {
              if (data.product.id !== product.id) {
                  return data;
              }
          })
          await AsyncStorage.setItem(`${userID}`, JSON.stringify(productArr));
      } catch (error) {
          console.log('remove cart errer', error);
      }

  }
  const CardAddHandler = async (product, userID) => {
      try {
          const req = await AsyncStorage.getItem(`${userID}`);
          if (!req) {
              await AsyncStorage.setItem(`${userID}`, JSON.stringify([{product, count: 1}]));
          } else {
              await AsyncStorage.setItem(`${userID}`, JSON.stringify([...JSON.parse(req), {product, count: 1}]));
          }
          const r = await AsyncStorage.getItem(`${userID}`);
      } catch (error) {
          console.log('Add Card Error', error);
      }
  }
  const isAddedHandler = async (product) => {
      try {
        const resp = await AsyncStorage.getItem('user');
        const userID = JSON.parse(resp).person.id;
        
        const req = await AsyncStorage.getItem(`${userID}`);
        if (!req && isAdded) {
          await CardAddHandler(product, userID);
          setIsAdded(false);
        } else if (isAdded) {
          await CardAddHandler(product, userID);
          setIsAdded(false);
        } else {
          await RemoveHandler(product, userID);
          setIsAdded(true)
        }
        
          const result = await AsyncStorage.getItem(`${userID}`);
          
          dispatch(addedCartsRedux(JSON.parse(result)));

      } catch (error) {
          console.log('carts error', error);
      }
  }



const Hovered = async() => {
  try {
    const resp = await AsyncStorage.getItem('user');
    const userID = JSON.parse(resp).person.id;
    const req = await AsyncStorage.getItem(`${userID}`);
    const addedCartsDetails = JSON.parse(req);
    addedCartsDetails.forEach(element => {
      if (element.product.id == route.params.id) {
        setIsAdded(false);
        return ;
      }
    })
    
    setIsAdded(true);
    return ;
  } catch (error) {
    console.log('cart details error', error);
  }
}

  useEffect(() => {
    Hovered();
  }, [])
  

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
      {isAdded ? <Button onPress={() => isAddedHandler(route.params)} mode="outlined" style={styles.button}>
        Add to Cart
      </Button> : <Button onPress={() => isAddedHandler(route.params)} mode="contained" style={styles.button}>
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
