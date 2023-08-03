import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";



export default function CheckOut({navigation}) {
    const [checked, setChecked] = useState(false);
    const [isHovered, setIsHovered] = useState('');
    const [option, setOption] = useState('');

    const handlePressIn = (value) => {
        // navigation.navigate(value)
        setOption(value);
        setIsHovered(value);
    };
    const handlePress = (value) => {
        navigation.navigate(value)
    };


    const handleCheckboxToggle = () => {
        setChecked(!checked);
    };

    return (<>
            <View style={styles.fixedup}>
            <Text style={{textAlign: 'center', fontSize: 32, color: '#fff'}}>PAYMET MODE</Text>

            </View>
        <View style={styles.checkContainer}>
            <ScrollView style={{ marginTop: 20 }} contentContainerStyle={styles.checkContainer}>
                <Text style={styles.heading}>Select a payment method</Text>
                <View style={{ gap: 10 }}>
                    <Text style={styles.heading}>CASH PAY</Text>
                    <TouchableOpacity
                        style={[styles.paymentBox, (isHovered == 'cash') && styles.fillbox]}
                        onPressIn={() => handlePressIn('cash')}
                    >
                        <View style={styles.circle}><Text style={(isHovered == 'cash') && styles.fill}></Text></View>
                        <View>
                            <Text style={styles.subHeading}>Cash on Delevery (Cash/Card/UPI)</Text>
                            <Text style={styles.subHeading}>Cash, UPI and Cards accepted.</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, gap: 10 }}>
                    <Text style={styles.heading}>MORE WAYS TO PAY</Text>
                    <TouchableOpacity
                        style={[styles.paymentBox, (isHovered == 'card') && styles.fillbox]}
                        onPressIn={() => handlePressIn('card')}
                    >
                        <View style={styles.circle}><Text style={(isHovered == 'card') && styles.fill}></Text></View>
                        <View>
                            <Text style={styles.subHeading}>Credit or debit card</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.paymentBox, (isHovered == 'upi') && styles.fillbox]}
                        onPressIn={() => handlePressIn('upi')}
                    >
                        <View style={styles.circle}><Text style={(isHovered == 'upi') && styles.fill}></Text></View>
                        <View>
                            <Text style={styles.subHeading}>UPI Apps</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.paymentBox, (isHovered == 'bank') && styles.fillbox]}
                        onPressIn={() => handlePressIn('bank')}
                    >
                        <View style={styles.circle}><Text style={(isHovered == 'bank') && styles.fill}></Text></View>
                        <Text style={styles.subHeading}>Net Banking</Text>
                        <View>
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView >
        </View >
        <View style={styles.fixed}>
            <TouchableOpacity
            style={styles.fixed}
                onPressIn={() => handlePress(option)}
            >
                <Text style={{textAlign: 'center', fontSize: 32, color: '#fff'}}>Click Hare</Text>
                <View>
                </View>
            </TouchableOpacity>

        </View>
    </>)
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
        fontWeight: '500',
    },
    subHeading: {
        fontSize: 16,
        color: 'black',
        fontWeight: '800',
    },
    checkContainer: {
        marginTop: 40,
        paddingLeft: 10,
        width: '100%',
        height: "auto",
        flex: 1,
        gap: 16,
    },
    paymentBox: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        backgroundColor: '#dcdddcb0',
        shadowColor: '#dcdddcb0',
        borderRadius: 20,
        padding: 20,
        elevation: 40,
    },
    fillbox: {
        backgroundColor: '#9bffb27a',
        shadowColor: '#9bffb27a',

    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fill: {
        width: 22,
        height: 22,
        borderRadius: 100,
        backgroundColor: 'gray',
    },

    fixed: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent:'center',
        height: 80,
        backgroundColor: '#AA77FF',
    },
    fixedup: {
        position: 'absolute',
        top: 0,
        width: '100%',
        justifyContent:'center',
        height: 80,
        backgroundColor: 'gray',
    }
})