

import { useState, useEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addedCartsRedux } from "../Redux/Action";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CartItem( {item}) {
    console.log(item)
    const [isHovered, setIsHovered] = useState(false);

    const dispatch = useDispatch();
    const selector = useSelector((state) => state.addedCartsReducer);

    const CardAddHandler = async (data, userID, c) => {
        try {
            const req = await AsyncStorage.getItem(`${userID}`);
            const arrData = JSON.parse(req);
            const array = arrData.map(element => {
                if (element.product.id == data.product.id ) {
                    if(element.count == 0 && c == -1){
                        return element;
                    }
                    return {
                        product: element.product,
                        count: element.count + c,
                    }
                } else {
                    return element;
                }
            });
            await AsyncStorage.setItem(`${userID}`, JSON.stringify(array));
            const result = await AsyncStorage.getItem(`${userID}`);
            dispatch(addedCartsRedux([...JSON.parse(result)]));

        } catch (error) {
            console.log('Hovered error', error)
        }
    }

    const IncreamentHandler = async (product) => {
        try {
            const resp = await AsyncStorage.getItem('user');
            const userID = JSON.parse(resp).person.id;
            const req = await AsyncStorage.getItem(`${userID}`);

            if (!req) {
                setIsHovered(true);
            } else {
                await CardAddHandler(product, userID, 1);
                setIsHovered(true);
            }
        } catch (error) {
            console.log('Increment error', error);
        }
    }
    const DecreamentHandler = async (product) => {
        try {
            const resp = await AsyncStorage.getItem('user');
            const userID = JSON.parse(resp).person.id;
            const req = await AsyncStorage.getItem(`${userID}`);

            if (!req || !product.count) {
                setIsHovered(true);
            } else {
                await CardAddHandler(product, userID, -1);
                setIsHovered(true);
            }
        } catch (error) {
            console.log('Decreament error', error);
        }
    }


    const RemoveCartHandler = async(data) => {
        try {
            const resp = await AsyncStorage.getItem('user');
            const userID = JSON.parse(resp).person.id;
            const req = await AsyncStorage.getItem(`${userID}`);
            const arrData = JSON.parse(req);

            const newArrData = arrData.filter(element => {
                if (element.product.id !== data.product.id) {
                    return element;
                }
            })
            await AsyncStorage.setItem(`${userID}`, JSON.stringify(newArrData));
            dispatch(addedCartsRedux(newArrData));

        } catch (error) {
            console.log('Hovered error', error)
        }

    }

    // useEffect(() => {
    //     // Hovered(item);
    // }, [selector, isHovered])


    return (<>
        <View style={styles.itemcontainer}>
            <View style={styles.imgBox}>
                <Image style={styles.img} source={{ uri: `${item.product.image}` }} />
            </View>
            <View style={styles.textBox}>
                <View>
                    <Text style={styles.title}>Title: <Text style={{ color: 'black' }}>{item.product.title}</Text> </Text>
                    <Text>Price: <Text style={{ color: 'black' }}>{item.product.price}$</Text></Text>
                </View>
                <Text style={{ width: '100%' }} > Total No.: <Text style={{ color: '#ffc', fontSize: 16 }}>{item.count}</Text></Text>
                <Text style={{ width: '100%' }} > Total: <Text style={{ color: '#ffc', fontSize: 24 }}>{(item.product.price * item.count).toFixed(2)}</Text>$</Text>
                <View style={styles.flex}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => IncreamentHandler(item)}
                    >
                        <Text style={styles.buttonText}>&#43;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, isHovered && styles.buttonHovered]}
                        onPressIn={() => DecreamentHandler(item)}
                    >
                        <Text style={styles.buttonText}>&#45;</Text>
                    </TouchableOpacity>
                    <Button onPress={()=> RemoveCartHandler(item)} title="Remove" />
                </View>
            </View>
        </View>
    </>)
}

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        fontWeight: '800',
        height: 30,
        overflow: 'hidden',
    },
    price: {
        fontSize: 24,
    },

    itemcontainer: {
        width: 'calc(100%-20)',
        backgroundColor: '#6F61C0',
        borderRadius: 10,
        elevation: 4,
        overflow: 'hidden',
        flex: 1,
        flexDirection: 'row',
        padding: 6,
        marginTop: 5,
        marginBottom: 5,
    },

    imgBox: {
        width: '45%',
        height: '100%',
    },

    img: {
        width: '100%',
        height: '100%',
    },

    textBox: {
        width: "60%",
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 20,

    },

    flex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },

    button: {
        backgroundColor: '#64747ace',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 100,
        padding: 0,
        margin: 0,

    },

    buttonText: {
        padding: 0,
        margin: 0,

        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },
    buttonHovered: {
        backgroundColor: '#0056b3',
        opacity: 0.8,
    },
})