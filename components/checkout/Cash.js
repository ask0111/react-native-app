import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView , Alert } from 'react-native';
import { useSelector } from 'react-redux';



export default function Cash({navigation}) {
    const [address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleShowAlert = () => {
        Alert.alert(
          'Ordered Successfull!', 
          `Your Cash Order Has compeleted Check On History...,
          Your Contact Number: ${mobileNumber},
          Your Deliver Address: ${address}`,
          [
            {
              text: 'OK',   
              onPress: () => console.log('OK Pressed'),
              style: 'cancel',  
            },
          ],
          { cancelable: false }  
        );
      };

    const handleConfirmOrder = () => {
        handleShowAlert();
        navigation.navigate('home');
    };


   

    const [itemDetails, setItemDetails] = useState([])

    const Totalhandler = (prod) => {
        let t1 = 0, t2 = 0;
        prod.forEach(element => {
            t1 += element.count;
            t2 += element.product.price * element.count;
        });
        setQuantity(t1);
        setPrice(t2);
    }
    const getdata = async () => {
        try {
            const prod = await useSelector((state) => state.addedCartsReducer);
            console.log(prod);
            setItemDetails(prod);
            Totalhandler(prod);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getdata();
    })
    getdata();





    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order Summary:</Text>
            <ScrollView
                contentContainerStyle={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: '#F2EAD3',
                    padding: 10,
                }}
            >
                {
                    itemDetails?.map((ele) => (<>
                        <View style={styles.item}>
                            <Text>Product Name: {ele.product.title}</Text>
                            <Text>Price: {ele.product.price.toFixed(2)}</Text>
                            <Text>Quantity: {ele.count}</Text>
                        </View>
                    </>))
                }
            </ScrollView>

            

            <View style={styles.item}>
                <Text>Total Products Details: </Text>
                <Text>Price: ${price.toFixed(2)}</Text>
                <Text>Quantity: {quantity}</Text>
            </View>

            {/* Address, Mobile Number, and Name */}
            <Text style={styles.title}>Delivery Details:</Text>
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={text => setAddress(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                value={mobileNumber}
                onChangeText={text => setMobileNumber(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
            />

            <Text style={styles.title}>Terms and Conditions:</Text>
            <Text style={styles.terms}>

            </Text>

            <TouchableOpacity style={styles.button} onPress={handleConfirmOrder}>
                <Text style={styles.buttonText}>Confirm Order (${price.toFixed(2)})</Text>
            </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    item: {
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 12,
    },
    terms: {
        fontSize: 14,
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});


