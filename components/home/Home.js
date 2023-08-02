import { useEffect, useState } from "react"
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Item from "./Items";


export default function Home(){
    const [product, setProduct] = useState([]);

    const getdata = async()=>{
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const prod = await res.json();
            console.log(prod);
            setProduct(prod);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        getdata();
    }, [])

    return(<>
     
            {/* <Text style={styles.heading}>Products</Text> */}
        <ScrollView contentContainerStyle={styles.itemscontainer}>
            {product.map((prod)=> <Item item={prod} />)}
        </ScrollView>
    </>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 24,
        fontWeight: '800',
    },
    itemscontainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        flexDirection: 'row',
        backgroundColor: '#e3e3e3ce',
        marginTop: 20,
    }
    
})