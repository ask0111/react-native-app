import { useEffect, useState } from "react"
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Item from "./Items";


export default function Home({navigation}){
    const [product, setProduct] = useState([]);

    const getdata = async()=>{
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const prod = await res.json();
            // console.log(prod);
            setProduct(prod);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getdata();
    }, [])

    return(<>
        <ScrollView contentContainerStyle={styles.itemscontainer}>
            {product.map((prod)=> <Item item={{prod, navigation}} />)}
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
        backgroundColor: '#D8D9DA',
        marginTop: 20,
    }
    
})