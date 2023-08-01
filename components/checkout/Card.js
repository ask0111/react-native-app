import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

export default function Card() {
    return (<>
            <View style={styles.fixedup}>
                <Text style={{ textAlign: 'center', fontSize: 32, color: '#fff' }}>PAYMET MODE</Text>
            </View>
        <ScrollView contentContainerStyle={styles.scrollbar}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Payment Card Details</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Card Number"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cardholder Name"
                    />
                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input, { flex: 1, marginRight: 10 }]}
                            placeholder="Expiry Date (MM/YY)"
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={[styles.input, { flex: 1, marginLeft: 10 }]}
                            placeholder="CVV"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Submit Payment</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    </>)
}

const styles = StyleSheet.create({
    scrollbar:{
        width: '100%',
        flex: 1,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fixedup: {
        position: 'absolute',
        top: 0,
        width: '100%',
        justifyContent: 'center',
        height: 80,
        backgroundColor: 'gray',
        zIndex: 1,
    },
    container: {
        // marginTop: 90,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        padding: 20,
    },
    card: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})