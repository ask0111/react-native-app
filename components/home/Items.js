import { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default function Item({ item }) {
    console.log(item, 'i')
    const [isHovered, setIsHovered] = useState(false);
    // const navigation = useNavigation();

    const handlePressIn = () => {
        setIsHovered(true);
    };

    const handlePressOut = () => {
        setIsHovered(false);
    };

    const JumpDetails = (data)=>{
        item.navigation.push('details', data)
    }

    return (<>
        <ScrollView style={styles.itemcontainer}>
            <View style={styles.imgBox}>
                <Image style={styles.img} source={{ uri: `${item.prod.image}` }} />
            </View>
            <View style={styles.textBox}>
                <View>
                    <Text style={styles.title}>Title: <Text style={{color: 'black'}}>{item.prod.title}</Text> </Text>
                    <Text>Price: <Text style={{color: 'black'}}>{item.prod.price}$</Text></Text>
                </View>
                <View style={styles.flex}>
                    <TouchableOpacity onPress={()=>JumpDetails(item.prod)} style={styles.button}>
                        <Text style={styles.buttonText}>View More Details</Text>
                    </TouchableOpacity>
                    <View style={styles.flex}>
                        <TouchableOpacity
                            style={[styles.button, isHovered && styles.buttonHovered]}
                            onPressIn={handlePressIn}
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