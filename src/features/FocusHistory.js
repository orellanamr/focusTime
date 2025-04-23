import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";

export const FocusHistory = ({ history, clearHistory }) => {
  if (!history || !history.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          We haven't focused on anything yet!
        </Text>
      </View>
    );
  }

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on: </Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <RoundedButton title="Clear" size={75} onPress={clearHistory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    paddingLeft: spacing.xxl,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.xxxl,
    paddingLeft: spacing.lg,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    paddingTop: spacing.xxl,
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: fontSizes.md,
    color: colors.white,
    textAlign: "center",
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray,
    marginVertical: spacing.sm,
  },
});
