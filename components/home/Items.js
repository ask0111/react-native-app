import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addedCartsRedux } from "../Redux/Action";


export default function Item({ item }) {
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();

    const addedCarts = useSelector((state) => state.addedCartsReducer);

    const JumpDetails = (data) => {
        item.navigation.push('details', data)
    }

    const RemoveHandler = async (product, userID) => {
        try {
            const req = await AsyncStorage.getItem(`${userID}`);
            const arrData = JSON.parse(req);
            // console.log(arrData, 'datasremoc=ve');
            const productArr = arrData.filter((data) => {
                if (data.id !== product.id) {
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
                await AsyncStorage.setItem(`${userID}`, JSON.stringify([product]));
            } else {
                await AsyncStorage.setItem(`${userID}`, JSON.stringify([...JSON.parse(req), product]));
            }
            const r = await AsyncStorage.getItem(`${userID}`);
            // console.log(r);

        } catch (error) {
            console.log('Add Card Error', error);
        }
    }
    const isAddedHandler = async (product) => {
        try {
            const resp = await AsyncStorage.getItem('user');
            const userID = JSON.parse(resp).person.id;

            const req = await AsyncStorage.getItem(`${userID}`);

            if (!req && !isHovered) {
                await CardAddHandler(product, userID);
                setIsHovered(true);
            } else if (!isHovered) {
                await CardAddHandler(product, userID);
                setIsHovered(true);
            } else {
                await RemoveHandler(product, userID);
                setIsHovered(false)
            }
            const result = await AsyncStorage.getItem(`${userID}`);
            console.log('error')
            dispatch(addedCartsRedux([...JSON.parse(result)]));
            console.log('error1')

        } catch (error) {
            console.log('carts error', error);
        }
    }

    const Hovered = async (data) => {
        
        const resp = await AsyncStorage.getItem('user');
        const userID = JSON.parse(resp).person.id;
        const req = await AsyncStorage.getItem(`${userID}`);
        const arrData = JSON.parse(req);
        arrData.forEach(element => {
            if (element.id == data.id) {
                setIsHovered(true);
            }
        })
    }

    useEffect(() => {
        Hovered(item.prod);
    }, [addedCarts, isHovered])

    return (<>
        <ScrollView style={styles.itemcontainer}>
            <View style={styles.imgBox}>
                <Image style={styles.img} source={{ uri: `${item.prod.image}` }} />
            </View>
            <View style={styles.textBox}>
                <View>
                    <Text style={styles.title}>Title: <Text style={{ color: 'black' }}>{item.prod.title}</Text> </Text>
                    <Text>Price: <Text style={{ color: 'black' }}>{item.prod.price}$</Text></Text>
                </View>
                <View style={styles.flex}>
                    <TouchableOpacity onPress={() => JumpDetails(item.prod)} style={styles.button}>
                        <Text style={styles.buttonText}>View More Details</Text>
                    </TouchableOpacity>
                    <View style={styles.flex}>
                        <TouchableOpacity
                            style={[styles.button, isHovered && styles.buttonHovered]}
                            onPress={() => isAddedHandler(item.prod)}
                        // onPressOut={handlePressOut}
                        >
                            <Text style={styles.buttonText}>Add to Card</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>
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
        width: '45%',
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 4,
        overflow: 'hidden',
    },

    imgBox: {
        width: '100%',
        height: 100,
    },

    img: {
        width: '100%',
        height: '100%',
    },

    textBox: {
        width: "100%",
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 20,

        justifyContent: 'space-between',
    },

    flex: {
        display: 'flex',
        gap: 10,
    },

    button: {
        backgroundColor: '#64747ace',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: 4,
    },

    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonHovered: {
        backgroundColor: '#0056b3',
        opacity: 0.8,
    },
})