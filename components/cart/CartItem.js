

import { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default function CartItem({ item }) {
    const [isHovered, setIsHovered] = useState(false);

    const handlePressIn = () => {
        setIsHovered(true);
    };

    const handlePressOut = () => {
        setIsHovered(false);
    };

    return (<>
        <View style={styles.itemcontainer}>
            <View style={styles.imgBox}>
                <Image style={styles.img} source={{ uri: `${item.image}` }} />
            </View>
            <View style={styles.textBox}>
                <View>
                    <Text style={styles.title}>Title: <Text style={{color: 'black'}}>{item.title}</Text> </Text>
                    <Text>Price: <Text style={{color: 'black'}}>{item.price}$</Text></Text>
                </View>
                    <Text style={{width: '100%'}} > Total No.: <Text style={{color: '#ffc', fontSize: 16}}>{2}</Text></Text>
                    <Text style={{width: '100%'}} > Total: <Text style={{color: '#ffc', fontSize: 24}}>{item.price * 2}</Text>$</Text>
                <View style={styles.flex}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>&#43;</Text>
                    </TouchableOpacity>
                    <View style={styles.flex}>
                        <TouchableOpacity
                            style={[styles.button, isHovered && styles.buttonHovered]}
                            onPressIn={handlePressIn}
                            // onPressOut={handlePressOut}
                        >
                            <Text style={styles.buttonText}>&#45;</Text>
                        </TouchableOpacity>
                    </View>
                    <Button title="Remove" />
                </View>
            </View>
        </View>
    </>)
}

const styles = StyleSheet.create({

    title:{
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
        backgroundColor: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
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