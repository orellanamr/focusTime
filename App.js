import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
import { FocusHistory } from "./src/features/FocusHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      const savedHistory = await AsyncStorage.getItem("focusHistory");
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    };
    loadHistory();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("focusHistory", JSON.stringify(history));
  }, [history]);

  const renderFocus = () => (
    <>
      <Focus addSubject={setCurrentSubject} />
      <FocusHistory history={history} clearHistory={() => setHistory([])} />
    </>
  );

  const renderTimer = () => (
    <Timer
      focusSubject={currentSubject}
      onTimerEnd={(subject) => {
        if (!history.includes(subject)) {
          setHistory([...history, subject]);
        }
      }}
      clearSubject={() => setCurrentSubject(null)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? renderFocus() : renderTimer()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
