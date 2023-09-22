import { useState } from 'react';
import { StyleSheet, View } from "react-native";
import Box, { color } from "./Box";

export default function Board() {
    return (
        <View style={styles.board}>
            <View style={styles.row}>
                <Box />
                <Box />
                <Box />
            </View>
            <View style={styles.row}>
                <Box />
                <Box />
                <Box />
            </View>
            <View style={styles.row}>
                <Box />
                <Box />
                <Box />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    board: {
        borderColor: color,
        borderWidth: 2,
        borderRadius: 5,
    },
    row: {
        flexDirection: "row"
    }
});
