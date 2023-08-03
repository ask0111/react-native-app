import { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import CartItem from "./CartItem";
import { UseSelector, useSelector } from "react-redux";

export default function Cart({navigation}) {
    const [product, setProduct] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const handleCheckout = ()=>{
        navigation.navigate('checkout')
    }

    const Totalhandler = (prod)=>{
        let t1 = 0, t2 = 0;
        prod.forEach(element => {
            t1 += element.count;
            t2 += element.product.price * element.count;
        });
        setTotalCart(t1);
        setTotalPrice(t2);
    }
    
    const getdata = async () => {
        try {
            const prod = await useSelector((state)=> state.addedCartsReducer);
            console.log(prod);
            setProduct(prod);
            Totalhandler(prod);
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
                <Text >Total Cart: {totalCart}</Text>
                <Text>Total Amount: ${totalPrice.toFixed(2)}</Text>
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