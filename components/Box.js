import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

let turn = 'Player 1';

export default function Box() {
    const [content, setContent] = useState("");
    const placeSign = () => {
        if (turn == "Player 1") {
            setContent("O");
            turn = "Player 2";
        } else if (turn == "Player 2") {
            setContent("X");
            turn = "Player 1";
        }
    };

    return (
        <TouchableOpacity disabled={content ? true : false} onPress={placeSign} style={styles.box}>
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
