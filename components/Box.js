import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Box() {
    const [content, setContent] = useState("O")

    return (
        <TouchableOpacity onPress={
            () => {
                setContent(content == "O" ? "X" : "O")
            }
        } style={styles.box}>
            <Text style={styles.text}>{content}</Text>
        </TouchableOpacity>
    );
}

const boxSize = 60;
const color = "deepskyblue";

export { color };

const styles = StyleSheet.create({
    box: {
        backgroundColor: "transparent",
        width: boxSize,
        height: boxSize,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: color,
        borderRadius: 5,
        margin: 1,
        shadowColor: color,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
    },
    text: {
        color: color,
        fontSize: 25,
        fontFamily: "monospace",
    },
});
