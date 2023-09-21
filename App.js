import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import styles from "./AppStyles";
import Board from './components/Board'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Board />
        </SafeAreaView>
    );
}
