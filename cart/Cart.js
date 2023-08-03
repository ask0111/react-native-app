import { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import CartItem from "./CartItem";
import { UseSelector, useSelector } from "react-redux";

export default function Cart({navigation}) {
    const [product, setProduct] = useState([])
    
    const handleCheckout = ()=>{
        navigation.navigate('checkout')
    }
    
    const getdata = async () => {
        // const cartsProducts = await useSelector((state)=> state.addedCartsReducer);
        try {
            const prod = await useSelector((state)=> state.addedCartsReducer);
            console.log(prod);
            setProduct(prod);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getdata();
    })
    getdata();
    
    return (<>
        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
            <View>
                <Text style={styles.heading}>Cart Items:</Text>
                <Text >Total Cart: 2</Text>
                <Text>Total Amount: 1000$</Text>
            </View>
            <View>
                <Button onPress={handleCheckout} title="Buy Now" />
            </View>

        </View>
        <FlatList
            contentContainerStyle={styles.cartcontainer}
            data={product}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(item) => item.id}

        />

    </>)
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: '800',
    },
    cartcontainer: {
        width: '100%',
        backgroundColor: '#e3e3e3ce',
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    }

})