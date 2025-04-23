import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  const [error, setError] = useState(false);

  const handleAddSubject = () => {
    if (!subject) {
      setError(true);
      return;
    }
    setError(false);
    addSubject(subject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.textInput, { backgroundColor: colors.white }]}
          onChangeText={(text) => {
            setSubject(text);
            setError(false);
          }}
          label="What would you like to focus on?"
          placeholder="E.g., Study React Native"
          theme={{
            colors: {
              primary: colors.blue,
              text: colors.black,
              placeholder: colors.gray,
              background: colors.white,
            },
          }}
        />
        {error && <Text style={styles.errorText}>Please enter a subject!</Text>}
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={handleAddSubject}
            disabled={!subject}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
  },
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 2,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "top",
    flexDirection: "row",
  },
  errorText: {
    flexDirection: "row",
    color: colors.red,
    fontSize: 12,
    marginTop: 8,
  },
});
