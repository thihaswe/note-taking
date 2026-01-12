import CIcon from "@/common/c-icon";
import { expenseIcons } from "@/constants/icons";
import { Icon } from "@/types/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ExpenseTab() {
  return (
    <View style={styles.container}>
      {expenseIcons.map((item: Icon) => (
        <Pressable style={styles.item}>
          <View style={styles.iconWrapper}>
            <CIcon type={item.iconType} name={item.iconName} size={28} />
          </View>
          <Text style={styles.label}>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap", // wrap to next line if needed
    justifyContent: "space-around", // evenly space items
    padding: 10,
  },
  iconWrapper: {
    width: 40, // fixed width
    height: 40, // fixed height
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: 80, // fixed width for consistent sizing
    alignItems: "center",
    marginVertical: 12,
  },
  label: {
    fontSize: 12, // same size for all labels
    textAlign: "center",
    marginTop: 4, // spacing between icon and text
  },
});
